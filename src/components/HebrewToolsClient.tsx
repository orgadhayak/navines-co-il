"use client";

import { FormEvent, type ReactNode, useEffect, useState } from "react";
import { hebrewTools } from "@/data/site";

type ToolId = (typeof hebrewTools)[number]["id"];
type ResultTone = "positive" | "caution" | "warning";

type ToolResult = {
  tone: ResultTone;
  title: string;
  body: string;
  checks: string[];
};

const initialLinkResult: ToolResult = {
  tone: "caution",
  title: "הדביקו כתובת כדי להתחיל",
  body: "הבדיקה מתבצעת בדפדפן על מבנה הכתובת בלבד. לא נפתח את האתר ולא נשלח את הכתובת לשירות חיצוני.",
  checks: [],
};

export function HebrewToolsClient() {
  const [activeTool, setActiveTool] = useState<ToolId>("link");
  const active = hebrewTools.find((tool) => tool.id === activeTool) || hebrewTools[0];

  useEffect(() => {
    const requestedTool = window.location.hash.slice(1) as ToolId;
    if (hebrewTools.some((tool) => tool.id === requestedTool)) setActiveTool(requestedTool);
  }, []);

  return (
    <div className="hebrew-tools-shell">
      <div className="hebrew-tools-tabs" role="tablist" aria-label="בחירת כלי">
        {hebrewTools.map((tool) => (
          <button
            aria-controls={`tool-panel-${tool.id}`}
            aria-selected={activeTool === tool.id}
            className={`hebrew-tools-tab${activeTool === tool.id ? " is-active" : ""}`}
            id={`tool-tab-${tool.id}`}
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            role="tab"
            type="button"
          >
            <span>{tool.title}</span>
            <small>{tool.summary}</small>
          </button>
        ))}
      </div>

      <div className="hebrew-tools-panel" id={`tool-panel-${active.id}`} role="tabpanel" aria-labelledby={`tool-tab-${active.id}`}>
        {activeTool === "link" ? <LinkSafetyTool /> : null}
        {activeTool === "message" ? <MessageSafetyTool /> : null}
        {activeTool === "domain" ? <DomainComparisonTool /> : null}
        {activeTool === "email" ? <EmailSafetyTool /> : null}
        {activeTool === "campaign" ? <CampaignLinkTool /> : null}
      </div>
    </div>
  );
}

function LinkSafetyTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult>(initialLinkResult);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(checkLink(value));
  }

  return (
    <ToolForm onSubmit={handleSubmit} title="בדקו כתובת לפני שאתם פותחים אותה">
      <label className="hebrew-tool-label" htmlFor="hebrew-link-input">כתובת אתר ציבורית</label>
      <div className="hebrew-tool-input-row">
        <input
          className="hebrew-tool-input"
          id="hebrew-link-input"
          inputMode="url"
          onChange={(event) => setValue(event.target.value)}
          placeholder="https://example.com"
          type="text"
          value={value}
        />
        <button className="btn-primary" type="submit">בדיקה מקומית</button>
      </div>
      <ToolResultView result={result} />
    </ToolForm>
  );
}

function MessageSafetyTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(analyzeMessage(value));
  }

  return (
    <ToolForm onSubmit={handleSubmit} title="בדקו הודעה לפני שאתם מגיבים">
      <label className="hebrew-tool-label" htmlFor="hebrew-message-input">הודעת SMS, מייל או וואטסאפ</label>
      <textarea
        className="hebrew-tool-input hebrew-tool-textarea"
        id="hebrew-message-input"
        onChange={(event) => setValue(event.target.value)}
        placeholder="הדביקו כאן הודעה שאין בה מידע אישי או סודי"
        rows={6}
        value={value}
      />
      <button className="btn-primary" type="submit">ניתוח מקומי</button>
      {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הטקסט נשאר בדפדפן. אל תדביקו סיסמאות, קודים או פרטים אישיים.</p>}
    </ToolForm>
  );
}

