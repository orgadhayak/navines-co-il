"use client";

import { FormEvent, useEffect, useState } from "react";
import { localToolIds, type LocalToolId, type LocalizedTool, type LocalizedToolsCopy } from "@/content/localized/tools";

type Tone = "positive" | "caution" | "warning";
type Result = { tone: Tone; detail: string };

const textAreaTools: LocalToolId[] = ["message", "bulk", "message-links", "email-list", "copy"];

export function LocalizedToolsClient({ copy }: { copy: LocalizedToolsCopy }) {
  const [activeTool, setActiveTool] = useState<LocalToolId>("link");
  const active = copy.tools[activeTool];

  useEffect(() => {
    const requested = window.location.hash.slice(1) as LocalToolId;
    if (localToolIds.includes(requested)) setActiveTool(requested);
  }, []);

  function selectTool(id: LocalToolId) {
    setActiveTool(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <div className="hebrew-tools-shell" dir="auto">
      <div className="hebrew-tools-tabs" role="tablist" aria-label={copy.pageTitle}>
        {localToolIds.map((id) => {
          const tool = copy.tools[id];
          return <button aria-controls={`localized-tool-panel-${id}`} aria-selected={activeTool === id} className={`hebrew-tools-tab${activeTool === id ? " is-active" : ""}`} id={`localized-tool-tab-${id}`} key={id} onClick={() => selectTool(id)} role="tab" type="button"><span>{tool.title}</span><small>{tool.summary}</small></button>;
        })}
      </div>
      <LocalizedToolPanel activeTool={activeTool} copy={copy} tool={active} />
    </div>
  );
}

function LocalizedToolPanel({ activeTool, copy, tool }: { activeTool: LocalToolId; copy: LocalizedToolsCopy; tool: LocalizedTool }) {
  const [value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [fourthValue, setFourthValue] = useState("");
  const [selectedChecks, setSelectedChecks] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [builtUrl, setBuiltUrl] = useState("");

  useEffect(() => {
    setValue(""); setSecondValue(""); setThirdValue(""); setFourthValue(""); setSelectedChecks({}); setResult(null); setBuiltUrl("");
  }, [activeTool]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (activeTool === "utm-builder") {
      const built = buildCampaignUrl(value, secondValue, thirdValue, fourthValue, copy);
      setResult(built.result);
      setBuiltUrl(built.url);
      return;
    }
    setResult(runLocalCheck(activeTool, value, secondValue, selectedChecks, copy));
  }

  return (
    <form className="hebrew-tool-form" id={`localized-tool-panel-${activeTool}`} onSubmit={handleSubmit} role="tabpanel" aria-labelledby={`localized-tool-tab-${activeTool}`}>
      <h2>{tool.formTitle}</h2>
      {activeTool === "domain" ? <div className="hebrew-tool-two-column">
        <label className="hebrew-tool-label" htmlFor="localized-known-domain">{tool.fieldLabel}<input className="hebrew-tool-input" id="localized-known-domain" onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} type="text" value={value} /></label>
        <label className="hebrew-tool-label" htmlFor="localized-received-domain">{copy.tools.domain.fieldLabel}<input className="hebrew-tool-input" id="localized-received-domain" onChange={(event) => setSecondValue(event.target.value)} placeholder={copy.tools.domain.placeholder} type="text" value={secondValue} /></label>
      </div> : activeTool === "first-aid" ? <label className="hebrew-tool-label" htmlFor="localized-first-aid">{tool.fieldLabel}<select className="hebrew-tool-select" id="localized-first-aid" onChange={(event) => setValue(event.target.value)} value={value}>{tool.options?.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label> : tool.checklist ? <fieldset className="hebrew-tool-checklist"><legend>{tool.fieldLabel}</legend>{tool.checklist.map((item, index) => <label className="hebrew-tool-check" key={item}><input checked={Boolean(selectedChecks[index])} onChange={(event) => setSelectedChecks((current) => ({ ...current, [index]: event.target.checked }))} type="checkbox" /><span>{item}</span></label>)}</fieldset> : activeTool === "utm-builder" ? <div className="hebrew-tool-two-column">
        <label className="hebrew-tool-label" htmlFor="localized-utm-base">{tool.fieldLabel}<input className="hebrew-tool-input" id="localized-utm-base" inputMode="url" onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} value={value} /></label>
        <label className="hebrew-tool-label" htmlFor="localized-utm-source">UTM source<input className="hebrew-tool-input" id="localized-utm-source" onChange={(event) => setSecondValue(event.target.value)} placeholder="newsletter" value={secondValue} /></label>
        <label className="hebrew-tool-label" htmlFor="localized-utm-medium">UTM medium<input className="hebrew-tool-input" id="localized-utm-medium" onChange={(event) => setThirdValue(event.target.value)} placeholder="email" value={thirdValue} /></label>
        <label className="hebrew-tool-label" htmlFor="localized-utm-campaign">UTM campaign<input className="hebrew-tool-input" id="localized-utm-campaign" onChange={(event) => setFourthValue(event.target.value)} placeholder="summer_launch" value={fourthValue} /></label>
      </div> : textAreaTools.includes(activeTool) ? <label className="hebrew-tool-label" htmlFor="localized-tool-textarea">{tool.fieldLabel}<textarea className="hebrew-tool-input hebrew-tool-textarea" id="localized-tool-textarea" onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} rows={7} value={value} /></label> : <label className="hebrew-tool-label" htmlFor="localized-tool-input">{tool.fieldLabel}<input autoComplete={activeTool === "password-check" ? "off" : undefined} className="hebrew-tool-input" id="localized-tool-input" inputMode={activeTool === "email" ? "email" : activeTool === "password-check" ? "text" : "url"} onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} type={activeTool === "email" ? "email" : activeTool === "password-check" ? "password" : "text"} value={value} /></label>}
      <button className="btn-primary" type="submit">{tool.submit}</button>
      {result ? <><output aria-live="polite" className={`hebrew-tool-result is-${result.tone}`}><strong>{copy.resultLabels[result.tone]}</strong><p>{result.detail}</p><p>{copy.resultLabels.body}</p></output>{builtUrl ? <label className="hebrew-tool-label" htmlFor="localized-built-url">{tool.fieldLabel}<input className="hebrew-tool-input" id="localized-built-url" readOnly value={builtUrl} /></label> : null}</> : <p className="hebrew-tool-note">{tool.note}</p>}
    </form>
  );
}

