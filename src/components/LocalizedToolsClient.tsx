"use client";

import { FormEvent, useEffect, useState } from "react";
import { localToolIds, type LocalToolId, type LocalizedTool, type LocalizedToolsCopy } from "@/content/localized/tools";
import { decodeQrImage } from "@/lib/decodeQrImage";

type Tone = "positive" | "caution" | "warning";
type Result = { tone: Tone; detail: string };

const textAreaTools: LocalToolId[] = ["message", "bulk", "message-links", "email-list", "copy", "email-header", "bec-request", "redirect-chain"];

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

  if (activeTool === "qr") return <LocalizedQrScanner copy={copy} tool={tool} />;

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
      </div> : activeTool === "first-aid" ? <label className="hebrew-tool-label" htmlFor="localized-first-aid">{tool.fieldLabel}<select className="hebrew-tool-select" id="localized-first-aid" onChange={(event) => setValue(event.target.value)} value={value}>{tool.options?.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label> : tool.checklist ? <fieldset className="hebrew-tool-checklist"><legend>{tool.fieldLabel}</legend>{tool.checklist.map((item, index) => <label className="hebrew-tool-check" key={item}><input checked={Boolean(selectedChecks[index])} onChange={(event) => setSelectedChecks((current) => ({ ...current, [index]: event.target.checked }))} type="checkbox" /><span>{item}</span></label>)}</fieldset> : activeTool === "official-links" ? <div className="hebrew-tool-two-column">
        <label className="hebrew-tool-label" htmlFor="localized-policy-business">{tool.fieldLabel}<input className="hebrew-tool-input" id="localized-policy-business" onChange={(event) => setValue(event.target.value)} placeholder={tool.placeholder} value={value} /></label>
        <label className="hebrew-tool-label" htmlFor="localized-policy-domain">{tool.secondFieldLabel}<input className="hebrew-tool-input" dir="ltr" id="localized-policy-domain" onChange={(event) => setSecondValue(event.target.value)} placeholder="example.com" value={secondValue} /></label>
      </div> : activeTool === "utm-builder" ? <div className="hebrew-tool-two-column">
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

function LocalizedQrScanner({ copy, tool }: { copy: LocalizedToolsCopy; tool: LocalizedTool }) {
  const [result, setResult] = useState<Result | null>(null);
  const [decoded, setDecoded] = useState("");
  const [scanning, setScanning] = useState(false);

  async function scan(file: File | undefined) {
    if (!file) return;
    setScanning(true);
    try {
      const value = await decodeQrImage(file);
      setDecoded(value);
      setResult(value ? inspectLocalizedUrl(value, copy) : { tone: "caution", detail: copy.resultDetails.invalid });
    } catch {
      setResult({ tone: "warning", detail: copy.resultDetails.invalid });
    } finally {
      setScanning(false);
    }
  }

  return <form className="hebrew-tool-form" id="localized-tool-panel-qr" onSubmit={(event) => event.preventDefault()} role="tabpanel" aria-labelledby="localized-tool-tab-qr">
    <h2>{tool.formTitle}</h2>
    <label className="hebrew-tool-label" htmlFor="localized-qr-image">{tool.fieldLabel}<input accept="image/*" className="hebrew-tool-input" id="localized-qr-image" onChange={(event) => void scan(event.target.files?.[0])} type="file" /></label>
    <p className="hebrew-tool-note">{scanning ? copy.resultLabels.empty : tool.note}</p>
    {decoded ? <p className="hebrew-tool-result is-caution"><bdi dir="ltr">{decoded}</bdi></p> : null}
    {result ? <output aria-live="polite" className={`hebrew-tool-result is-${result.tone}`}><strong>{copy.resultLabels[result.tone]}</strong><p>{result.detail}</p><p>{copy.resultLabels.body}</p></output> : null}
  </form>;
}

function runLocalCheck(tool: LocalToolId, value: string, secondValue: string, selectedChecks: Record<number, boolean>, copy: LocalizedToolsCopy): Result {
  const input = value.trim();
  if (tool === "first-aid") {
    const option = copy.tools["first-aid"].options?.find((item) => item.value === input) || copy.tools["first-aid"].options?.[0];
    return option ? { tone: "caution", detail: option.guidance } : { tone: "caution", detail: copy.resultDetails.checked };
  }
  if (tool === "website" || tool === "account-protection" || tool === "qr-campaign") {
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
  if (tool === "link") return inspectLocalizedUrl(input, copy);
  if (tool === "email-header") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const auth = input.toLowerCase();
    const passes = ["spf=pass", "dkim=pass", "dmarc=pass"].filter((token) => auth.includes(token)).length;
    const failures = (auth.match(/(?:spf|dkim|dmarc)=(?:fail|softfail|neutral|none)/g) || []).length;
    const fromDomain = extractHeaderDomain(input, "from");
    const replyDomain = extractHeaderDomain(input, "reply-to");
    const replyMismatchHint = Boolean(fromDomain && replyDomain && fromDomain !== replyDomain);
    return { tone: failures >= 2 ? "warning" : failures || passes < 2 || replyMismatchHint ? "caution" : "positive", detail: `${passes}/3. ${copy.resultDetails.checked}` };
  }
  if (tool === "bec-request") {
    if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
    const patterns = /urgent|immediately|today|bank details|new account|confidential|do not call|gift card|crypto|wire|transfer|passwort|dringend|銀行|至急|تحويل|عاجل|سري|तुरंत|बैंक|urgent|confidentiel|virement|紧急|银行|转账/gi;
    const matches = (input.match(patterns) || []).length;
    return { tone: matches >= 3 ? "warning" : matches ? "caution" : "positive", detail: `${matches}. ${copy.resultDetails.checked}` };
  }
  if (tool === "redirect-chain") {
    const entries = input.split(/\r?\n/).map((item) => item.trim()).filter(Boolean).slice(0, 12);
    if (!entries.length) return { tone: "warning", detail: copy.resultDetails.empty };
    const parsed = entries.map((entry) => { try { return toUrl(entry); } catch { return null; } });
    const invalid = parsed.filter((item) => !item).length;
    const hosts = new Set(parsed.filter((item): item is URL => Boolean(item)).map((item) => item.hostname));
    const concerns = invalid + Number(hosts.size > 2) + Number(entries.length > 5) + parsed.filter((item) => item && item.protocol !== "https:").length;
    return { tone: concerns >= 3 ? "warning" : concerns ? "caution" : "positive", detail: `${entries.length} / ${hosts.size}. ${copy.resultDetails.checked}` };
  }
  if (tool === "official-links") {
    if (!input || !secondValue.trim()) return { tone: "warning", detail: copy.resultDetails.empty };
    let domain = "";
    try { domain = toUrl(secondValue).hostname.replace(/^www\./, ""); } catch { return { tone: "warning", detail: copy.resultDetails.invalid }; }
    return { tone: "positive", detail: buildLocalizedOfficialPolicy(copy.locale, input, domain) };
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

function inspectLocalizedUrl(input: string, copy: LocalizedToolsCopy): Result {
  if (!input) return { tone: "warning", detail: copy.resultDetails.empty };
  try {
    const url = toUrl(input);
    const host = url.hostname.toLowerCase();
    const concerns = Number(url.protocol !== "https:") + Number(host.includes("xn--")) + Number(/^\d+(?:\.\d+){3}$/.test(host)) + Number(["bit.ly", "tinyurl.com", "t.co", "cutt.ly"].some((item) => host === item || host.endsWith(`.${item}`)));
    return { tone: concerns > 1 ? "warning" : concerns ? "caution" : "positive", detail: copy.resultDetails.checked };
  } catch { return { tone: "warning", detail: copy.resultDetails.invalid }; }
}

function extractHeaderDomain(headers: string, fieldName: string) {
  const match = headers.match(new RegExp(`^${fieldName}:\\s*([^\\r\\n]+)`, "im"));
  const address = match?.[1]?.match(/@([a-z0-9.-]+\.[a-z]{2,})/i);
  return address?.[1]?.toLowerCase().replace(/^www\./, "") || "";
}

function buildLocalizedOfficialPolicy(locale: LocalizedToolsCopy["locale"], name: string, domain: string) {
  const templates = {
    de: `${name} nutzt die offizielle Domain ${domain}. Prüfen Sie diese Adresse, bevor Sie Daten eingeben oder eine Zahlung ausführen. Teilen Sie niemals Passwort oder Bestätigungscode über einen unerwarteten Link.`,
    jp: `${name}の公式ドメインは${domain}です。情報入力や支払いの前に、このドメインであることを確認してください。予期しないリンク先でパスワードや認証コードを共有しないでください。`,
    ar: `النطاق الرسمي لـ ${name} هو ${domain}. تحققوا من العنوان قبل إدخال البيانات أو تنفيذ دفعة، ولا تشاركوا كلمة مرور أو رمز تحقق عبر رابط غير متوقع.`,
    hi: `${name} का आधिकारिक डोमेन ${domain} है। जानकारी भरने या भुगतान करने से पहले पता जाँचें और किसी अनपेक्षित लिंक पर पासवर्ड या सत्यापन कोड साझा न करें।`,
    fr: `Le domaine officiel de ${name} est ${domain}. Vérifiez cette adresse avant de saisir des données ou d’effectuer un paiement. Ne transmettez jamais de mot de passe ou de code via un lien inattendu.`,
    zh: `${name}的官方域名是${domain}。输入信息或付款前请核对地址，不要通过意外收到的链接提交密码或验证码。`,
  };
  return templates[locale];
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