function DomainComparisonTool() {
  const [trusted, setTrusted] = useState("");
  const [received, setReceived] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(compareDomains(trusted, received));
  }

  return (
    <ToolForm onSubmit={handleSubmit} title="השוו בין כתובת שאתם מכירים לכתובת שקיבלתם">
      <div className="hebrew-tool-two-column">
        <label className="hebrew-tool-label" htmlFor="trusted-domain-input">דומיין מוכר<input className="hebrew-tool-input" id="trusted-domain-input" onChange={(event) => setTrusted(event.target.value)} placeholder="navines.co.il" type="text" value={trusted} /></label>
        <label className="hebrew-tool-label" htmlFor="received-domain-input">דומיין שקיבלתם<input className="hebrew-tool-input" id="received-domain-input" onChange={(event) => setReceived(event.target.value)} placeholder="navines-security.co.il" type="text" value={received} /></label>
      </div>
      <button className="btn-primary" type="submit">השוואה מקומית</button>
      {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">ההשוואה בודקת כתיב ומבנה בלבד. היא אינה מאמתת בעלות על דומיין.</p>}
    </ToolForm>
  );
}

function EmailSafetyTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(checkEmail(value));
  }

  return (
    <ToolForm onSubmit={handleSubmit} title="בדקו כתובת אימייל לפני שאתם עונים או משתפים מידע">
      <label className="hebrew-tool-label" htmlFor="hebrew-email-input">כתובת אימייל לבדיקה</label>
      <div className="hebrew-tool-input-row">
        <input className="hebrew-tool-input" id="hebrew-email-input" inputMode="email" onChange={(event) => setValue(event.target.value)} placeholder="name@example.com" type="email" value={value} />
        <button className="btn-primary" type="submit">בדיקה מקומית</button>
      </div>
      {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">נבדוק מבנה, דומיין ותווים חריגים בלבד. לא נשלח אימייל ולא ננסה להתחבר לתיבה.</p>}
    </ToolForm>
  );
}

function CampaignLinkTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(checkCampaignLink(value));
  }

  return (
    <ToolForm onSubmit={handleSubmit} title="בדקו קישור קמפיין לפני שמתחילים למדוד תנועה">
      <label className="hebrew-tool-label" htmlFor="hebrew-campaign-input">קישור עם פרמטרי UTM</label>
      <div className="hebrew-tool-input-row">
        <input className="hebrew-tool-input" id="hebrew-campaign-input" inputMode="url" onChange={(event) => setValue(event.target.value)} placeholder="https://example.com/?utm_source=..." type="url" value={value} />
        <button className="btn-primary" type="submit">בדיקה מקומית</button>
      </div>
      {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הבדיקה עוזרת לזהות פרמטרים חסרים או תיוג לא עקבי. היא אינה בודקת את ביצועי הקמפיין.</p>}
    </ToolForm>
  );
}

function ToolForm({ children, onSubmit, title }: { children: ReactNode; onSubmit: (event: FormEvent<HTMLFormElement>) => void; title: string }) {
  return (
    <form className="hebrew-tool-form" onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
    </form>
  );
}

function ToolResultView({ result }: { result: ToolResult }) {
  return (
    <output className={`hebrew-tool-result is-${result.tone}`}>
      <strong>{result.title}</strong>
      <p>{result.body}</p>
      {result.checks.length ? <ul>{result.checks.map((check) => <li key={check}>{check}</li>)}</ul> : null}
    </output>
  );
}