function runLocalCheck(tool: LocalToolId, value: string, secondValue: string, selectedChecks: Record<number, boolean>, copy: LocalizedToolsCopy): Result {
  const input = value.trim();
  if (tool === "first-aid") {
    const option = copy.tools["first-aid"].options?.find((item) => item.value === input) || copy.tools["first-aid"].options?.[0];
    return option ? { tone: "caution", detail: option.guidance } : { tone: "caution", detail: copy.resultDetails.checked };
  }
  if (tool === "website" || tool === "account-protection") {
    const total = copy.tools[tool].checklist?.length || 0;
    const count = Object.values(selectedChecks).filter(Boolean).length;
    return { tone: count >= Math.max(1, total - 1) ? "positive" : count >= Math.ceil(total / 2) ? "caution" : "warning", detail: `${count}/${total}. ${copy.resultDetails.checked}` };
  }
  if (tool === "bulk") {
    const entries = input.split(/[\s,;]+/).filter(Boolean).slice(0, 10);
    if (!entries.length) return { tone: "warning", detail: copy.resultDetails.empty };
    const invalid = entries.filter((item) => !isUrl(item)).length;
    const warnings = entries.filter((item) => hasUrlConcern(item)).length;
    return { tone: invalid || warnings > 2 ? "warning" : warnings ? "caution" : "positive", detail: `${entries.length}. ${copy.resultDetails.checked}` };
  }
  if (tool === "message-links") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const links = input.match(/(?:https?:\/\/|www\.)[^\s<>'"]+/gi) || [];
    const warnings = links.filter(hasUrlConcern).length;
    return { tone: !links.length ? "caution" : warnings ? "caution" : "positive", detail: `${links.length}. ${copy.resultDetails.checked}` };
  }
  if (tool === "email-list") {
    const emails = input.split(/[\s,;]+/).filter(Boolean).slice(0, 50);
    if (!emails.length) return { tone: "warning", detail: copy.resultDetails.empty };
    const invalid = emails.filter((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)).length;
    const duplicates = emails.length - new Set(emails.map((email) => email.toLowerCase())).size;
    return { tone: invalid ? "warning" : duplicates ? "caution" : "positive", detail: `${emails.length}. ${copy.resultDetails.checked}` };
  }
  if (tool === "copy") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const words = input.split(/\s+/).filter(Boolean).length;
    return { tone: words > 450 ? "caution" : "positive", detail: `${words}. ${copy.resultDetails.checked}` };
  }
  if (tool === "password-check") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const score = Number(input.length >= 14) + Number(/[a-z]/.test(input) && /[A-Z]/.test(input)) + Number(/\d/.test(input)) + Number(/[^A-Za-z0-9]/.test(input)) - Number(/(.)\1\1|1234|qwer|password/i.test(input));
    return { tone: score >= 4 ? "positive" : score >= 2 ? "caution" : "warning", detail: copy.resultDetails.checked };
  }
  if (tool === "link" || tool === "qr") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    try {
      const url = toUrl(input);
      const host = url.hostname.toLowerCase();
      const concerns = Number(url.protocol !== "https:") + Number(host.includes("xn--")) + Number(/^\d+(?:\.\d+){3}$/.test(host)) + Number(["bit.ly", "tinyurl.com", "t.co", "cutt.ly"].some((item) => host === item || host.endsWith(`.${item}`)));
      return { tone: concerns > 1 ? "warning" : concerns ? "caution" : "positive", detail: copy.resultDetails.checked };
    } catch { return { tone: "warning", detail: copy.resultDetails.invalid }; }
  }
  if (tool === "message") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const matches = (input.match(/password|otp|verification|urgent|immediately|payment|transfer|https?:\/\/|confidential|passwort|mot de passe|رمز|عاجل|पासवर्ड|验证码|緊急/gi) || []).length;
    return { tone: matches >= 3 ? "warning" : matches ? "caution" : "positive", detail: copy.resultDetails.checked };
  }
  if (tool === "domain") {
    const first = cleanDomain(input); const second = cleanDomain(secondValue);
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
  try {
    const url = toUrl(input);
    const present = ["utm_source", "utm_medium", "utm_campaign"].filter((name) => url.searchParams.get(name)?.trim());
    return { tone: url.protocol !== "https:" || !present.length ? "warning" : present.length < 3 ? "caution" : "positive", detail: copy.resultDetails.checked };
  } catch { return { tone: "warning", detail: copy.resultDetails.invalid }; }
}

