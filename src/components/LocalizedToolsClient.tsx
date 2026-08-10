"use client";

import { FormEvent, useEffect, useState } from "react";
import type { LocalToolId, LocalizedToolsCopy } from "@/content/localized/tools";

type Tone = "positive" | "caution" | "warning";

type Result = {
  tone: Tone;
  detail: string;
};

const toolIds: LocalToolId[] = ["link", "message", "domain", "email", "campaign"];

export function LocalizedToolsClient({ copy }: { copy: LocalizedToolsCopy }) {
  const [activeTool, setActiveTool] = useState<LocalToolId>("link");
  const active = copy.tools[activeTool];

  useEffect(() => {
    const requested = window.location.hash.slice(1) as LocalToolId;
    if (toolIds.includes(requested)) setActiveTool(requested);
  }, []);

  return (
    <div className="hebrew-tools-shell" dir="auto">
      <div className="hebrew-tools-tabs" role="tablist" aria-label={copy.pageTitle}>
        {toolIds.map((id) => {
          const tool = copy.tools[id];
          return (
            <button
              aria-controls={`localized-tool-panel-${id}`}
              aria-selected={activeTool === id}
              className={`hebrew-tools-tab${activeTool === id ? " is-active" : ""}`}
              id={`localized-tool-tab-${id}`}
              key={id}
              onClick={() => setActiveTool(id)}
              role="tab"
              type="button"
            >
              <span>{tool.title}</span>
              <small>{tool.summary}</small>
            </button>
          );
        })}
      </div>

      <LocalizedToolPanel
        activeTool={activeTool}
        copy={copy}
        tool={active}
      />
    </div>
  );
}

function LocalizedToolPanel({ activeTool, copy, tool }: { activeTool: LocalToolId; copy: LocalizedToolsCopy; tool: LocalizedToolsCopy["tools"][LocalToolId] }) {
  const [value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    setValue("");
    setSecondValue("");
    setResult(null);
  }, [activeTool]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(runLocalCheck(activeTool, value, secondValue, copy));
  }

  return (
    <form className="hebrew-tool-form" id={`localized-tool-panel-${activeTool}`} onSubmit={handleSubmit} role="tabpanel" aria-labelledby={`localized-tool-tab-${activeTool}`}>
      <h2>{tool.formTitle}</h2>
      {activeTool === "domain" ? (
        <div className="hebrew-tool-two-column">
          <label className="hebrew-tool-label" htmlFor="localized-known-domain">{tool.fieldLabel}
            <input className="hebrew-tool-input" id="localized-known-domain" onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} type="text" value={value} />
          </label>
          <label className="hebrew-tool-label" htmlFor="localized-received-domain">{copy.tools.domain.fieldLabel}
            <input className="hebrew-tool-input" id="localized-received-domain" onChange={(event) => setSecondValue(event.target.value)} placeholder={copy.tools.domain.placeholder} type="text" value={secondValue} />
          </label>
        </div>
      ) : activeTool === "message" ? (
        <label className="hebrew-tool-label" htmlFor="localized-message-input">{tool.fieldLabel}
          <textarea className="hebrew-tool-input hebrew-tool-textarea" id="localized-message-input" onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} rows={6} value={value} />
        </label>
      ) : (
        <label className="hebrew-tool-label" htmlFor="localized-tool-input">{tool.fieldLabel}
          <input className="hebrew-tool-input" id="localized-tool-input" inputMode={activeTool === "email" ? "email" : "url"} onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} type={activeTool === "email" ? "email" : "text"} value={value} />
        </label>
      )}
      <button className="btn-primary" type="submit">{tool.submit}</button>
      {result ? <output className={`hebrew-tool-result is-${result.tone}`}><strong>{copy.resultLabels[result.tone]}</strong><p>{result.detail}</p><p>{copy.resultLabels.body}</p></output> : <p className="hebrew-tool-note">{tool.note}</p>}
    </form>
  );
}

function runLocalCheck(tool: LocalToolId, value: string, secondValue: string, copy: LocalizedToolsCopy): Result {
  const input = value.trim();
  if (tool === "link") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    try {
      const url = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(input) ? input : `https://${input}`);
      const host = url.hostname.toLowerCase();
      const concerns = Number(url.protocol !== "https:") + Number(host.includes("xn--")) + Number(/^\d+(?:\.\d+){3}$/.test(host)) + Number(["bit.ly", "tinyurl.com", "t.co", "cutt.ly"].some((item) => host === item || host.endsWith(`.${item}`)));
      return { tone: concerns > 1 ? "warning" : concerns ? "caution" : "positive", detail: copy.resultDetails.checked };
    } catch {
      return { tone: "warning", detail: copy.resultDetails.invalid };
    }
  }

  if (tool === "message") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const matches = (input.match(/password|otp|verification|urgent|immediately|payment|transfer|https?:\/\/|confidential|passwort|urgent|mot de passe|رمز|عاجل|पासवर्ड|验证码|緊急/gi) || []).length;
    return { tone: matches >= 3 ? "warning" : matches ? "caution" : "positive", detail: copy.resultDetails.checked };
  }

  if (tool === "domain") {
    const first = cleanDomain(input);
    const second = cleanDomain(secondValue);
    if (!first || !second) return { tone: "warning", detail: copy.resultDetails.empty };
    const distance = levenshtein(first, second);
    const close = first !== second && distance <= Math.max(2, Math.ceil(Math.max(first.length, second.length) * 0.2));
    return { tone: first === second ? "positive" : close || second.includes("xn--") ? "warning" : "caution", detail: copy.resultDetails.checked };
  }

  if (tool === "email") {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    const concern = /xn--|\d{4,}/i.test(input);
    return { tone: !valid || concern ? "warning" : "positive", detail: valid ? copy.resultDetails.checked : copy.resultDetails.invalid };
  }

  if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
  try {
    const url = new URL(input);
    const present = ["utm_source", "utm_medium", "utm_campaign"].filter((name) => url.searchParams.get(name)?.trim());
    return { tone: url.protocol !== "https:" || !present.length ? "warning" : present.length < 3 ? "caution" : "positive", detail: copy.resultDetails.checked };
  } catch {
    return { tone: "warning", detail: copy.resultDetails.invalid };
  }
}

function cleanDomain(value: string) {
  return value.trim().toLowerCase().replace(/^[a-z][a-z\d+.-]*:\/\//i, "").replace(/^www\./, "").split(/[/?#]/)[0].replace(/\.$/, "");
}

function levenshtein(first: string, second: string) {
  const row = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let i = 1; i <= first.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= second.length; j += 1) {
      const current = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + Number(first[i - 1] !== second[j - 1]));
      previous = current;
    }
  }
  return row[second.length];
}