function checkLink(value: string): ToolResult {
  const raw = value.trim();
  if (!raw) return { ...initialLinkResult, tone: "warning", title: "לא הוזנה כתובת", body: "הדביקו כתובת אתר ציבורית כדי לקבל בדיקה ראשונית." };

  const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`;
  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return { tone: "warning", title: "הכתובת לא נראית תקינה", body: "בדקו שהדומיין כתוב נכון, בלי רווחים ובלי מידע סודי.", checks: ["הבדיקה המקומית נעצרה כי הכתובת לא ניתנת לפענוח."] };
  }

  const host = parsed.hostname.toLowerCase();
  const shortener = ["bit.ly", "tinyurl.com", "t.co", "cutt.ly", "is.gd", "ow.ly", "lnkd.in"].some((domain) => host === domain || host.endsWith(`.${domain}`));
  const isIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(host);
  const checks = [
    parsed.protocol === "https:" ? "הכתובת משתמשת ב־HTTPS." : "הכתובת אינה משתמשת ב־HTTPS.",
    shortener ? "זה נראה כמו שירות קיצור; כדאי לבדוק את יעד ההפניה לפני פתיחה." : "לא זוהה שירות קיצור נפוץ.",
    host.includes("xn--") ? "הדומיין כולל Punycode; בדקו היטב את האיות ואת המקור." : "לא זוהה Punycode בדומיין.",
    isIp ? "הקישור מוביל לכתובת IP במקום לשם דומיין." : "הקישור משתמש בשם דומיין.",
    raw.includes("@") ? "הכתובת כוללת סימן @, ולכן כדאי לעצור ולבדוק אותה היטב." : "לא זוהה סימן @ בכתובת.",
  ];
  const riskCount = Number(parsed.protocol !== "https:") + Number(shortener) + Number(host.includes("xn--")) + Number(isIp) + Number(raw.includes("@"));

  return {
    tone: riskCount >= 2 ? "warning" : riskCount === 1 ? "caution" : "positive",
    title: riskCount >= 2 ? "נמצאו כמה סימנים לבדיקה" : riskCount === 1 ? "יש סימן אחד שכדאי לבדוק" : "לא נמצאו סימנים חריגים בבדיקה הבסיסית",
    body: "זו בדיקת מבנה בלבד. היא אינה פותחת את האתר, אינה עוקבת אחרי הפניות ואינה מבטיחה שהיעד בטוח.",
    checks,
  };
}

function analyzeMessage(value: string): ToolResult {
  const text = value.trim();
  if (!text) return { tone: "warning", title: "לא הוזנה הודעה", body: "הדביקו הודעה כללית בלי פרטים אישיים כדי להתחיל.", checks: [] };

  const signals = [
    [/סיסמה|קוד אימות|קוד חד.?פעמי|OTP|password|verification code/i, "הודעה שמבקשת סיסמה או קוד אימות"],
    [/דחוף|מיד|עכשיו|urgent|immediately/i, "שפה דחופה שמנסה לגרום לפעולה מהירה"],
    [/תשלום|העברה|חשבון בנק|כרטיס|payment|transfer|invoice/i, "בקשה לתשלום או לפרטים פיננסיים"],
    [/(https?:\/\/|www\.|bit\.ly|tinyurl|wa\.me)/i, "קישור או כתובת שצריך לבדוק בנפרד"],
    [/סודיות|אל תספר|אל תתקשר|confidential|do not tell/i, "בקשה להסתיר את הפעולה או לאמת אותה בערוץ אחר"],
  ] as const;
  const checks = signals.filter(([pattern]) => pattern.test(text)).map(([, label]) => label);
  const tone: ResultTone = checks.length >= 3 ? "warning" : checks.length ? "caution" : "positive";

  return {
    tone,
    title: checks.length >= 3 ? "עצרו ובדקו לפני פעולה" : checks.length ? "יש סימנים שראויים לבדיקה" : "לא נמצאו הסימנים שבדקנו",
    body: "הכלי אינו קובע אם ההודעה אמיתית. אמתו את הבקשה מול גורם רשמי בערוץ נפרד, ואל תמסרו פרטים סודיים מתוך הודעה שקיבלתם.",
    checks: checks.length ? checks : ["לא נמצאו בקשות דחופות, קוד, תשלום, קישור או סודיות לפי הבדיקה המקומית."],
  };
}

function compareDomains(trusted: string, received: string): ToolResult {
  const first = cleanDomain(trusted);
  const second = cleanDomain(received);
  if (!first || !second) return { tone: "warning", title: "צריך למלא שתי כתובות", body: "הזינו דומיין מוכר ודומיין שקיבלתם, בלי סיסמאות או פרטים אישיים.", checks: [] };

  const distance = levenshtein(first, second);
  const checks = [
    first === second ? "שתי הכתובות זהות לאחר ניקוי בסיסי." : `הדומיינים שונים. מרחק הכתיב שנמדד הוא ${distance}.`,
    second.includes("xn--") ? "הדומיין שקיבלתם כולל Punycode." : "לא זוהה Punycode בדומיין שקיבלתם.",
    /\d/.test(second) ? "הדומיין שקיבלתם כולל ספרות; בדקו אם הן צפויות." : "לא נמצאו ספרות בדומיין שקיבלתם.",
    second.includes("-") ? "הדומיין שקיבלתם כולל מקף; בדקו את האיות מול המקור הרשמי." : "לא נמצאו מקפים בדומיין שקיבלתם.",
  ];
  const looksClose = first !== second && distance <= Math.max(2, Math.ceil(Math.max(first.length, second.length) * 0.2));

  return {
    tone: first === second ? "positive" : looksClose || second.includes("xn--") ? "warning" : "caution",
    title: first === second ? "הכתובות זהות" : looksClose ? "הכתובות דומות מדי לבדיקה מהירה" : "הכתובות שונות",
    body: "השוו גם את הכתובת מול אתר רשמי או איש קשר מוכר. דמיון בכתיב אינו הוכחה להתחזות, ושוני אינו הוכחה לבטיחות.",
    checks,
  };
}

function checkEmail(value: string): ToolResult {
  const email = value.trim();
  if (!email) return { tone: "warning", title: "לא הוזנה כתובת אימייל", body: "הדביקו כתובת כללית לבדיקה, בלי סיסמה או קוד גישה.", checks: [] };

  const basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [localPart = "", domain = ""] = email.split("@");
  const checks = [
    basicPattern.test(email) ? "המבנה הבסיסי של הכתובת נראה תקין." : "המבנה אינו נראה כמו כתובת אימייל מלאה.",
    domain.includes("xn--") ? "הדומיין כולל Punycode; בדקו היטב את האותיות ואת המקור." : "לא זוהה Punycode בדומיין.",
    /\d{4,}/.test(localPart) ? "יש רצף ספרות ארוך בשם התיבה; אמתו שהכתובת אכן מוכרת לכם." : "לא זוהה רצף ספרות ארוך בשם התיבה.",
    /[._%+-]$|^[._%+-]/.test(localPart) ? "שם התיבה מתחיל או מסתיים בתו מיוחד; בדקו את ההעתקה." : "שם התיבה אינו מתחיל או מסתיים בתו מיוחד.",
  ];
  const warningCount = Number(!basicPattern.test(email)) + Number(domain.includes("xn--")) + Number(/\d{4,}/.test(localPart)) + Number(/[._%+-]$|^[._%+-]/.test(localPart));

  return {
    tone: !basicPattern.test(email) || warningCount >= 2 ? "warning" : warningCount === 1 ? "caution" : "positive",
    title: !basicPattern.test(email) ? "כדאי לעצור ולבדוק את הכתובת" : warningCount ? "נמצאו סימנים לבדיקה נוספת" : "המבנה נראה תקין בבדיקה בסיסית",
    body: "הכלי בודק מבנה בלבד. הוא אינו מאמת שהשולח אמיתי, שהדומיין שייך לארגון או שתיבת הדואר פעילה.",
    checks,
  };
}

function checkCampaignLink(value: string): ToolResult {
  const raw = value.trim();
  if (!raw) return { tone: "warning", title: "לא הוזן קישור קמפיין", body: "הדביקו קישור כדי לבדוק את פרמטרי המדידה שלו.", checks: [] };

  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return { tone: "warning", title: "הקישור אינו נראה תקין", body: "בדקו שהקישור כולל https:// או כתובת מלאה לפני בדיקת UTM.", checks: [] };
  }

  const names = ["utm_source", "utm_medium", "utm_campaign"];
  const present = names.filter((name) => parsed.searchParams.get(name)?.trim());
  const missing = names.filter((name) => !parsed.searchParams.get(name)?.trim());
  const checks = [
    parsed.protocol === "https:" ? "הקישור משתמש ב־HTTPS." : "הקישור אינו משתמש ב־HTTPS.",
    present.length ? `נמצאו ${present.length} פרמטרי UTM: ${present.join(", ")}.` : "לא נמצאו פרמטרי UTM.",
    missing.length ? `חסרים לתיעוד בסיסי: ${missing.join(", ")}.` : "שלושת פרמטרי הבסיס קיימים.",
  ];

  return {
    tone: parsed.protocol !== "https:" || !present.length ? "warning" : missing.length ? "caution" : "positive",
    title: !present.length ? "הקישור עדיין לא מתויג" : missing.length ? "הקישור מתויג חלקית" : "הקישור מתויג בצורה בסיסית",
    body: "הבדיקה עוזרת ליצור סדר בשמות הקמפיינים. היא אינה מחליפה בדיקת אנליטיקס או מדידה בפועל.",
    checks,
  };
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