function buildCampaignUrl(baseUrl: string, source: string, medium: string, campaign: string, copy: LocalizedToolsCopy) {
  if (!baseUrl.trim()) return { url: "", result: { tone: "warning" as const, detail: copy.resultDetails.empty } };
  try {
    const url = toUrl(baseUrl);
    if (source.trim()) url.searchParams.set("utm_source", source.trim());
    if (medium.trim()) url.searchParams.set("utm_medium", medium.trim());
    if (campaign.trim()) url.searchParams.set("utm_campaign", campaign.trim());
    const complete = [source, medium, campaign].filter((item) => item.trim()).length === 3;
    return { url: url.toString(), result: { tone: complete ? "positive" as const : "caution" as const, detail: copy.resultDetails.checked } };
  } catch { return { url: "", result: { tone: "warning" as const, detail: copy.resultDetails.invalid } }; }
}

function toUrl(value: string) { return new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : `https://${value}`); }
function isUrl(value: string) { try { toUrl(value); return true; } catch { return false; } }
function hasUrlConcern(value: string) { try { const url = toUrl(value); const host = url.hostname.toLowerCase(); return url.protocol !== "https:" || host.includes("xn--") || /^\d+(?:\.\d+){3}$/.test(host) || ["bit.ly", "tinyurl.com", "t.co", "cutt.ly"].some((item) => host === item || host.endsWith(`.${item}`)); } catch { return true; } }
function cleanDomain(value: string) { return value.trim().toLowerCase().replace(/^[a-z][a-z\d+.-]*:\/\//i, "").replace(/^www\./, "").split(/[/?#]/)[0].replace(/\.$/, ""); }
function levenshtein(first: string, second: string) { const row = Array.from({ length: second.length + 1 }, (_, index) => index); for (let i = 1; i <= first.length; i += 1) { let previous = row[0]; row[0] = i; for (let j = 1; j <= second.length; j += 1) { const current = row[j]; row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + Number(first[i - 1] !== second[j - 1])); previous = current; } } return row[second.length]; }
