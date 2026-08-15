"use client";

import { FormEvent, type ReactNode, useEffect, useMemo, useState } from "react";
import { hebrewTools } from "@/data/site";
import { decodeQrImage } from "@/lib/decodeQrImage";

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
  title: "הזינו כתובת כדי להתחיל",
  body: "הבדיקה מתבצעת בדפדפן על מבנה הכתובת בלבד. היא אינה פותחת אתר ואינה שולחת את הכתובת לשירות חיצוני.",
  checks: [],
};

const firstAidSteps = {
  link: {
    label: "לחצתי על קישור חשוד",
    title: "עצרו והפרידו בין הקישור לחשבון שלכם",
    body: "אל תמלאו פרטים נוספים דרך העמוד שנפתח. היכנסו לשירות הרלוונטי רק דרך כתובת רשמית שאתם מכירים.",
    checks: ["סגרו את העמוד החשוד ושמרו צילום מסך אם אפשר.", "בדקו אם הוזנה סיסמה, קוד אימות או פרטי תשלום.", "החליפו סיסמה דרך האתר או האפליקציה הרשמיים אם הוזנו פרטי גישה."],
  },
  password: {
    label: "הקלדתי סיסמה או פרטי גישה",
    title: "כדאי לטפל בסיסמה מיד",
    body: "החליפו את הסיסמה דרך הערוץ הרשמי והפעילו אימות דו שלבי אם הוא זמין. אל תמחזרו את אותה סיסמה בחשבונות אחרים.",
    checks: ["שנו את הסיסמה דרך אתר או אפליקציה רשמית.", "בדקו מכשירים מחוברים והתחברויות אחרונות.", "עדכנו כתובת שחזור ומספר טלפון אם צריך."],
  },
  code: {
    label: "מסרתי קוד אימות",
    title: "קוד אימות שנמסר דורש בדיקה מהירה",
    body: "אם עדיין יש גישה לחשבון, נסו לנתק סשנים, להחליף סיסמה ולעדכן אימות דו שלבי דרך ההגדרות הרשמיות.",
    checks: ["בדקו אם הופיע מכשיר לא מוכר בחשבון.", "שנו סיסמה ונתקו התחברויות פתוחות ככל שהשירות מאפשר.", "שמרו תיעוד של ההודעה או הבקשה שקיבלתם."],
  },
  payment: {
    label: "מסרתי פרטי תשלום או שילמתי",
    title: "פנו לגוף הפיננסי בערוץ הרשמי",
    body: "אל תמסרו פרטים נוספים למי שפנה אליכם. צרו קשר עם הבנק או מנפיק הכרטיס לפי מספר רשמי, ותעדו את האירוע.",
    checks: ["בדקו חיובים או פעולות חריגות.", "דווחו לגוף הפיננסי דרך הערוץ הרשמי בלבד.", "אל תתקינו תוכנה או אפליקציה שנשלחה בעקבות האירוע."],
  },
} as const;

const websiteTrustItems = [
  "הדומיין, דרכי יצירת הקשר והשם העסקי ברורים לגולש.",
  "האתר נפתח ב־HTTPS והקישורים החשובים מובילים לכתובות צפויות.",
  "יש הסבר ברור על השירות או המוצר לפני בקשת פרטים.",
  "מדיניות פרטיות ודרך לפנות לעסק זמינות במקום הגיוני.",
  "קישורים מקמפיינים נבדקים לפני פרסום ומסומנים בתגיות UTM כשצריך.",
];

const accountProtectionItems = [
  "יש לחשבון סיסמה ייחודית שאינה משמשת לחשבונות אחרים.",
  "אימות דו־שלבי פעיל דרך אפליקציית אימות או אמצעי מאובטח אחר.",
  "כתובת שחזור ומספר טלפון מעודכנים ונגישים לבעל החשבון.",
  "רשימת המכשירים וההתחברויות האחרונות נבדקה לאחרונה.",
  "אין קודי שחזור, סיסמאות או פרטי גישה שמועברים בהודעות לא מאובטחות.",
];

const qrCampaignItems = [
  "הקוד מוביל לדומיין רשמי שהקהל יכול לזהות.",
  "דף היעד משתמש ב־HTTPS ונבדק בטלפון אמיתי.",
  "היעד מותאם למובייל ומציג מיד מה מצופה מהגולש.",
  "יש ליד הקוד כתובת קצרה וקריאה כחלופה לסריקה.",
  "נבדקו גודל ההדפסה, הניגודיות והסריקה ממרחק סביר.",
  "המדידה אינה מסתירה מהגולש את הדומיין או את מטרת הקישור.",
];

export function HebrewToolsClient() {
  const [activeTool, setActiveTool] = useState<ToolId>("link");
  const active = hebrewTools.find((tool) => tool.id === activeTool) || hebrewTools[0];

  useEffect(() => {
    const requestedTool = window.location.hash.slice(1) as ToolId;
    if (hebrewTools.some((tool) => tool.id === requestedTool)) setActiveTool(requestedTool);
  }, []);

  function selectTool(id: ToolId) {
    setActiveTool(id);
    window.history.replaceState(null, "", `#${id}`);
  }

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
            onClick={() => selectTool(tool.id)}
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
        {activeTool === "bulk" ? <BulkLinkTool /> : null}
        {activeTool === "first-aid" ? <DigitalFirstAidTool /> : null}
        {activeTool === "website" ? <WebsiteTrustTool /> : null}
        {activeTool === "message-links" ? <MessageLinksTool /> : null}
        {activeTool === "email-list" ? <EmailListTool /> : null}
        {activeTool === "utm-builder" ? <CampaignBuilderTool /> : null}
        {activeTool === "copy" ? <CopyClarityTool /> : null}
        {activeTool === "qr" ? <QrLinkTool /> : null}
        {activeTool === "password-check" ? <PasswordPatternTool /> : null}
        {activeTool === "account-protection" ? <AccountProtectionTool /> : null}
        {activeTool === "email-header" ? <EmailHeaderTool /> : null}
        {activeTool === "bec-request" ? <BusinessRequestTool /> : null}
        {activeTool === "redirect-chain" ? <RedirectChainTool /> : null}
        {activeTool === "qr-campaign" ? <QrCampaignTool /> : null}
        {activeTool === "official-links" ? <OfficialLinksPolicyTool /> : null}
        {activeTool === "experiment" ? <ExperimentPlannerTool /> : null}
      </div>
    </div>
  );
}

const experimentGoals = {
  inquiry: {
    label: "לעזור לגולש להבין שירות ולפנות עם יותר הקשר",
    hypothesis: "אם נבהיר את השירות ואת הצעד הבא, גולשים מתאימים יבינו מהר יותר אם נכון להם לפנות.",
    primary: "השלמת פנייה עם תיאור צורך ברור",
    guardrail: "איכות הפניות ועומס פניות שאינן רלוונטיות",
    next: "בחרו עמוד אחד, נסחו את ההצעה והפעולה הבאה מחדש, ובדקו לפני ואחרי באותו מקור תנועה.",
  },
  clarity: {
    label: "להסביר שירות או מוצר מורכב בצורה ברורה יותר",
    hypothesis: "אם נסדר את המידע לפי השאלה של הגולש, פחות אנשים יחפשו שוב את אותה תשובה או יעזבו באמצע.",
    primary: "הגעה לצעד הבא אחרי קריאת ההסבר",
    guardrail: "זמן טעינה, שאלות תמיכה חוזרות ושיעור יציאה",
    next: "בחרו שאלה אחת שחוזרת אצל לקוחות, כתבו לה תשובה קצרה בעמוד, ובקשו ממשתמש אמיתי לבדוק אם היא ברורה.",
  },
  tool: {
    label: "לתת לגולש ערך עם כלי חינמי באתר",
    hypothesis: "אם הכלי פותר שאלה אמיתית בתוך דקה, הוא יכול ליצור שימוש, אמון והקשר טוב יותר לפני פנייה.",
    primary: "השלמת פעולה שימושית בכלי",
    guardrail: "בהירות המגבלות, פרטיות הקלט והאם הכלי באמת נותן תוצאה שימושית",
    next: "הגדירו משתמש, שאלה אחת, תוצאה אחת וגבול ברור למה שהכלי אינו בודק. התחילו בגרסה קטנה ופשוטה.",
  },
  ecommerce: {
    label: "לעזור ללקוח לבחור מוצר או להשלים רכישה",
    hypothesis: "אם נצמצם בלבול סביב התאמה, משלוח או תנאים, לקוחות מתאימים יוכלו לבחור בקלות רבה יותר.",
    primary: "התקדמות לעמוד מוצר, סל או פנייה על מוצר",
    guardrail: "החזרות, ביטולים, שאלות שירות ושקיפות על תנאים",
    next: "בחרו נקודת בלבול אחת, למשל התאמה או משלוח, והציגו את התשובה ליד ההחלטה במקום להוסיף עוד אפשרויות.",
  },
} as const;

function ExperimentPlannerTool() {
  const [goal, setGoal] = useState<keyof typeof experimentGoals>("inquiry");
  const [result, setResult] = useState<ToolResult | null>(null);
  const selected = experimentGoals[goal];

  return <ToolForm onSubmit={(event) => {
    event.preventDefault();
    setResult({
      tone: "caution",
      title: "תוכנית בדיקה ראשונית מוכנה",
      body: "זו מסגרת לחשיבה על שינוי אחד. היא אינה מבטיחה תוצאה ואינה מחליפה מדידה, מחקר משתמשים או ניסוי מבוקר כשנדרשת ודאות גבוהה.",
      checks: [
        `מטרה: ${selected.label}`,
        `השערה: ${selected.hypothesis}`,
        `מדד עיקרי: ${selected.primary}`,
        `מדד הגנה: ${selected.guardrail}`,
        `הצעד הבא: ${selected.next}`,
      ],
    });
  }} title="בחרו מטרה וקבלו מסגרת לבדיקה קטנה וברורה">
    <label className="hebrew-tool-label" htmlFor="experiment-goal">מה אתם רוצים לשפר?</label>
    <select className="hebrew-tool-select" id="experiment-goal" onChange={(event) => setGoal(event.target.value as keyof typeof experimentGoals)} value={goal}>
      {Object.entries(experimentGoals).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}
    </select>
    <button className="btn-primary" type="submit">בניית תוכנית בדיקה</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הכלי פועל בדפדפן בלבד. הוא מסייע לנסח בדיקה, לא מבצע מעקב ואינו אוסף נתונים מהאתר שלכם.</p>}
  </ToolForm>;
}

function LinkSafetyTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult>(initialLinkResult);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkLink(value)); }} title="בדקו כתובת לפני שאתם פותחים אותה">
    <label className="hebrew-tool-label" htmlFor="hebrew-link-input">כתובת אתר ציבורית</label>
    <div className="hebrew-tool-input-row"><input className="hebrew-tool-input" id="hebrew-link-input" inputMode="url" onChange={(event) => setValue(event.target.value)} placeholder="https://example.com" type="text" value={value} /><button className="btn-primary" type="submit">בדיקה מקומית</button></div>
    <ToolResultView result={result} />
  </ToolForm>;
}

function MessageSafetyTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(analyzeMessage(value)); }} title="בדקו הודעה לפני שאתם מגיבים">
    <label className="hebrew-tool-label" htmlFor="hebrew-message-input">הודעת SMS, מייל או וואטסאפ</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="hebrew-message-input" onChange={(event) => setValue(event.target.value)} placeholder="הדביקו כאן הודעה שאין בה מידע אישי או סודי" rows={6} value={value} />
    <button className="btn-primary" type="submit">ניתוח מקומי</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הטקסט נשאר בדפדפן. אל תדביקו סיסמאות, קודים או פרטים אישיים.</p>}
  </ToolForm>;
}

function DomainComparisonTool() {
  const [trusted, setTrusted] = useState("");
  const [received, setReceived] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(compareDomains(trusted, received)); }} title="השוו בין כתובת שאתם מכירים לכתובת שקיבלתם">
    <div className="hebrew-tool-two-column">
      <label className="hebrew-tool-label" htmlFor="trusted-domain-input">דומיין מוכר<input className="hebrew-tool-input" id="trusted-domain-input" onChange={(event) => setTrusted(event.target.value)} placeholder="navines.co.il" type="text" value={trusted} /></label>
      <label className="hebrew-tool-label" htmlFor="received-domain-input">דומיין שקיבלתם<input className="hebrew-tool-input" id="received-domain-input" onChange={(event) => setReceived(event.target.value)} placeholder="navines-security.co.il" type="text" value={received} /></label>
    </div>
    <button className="btn-primary" type="submit">השוואה מקומית</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">ההשוואה בודקת כתיב ומבנה בלבד. היא אינה מאמתת בעלות על דומיין.</p>}
  </ToolForm>;
}

function EmailSafetyTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkEmail(value)); }} title="בדקו כתובת אימייל לפני שאתם עונים או משתפים מידע">
    <label className="hebrew-tool-label" htmlFor="hebrew-email-input">כתובת אימייל לבדיקה</label>
    <div className="hebrew-tool-input-row"><input className="hebrew-tool-input" id="hebrew-email-input" inputMode="email" onChange={(event) => setValue(event.target.value)} placeholder="name@example.com" type="email" value={value} /><button className="btn-primary" type="submit">בדיקה מקומית</button></div>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">נבדוק מבנה, דומיין ותווים חריגים בלבד. לא נשלח אימייל ולא ננסה להתחבר לתיבה.</p>}
  </ToolForm>;
}

function CampaignLinkTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkCampaignLink(value)); }} title="בדקו קישור קמפיין לפני שמתחילים למדוד תנועה">
    <label className="hebrew-tool-label" htmlFor="hebrew-campaign-input">קישור עם פרמטרי UTM</label>
    <div className="hebrew-tool-input-row"><input className="hebrew-tool-input" id="hebrew-campaign-input" inputMode="url" onChange={(event) => setValue(event.target.value)} placeholder="https://example.com/?utm_source=..." type="url" value={value} /><button className="btn-primary" type="submit">בדיקה מקומית</button></div>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הבדיקה עוזרת לזהות פרמטרים חסרים או תיוג לא עקבי. היא אינה בודקת ביצועי קמפיין.</p>}
  </ToolForm>;
}

function BulkLinkTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkBulkLinks(value)); }} title="בדקו עד עשרה קישורים באותה פעולה">
    <label className="hebrew-tool-label" htmlFor="bulk-links-input">קישור אחד בכל שורה</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="bulk-links-input" onChange={(event) => setValue(event.target.value)} placeholder={"https://example.com\nhttps://another.example"} rows={7} value={value} />
    <button className="btn-primary" type="submit">בדיקת רשימה מקומית</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הכלי בודק מבנה וסימנים בסיסיים בלבד, ולא פותח את הקישורים.</p>}
  </ToolForm>;
}

function DigitalFirstAidTool() {
  const [incident, setIncident] = useState<keyof typeof firstAidSteps>("link");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); const steps = firstAidSteps[incident]; setResult({ tone: "caution", title: steps.title, body: steps.body, checks: [...steps.checks] }); }} title="בחרו מה קרה וקבלו סדר פעולות רגוע">
    <label className="hebrew-tool-label" htmlFor="digital-first-aid">מה קרה?</label>
    <select className="hebrew-tool-select" id="digital-first-aid" onChange={(event) => setIncident(event.target.value as keyof typeof firstAidSteps)} value={incident}>
      {Object.entries(firstAidSteps).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
    </select>
    <button className="btn-primary" type="submit">הצגת צעדים ראשונים</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">במקרה של חשד לפריצה לחשבון עסקי או של מידע רגיש, אל תחכו עם בדיקה מקצועית.</p>}
  </ToolForm>;
}

function WebsiteTrustTool() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<ToolResult | null>(null);
  const selected = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkWebsiteTrust(selected)); }} title="עברו על יסודות האמון של האתר לפני קמפיין">
    <div className="hebrew-tool-checklist">
      {websiteTrustItems.map((item, index) => <label className="hebrew-tool-check" key={item}><input checked={Boolean(checked[index])} onChange={(event) => setChecked((current) => ({ ...current, [index]: event.target.checked }))} type="checkbox" /><span>{item}</span></label>)}
    </div>
    <button className="btn-primary" type="submit">בדיקת צ׳קליסט</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הצ׳קליסט הוא התחלה טובה לפני קמפיין, לא אישור אבטחה או חוות דעת מקצועית.</p>}
  </ToolForm>;
}

function MessageLinksTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkMessageLinks(value)); }} title="אתרו קישורים שמופיעים בתוך הודעה">
    <label className="hebrew-tool-label" htmlFor="message-links-input">הודעה כללית לבדיקה</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="message-links-input" onChange={(event) => setValue(event.target.value)} placeholder="הדביקו הודעה כללית, בלי פרטים אישיים או סודיים" rows={7} value={value} />
    <button className="btn-primary" type="submit">איתור קישורים מקומי</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הכלי מאתר כתובות שנכתבו בטקסט. הוא אינו פותח אותן ואינו מחפש פרטים על שולח ההודעה.</p>}
  </ToolForm>;
}

function EmailListTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkEmailList(value)); }} title="נקו רשימת כתובות לפני ייבוא או שליחה">
    <label className="hebrew-tool-label" htmlFor="email-list-input">כתובת אחת בכל שורה או מופרדת בפסיקים</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="email-list-input" onChange={(event) => setValue(event.target.value)} placeholder={"name@example.com\nteam@example.com"} rows={7} value={value} />
    <button className="btn-primary" type="submit">בדיקת רשימה מקומית</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">נבדקים רק מבנה, כפילויות וסימנים מקומיים. לא מתבצעת שליחה או בדיקת מסירה.</p>}
  </ToolForm>;
}

function CampaignBuilderTool() {
  const [baseUrl, setBaseUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  const [builtUrl, setBuiltUrl] = useState("");
  return <ToolForm onSubmit={(event) => { event.preventDefault(); const built = buildCampaignUrl(baseUrl, source, medium, campaign); setResult(built.result); setBuiltUrl(built.url); }} title="בנו קישור UTM מסודר לקמפיין">
    <div className="hebrew-tool-two-column">
      <label className="hebrew-tool-label" htmlFor="utm-base">כתובת יעד<input className="hebrew-tool-input" id="utm-base" inputMode="url" onChange={(event) => setBaseUrl(event.target.value)} placeholder="https://example.com" value={baseUrl} /></label>
      <label className="hebrew-tool-label" htmlFor="utm-source">מקור<input className="hebrew-tool-input" id="utm-source" onChange={(event) => setSource(event.target.value)} placeholder="newsletter" value={source} /></label>
      <label className="hebrew-tool-label" htmlFor="utm-medium">אמצעי<input className="hebrew-tool-input" id="utm-medium" onChange={(event) => setMedium(event.target.value)} placeholder="email" value={medium} /></label>
      <label className="hebrew-tool-label" htmlFor="utm-campaign">שם קמפיין<input className="hebrew-tool-input" id="utm-campaign" onChange={(event) => setCampaign(event.target.value)} placeholder="summer_launch" value={campaign} /></label>
    </div>
    <button className="btn-primary" type="submit">בניית קישור מקומית</button>
    {result ? <><ToolResultView result={result} />{builtUrl ? <label className="hebrew-tool-label" htmlFor="built-utm-link">הקישור שנבנה<input className="hebrew-tool-input" id="built-utm-link" readOnly value={builtUrl} /></label> : null}</> : <p className="hebrew-tool-note">הקישור נבנה במכשיר שלכם בלבד. עברו עליו לפני שליחה או פרסום.</p>}
  </ToolForm>;
}

function CopyClarityTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkCopyClarity(value)); }} title="בדקו אורך וקריאות בסיסית של טקסט">
    <label className="hebrew-tool-label" htmlFor="copy-clarity-input">טקסט לעמוד, הודעה או קמפיין</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="copy-clarity-input" onChange={(event) => setValue(event.target.value)} placeholder="הדביקו טקסט כללי, בלי מידע רגיש" rows={8} value={value} />
    <button className="btn-primary" type="submit">בדיקת בהירות מקומית</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">זהו מדד עזר מקומי של אורך ומבנה, לא הערכת איכות מקצועית או אישור לפרסום.</p>}
  </ToolForm>;
}

function QrLinkTool() {
  const [decodedValue, setDecodedValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  const [scanning, setScanning] = useState(false);

  async function scanImage(file: File | undefined) {
    if (!file) return;
    setScanning(true);
    try {
      const value = await decodeQrImage(file);
      setDecodedValue(value);
      setResult(value ? { ...checkLink(value), body: "הכתובת חולצה מהתמונה מקומית ולא נפתחה. עברו על הדומיין ועל סימני האזהרה לפני פעולה." } : { tone: "caution", title: "לא זוהה קוד QR ברור", body: "נסו תמונה חדה יותר שבה הקוד שלם, ישר ובניגודיות טובה.", checks: [] });
    } catch {
      setResult({ tone: "warning", title: "לא הצלחנו לקרוא את התמונה", body: "ודאו שזה קובץ תמונה תקין ושקוד ה־QR מופיע בו במלואו.", checks: [] });
    } finally {
      setScanning(false);
    }
  }

  return <form className="hebrew-tool-form" onSubmit={(event) => event.preventDefault()}>
    <h2>חלצו כתובת מקוד QR לפני שאתם פותחים אותה</h2>
    <label className="hebrew-tool-label" htmlFor="qr-image-input">צילום מסך או תמונה של קוד QR
      <input accept="image/*" className="hebrew-tool-input" id="qr-image-input" onChange={(event) => void scanImage(event.target.files?.[0])} type="file" />
    </label>
    <p className="hebrew-tool-note">{scanning ? "קוראים את הקוד בתוך הדפדפן…" : "התמונה אינה נשלחת לשרת. אל תעלו צילום שמכיל מידע אישי או סודי."}</p>
    {decodedValue ? <label className="hebrew-tool-label" htmlFor="decoded-qr-value">הכתובת שזוהתה<input className="hebrew-tool-input" dir="ltr" id="decoded-qr-value" readOnly value={decodedValue} /></label> : null}
    {result ? <ToolResultView result={result} /> : null}
  </form>;
}

function PasswordPatternTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkPasswordPattern(value)); }} title="בדקו מבנה של דוגמת סיסמה בלי לשמור אותה">
    <label className="hebrew-tool-label" htmlFor="password-pattern-input">דוגמה בעלת מבנה דומה בלבד</label>
    <div className="hebrew-tool-input-row"><input autoComplete="off" className="hebrew-tool-input" id="password-pattern-input" onChange={(event) => setValue(event.target.value)} placeholder="לא להקליד סיסמה פעילה" type="password" value={value} /><button className="btn-primary" type="submit">בדיקת מבנה מקומית</button></div>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הקלט נשאר בדפדפן. השתמשו בדוגמה בלבד, ולעולם אל תזינו כאן סיסמה של חשבון פעיל.</p>}
  </ToolForm>;
}

function AccountProtectionTool() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<ToolResult | null>(null);
  const selected = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkAccountProtection(selected)); }} title="עברו על יסודות ההגנה של חשבון אישי או עסקי">
    <div className="hebrew-tool-checklist">
      {accountProtectionItems.map((item, index) => <label className="hebrew-tool-check" key={item}><input checked={Boolean(checked[index])} onChange={(event) => setChecked((current) => ({ ...current, [index]: event.target.checked }))} type="checkbox" /><span>{item}</span></label>)}
    </div>
    <button className="btn-primary" type="submit">בדיקת צ׳קליסט</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">זהו סדר פעולות בסיסי לשגרה. בחשד לפריצה או לאובדן גישה, פעלו מהר דרך הערוצים הרשמיים וקבלו סיוע מקצועי לפי הצורך.</p>}
  </ToolForm>;
}

function EmailHeaderTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkEmailHeaders(value)); }} title="בדקו את כותרות האימייל לפני שסומכים על השולח">
    <label className="hebrew-tool-label" htmlFor="email-header-input">כותרות טכניות של ההודעה</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="email-header-input" onChange={(event) => setValue(event.target.value)} placeholder="From: ...&#10;Reply-To: ...&#10;Authentication-Results: ..." rows={9} value={value} />
    <button className="btn-primary" type="submit">בדיקת כותרות מקומית</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">מומלץ להסיר תוכן אישי שאינו נחוץ. אין להדביק סיסמאות, קודים או תוכן מלא של התכתבות רגישה.</p>}
  </ToolForm>;
}

function BusinessRequestTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkBusinessRequest(value)); }} title="בדקו בקשת תשלום או שינוי פרטים לפני שהצוות פועל">
    <label className="hebrew-tool-label" htmlFor="business-request-input">נוסח הבקשה ללא פרטים רגישים</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" id="business-request-input" onChange={(event) => setValue(event.target.value)} placeholder="הדביקו את נוסח הבקשה לאחר שמחקתם שמות, מספרי חשבון ומידע סודי" rows={8} value={value} />
    <button className="btn-primary" type="submit">ניתוח בקשה מקומי</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הבדיקה מחפשת דפוסי לחץ והתחזות נפוצים. היא אינה קובעת אם הבקשה אמיתית.</p>}
  </ToolForm>;
}

function RedirectChainTool() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkRedirectChain(value)); }} title="בדקו שרשרת כתובות שכבר אספתם">
    <label className="hebrew-tool-label" htmlFor="redirect-chain-input">כתובת אחת בכל שורה, לפי סדר ההפניה</label>
    <textarea className="hebrew-tool-input hebrew-tool-textarea" dir="ltr" id="redirect-chain-input" onChange={(event) => setValue(event.target.value)} placeholder={"https://short.example/a\nhttps://campaign.example/offer\nhttps://official.example/page"} rows={8} value={value} />
    <button className="btn-primary" type="submit">בדיקת שרשרת מקומית</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הכלי אינו עוקב אחרי הפניות ברשת. הדביקו רק שרשרת שכבר קיבלתם מכלי בדיקה או ממערכת שלכם.</p>}
  </ToolForm>;
}

function QrCampaignTool() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<ToolResult | null>(null);
  const selected = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  return <ToolForm onSubmit={(event) => { event.preventDefault(); setResult(checkQrCampaign(selected)); }} title="עברו על קמפיין ה־QR לפני הדפסה או הפצה">
    <div className="hebrew-tool-checklist">
      {qrCampaignItems.map((item, index) => <label className="hebrew-tool-check" key={item}><input checked={Boolean(checked[index])} onChange={(event) => setChecked((current) => ({ ...current, [index]: event.target.checked }))} type="checkbox" /><span>{item}</span></label>)}
    </div>
    <button className="btn-primary" type="submit">בדיקת מוכנות</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">בדקו שוב גם עותק מודפס ובכמה מכשירים לפני שמפיצים כמות גדולה.</p>}
  </ToolForm>;
}

function OfficialLinksPolicyTool() {
  const [businessName, setBusinessName] = useState("");
  const [domain, setDomain] = useState("");
  const [contact, setContact] = useState("");
  const [policy, setPolicy] = useState("");
  const [result, setResult] = useState<ToolResult | null>(null);

  function buildPolicy() {
    const built = createOfficialLinksPolicy(businessName, domain, contact);
    setPolicy(built.policy);
    setResult(built.result);
  }

  return <ToolForm onSubmit={(event) => { event.preventDefault(); buildPolicy(); }} title="צרו הודעת אימות קצרה ללקוחות">
    <div className="hebrew-tool-two-column">
      <label className="hebrew-tool-label" htmlFor="policy-business">שם העסק<input className="hebrew-tool-input" id="policy-business" onChange={(event) => setBusinessName(event.target.value)} placeholder="שם העסק" value={businessName} /></label>
      <label className="hebrew-tool-label" htmlFor="policy-domain">הדומיין הרשמי<input className="hebrew-tool-input" dir="ltr" id="policy-domain" onChange={(event) => setDomain(event.target.value)} placeholder="example.com" value={domain} /></label>
      <label className="hebrew-tool-label" htmlFor="policy-contact">ערוץ אימות רשמי<input className="hebrew-tool-input" id="policy-contact" onChange={(event) => setContact(event.target.value)} placeholder="טלפון או כתובת עמוד יצירת קשר" value={contact} /></label>
    </div>
    <button className="btn-primary" type="submit">יצירת נוסח מקומי</button>
    {result ? <ToolResultView result={result} /> : <p className="hebrew-tool-note">הנוסח נוצר במכשיר שלכם בלבד. ודאו שכל הפרטים מדויקים לפני פרסום.</p>}
    {policy ? <label className="hebrew-tool-label" htmlFor="official-policy-output">נוסח מוצע<textarea className="hebrew-tool-input hebrew-tool-textarea" id="official-policy-output" readOnly rows={6} value={policy} /></label> : null}
  </ToolForm>;
}

function ToolForm({ children, onSubmit, title }: { children: ReactNode; onSubmit: (event: FormEvent<HTMLFormElement>) => void; title: string }) {
  return <form className="hebrew-tool-form" onSubmit={onSubmit}><h2>{title}</h2>{children}</form>;
}

function ToolResultView({ result }: { result: ToolResult }) {
  return <output aria-live="polite" className={`hebrew-tool-result is-${result.tone}`}><strong>{result.title}</strong><p>{result.body}</p>{result.checks.length ? <ul>{result.checks.map((check) => <li key={check}>{check}</li>)}</ul> : null}</output>;
}

function inspectUrl(value: string) {
  const raw = value.trim();
  if (!raw) return { parsed: null, checks: [] as string[], risk: 0 };
  try {
    const parsed = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`);
    const host = parsed.hostname.toLowerCase();
    const shortener = ["bit.ly", "tinyurl.com", "t.co", "cutt.ly", "is.gd", "ow.ly", "lnkd.in"].some((domain) => host === domain || host.endsWith(`.${domain}`));
    const isIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(host);
    const punycode = host.includes("xn--");
    const atSign = raw.includes("@");
    const risk = Number(parsed.protocol !== "https:") + Number(shortener) + Number(punycode) + Number(isIp) + Number(atSign);
    return { parsed, risk, checks: [parsed.protocol === "https:" ? "הכתובת משתמשת ב־HTTPS." : "הכתובת אינה משתמשת ב־HTTPS.", shortener ? "זוהה שירות קיצור; כדאי לבדוק את יעד ההפניה לפני פתיחה." : "לא זוהה שירות קיצור נפוץ.", punycode ? "הדומיין כולל Punycode; בדקו היטב את המקור." : "לא זוהה Punycode בדומיין.", isIp ? "הקישור מוביל לכתובת IP במקום לשם דומיין." : "הקישור משתמש בשם דומיין.", atSign ? "הכתובת כוללת סימן @ ולכן מצריכה בדיקה זהירה." : "לא זוהה סימן @ בכתובת."] };
  } catch {
    return { parsed: null, checks: ["לא ניתן לפענח את הכתובת בפורמט שהוזן."], risk: 1 };
  }
}

function checkLink(value: string): ToolResult {
  const inspection = inspectUrl(value);
  if (!value.trim()) return { ...initialLinkResult, tone: "warning", title: "לא הוזנה כתובת", body: "הדביקו כתובת אתר ציבורית כדי לקבל בדיקה ראשונית." };
  if (!inspection.parsed) return { tone: "warning", title: "הכתובת לא נראית תקינה", body: "בדקו שהדומיין כתוב נכון, בלי רווחים ובלי מידע סודי.", checks: inspection.checks };
  return { tone: inspection.risk >= 2 ? "warning" : inspection.risk ? "caution" : "positive", title: inspection.risk >= 2 ? "נמצאו כמה סימנים לבדיקה" : inspection.risk ? "יש סימן אחד שכדאי לבדוק" : "לא נמצאו סימנים חריגים בבדיקה הבסיסית", body: "זו בדיקת מבנה בלבד. היא אינה פותחת את האתר, אינה עוקבת אחרי הפניות ואינה מבטיחה שהיעד בטוח.", checks: inspection.checks };
}

function analyzeMessage(value: string): ToolResult {
  const text = value.trim();
  if (!text) return { tone: "warning", title: "לא הוזנה הודעה", body: "הדביקו הודעה כללית בלי פרטים אישיים כדי להתחיל.", checks: [] };
  const signals = [[/סיסמה|קוד אימות|קוד חד.?פעמי|OTP|password|verification code/i, "הודעה שמבקשת סיסמה או קוד אימות"], [/דחוף|מיד|עכשיו|urgent|immediately/i, "שפה דחופה שמנסה לגרום לפעולה מהירה"], [/תשלום|העברה|חשבון בנק|כרטיס|payment|transfer|invoice/i, "בקשה לתשלום או לפרטים פיננסיים"], [/(https?:\/\/|www\.|bit\.ly|tinyurl|wa\.me)/i, "קישור או כתובת שצריך לבדוק בנפרד"], [/סודיות|אל תספר|אל תתקשר|confidential|do not tell/i, "בקשה להסתיר את הפעולה או לאמת אותה בערוץ אחר"]] as const;
  const checks = signals.filter(([pattern]) => pattern.test(text)).map(([, label]) => label);
  return { tone: checks.length >= 3 ? "warning" : checks.length ? "caution" : "positive", title: checks.length >= 3 ? "עצרו ובדקו לפני פעולה" : checks.length ? "יש סימנים שראויים לבדיקה" : "לא נמצאו הסימנים שבדקנו", body: "הכלי אינו קובע אם ההודעה אמיתית. אמתו את הבקשה מול גורם רשמי בערוץ נפרד, ואל תמסרו פרטים סודיים מתוך ההודעה שקיבלתם.", checks: checks.length ? checks : ["לא נמצאו בקשות דחופות, קוד, תשלום, קישור או סודיות לפי הבדיקה המקומית."] };
}

function compareDomains(trusted: string, received: string): ToolResult {
  const first = cleanDomain(trusted);
  const second = cleanDomain(received);
  if (!first || !second) return { tone: "warning", title: "צריך למלא שתי כתובות", body: "הזינו דומיין מוכר ודומיין שקיבלתם, בלי סיסמאות או פרטים אישיים.", checks: [] };
  const distance = levenshtein(first, second);
  const close = first !== second && distance <= Math.max(2, Math.ceil(Math.max(first.length, second.length) * 0.2));
  return { tone: first === second ? "positive" : close || second.includes("xn--") ? "warning" : "caution", title: first === second ? "הכתובות זהות לאחר ניקוי בסיסי" : close ? "הכתובות דומות מאוד בכתיב" : "הכתובות שונות", body: "דמיון בכתיב הוא סימן לבדיקה נוספת בלבד. בדקו את הכתובת מול ערוץ רשמי שאתם מכירים.", checks: [`דומיין מוכר: ${first}`, `דומיין שהוזן: ${second}`, `מרחק כתיב בסיסי: ${distance}`] };
}

function checkEmail(value: string): ToolResult {
  const email = value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const domain = email.split("@")[1]?.toLowerCase() || "";
  const checks = [valid ? "מבנה כתובת בסיסי תקין." : "מבנה הכתובת אינו נראה תקין.", domain.includes("xn--") ? "הדומיין כולל Punycode." : "לא זוהה Punycode בדומיין.", /\d{4,}/.test(email) ? "יש רצף ספרות ארוך בכתובת." : "לא זוהה רצף ספרות ארוך."];
  return { tone: !valid || domain.includes("xn--") ? "warning" : /\d{4,}/.test(email) ? "caution" : "positive", title: !email ? "לא הוזנה כתובת" : valid ? "הבדיקה המקומית הסתיימה" : "הכתובת אינה שלמה", body: "הכלי בודק מבנה בלבד. הוא אינו מאמת בעלות, זהות, קיום תיבה או אבטחת דומיין.", checks };
}

function checkCampaignLink(value: string): ToolResult {
  const inspection = inspectUrl(value);
  if (!inspection.parsed) return { tone: "warning", title: "נדרש קישור תקין", body: "הזינו כתובת מלאה של דף נחיתה כדי לבדוק את פרמטרי הקמפיין.", checks: inspection.checks };
  const present = ["utm_source", "utm_medium", "utm_campaign"].filter((name) => inspection.parsed?.searchParams.get(name)?.trim());
  return { tone: inspection.parsed.protocol !== "https:" || !present.length ? "warning" : present.length < 3 ? "caution" : "positive", title: present.length === 3 ? "פרמטרי הליבה קיימים" : "כדאי להשלים את תיוג הקמפיין", body: "הבדיקה אינה מודדת ביצועים. היא רק עוזרת לוודא שהקישור מסומן באופן עקבי לפני פרסום.", checks: [`נמצאו ${present.length} מתוך 3 פרמטרי UTM מרכזיים.`, ...present.map((name) => `${name}: קיים`)] };
}

function checkBulkLinks(value: string): ToolResult {
  const links = value.split(/[\s,;]+/).map((item) => item.trim()).filter(Boolean).slice(0, 10);
  if (!links.length) return { tone: "warning", title: "לא הוזנו קישורים", body: "הדביקו עד עשרה קישורים, אחד בכל שורה או מופרדים בפסיקים.", checks: [] };
  const inspections = links.map(inspectUrl);
  const invalid = inspections.filter((item) => !item.parsed).length;
  const risk = inspections.filter((item) => item.risk > 0).length;
  return { tone: invalid || risk > 2 ? "warning" : risk ? "caution" : "positive", title: `נבדקו ${links.length} קישורים מקומית`, body: "לא נפתח אף קישור. התוצאה מציגה רק סימני מבנה בסיסיים כדי לעזור לתעדף בדיקה נוספת.", checks: [`כתובות שלא ניתן לפענח: ${invalid}`, `כתובות עם סימן אחד או יותר לבדיקה: ${risk}`, links.length === 10 && value.split(/[\s,;]+/).filter(Boolean).length > 10 ? "נבדקו עשרת הקישורים הראשונים בלבד." : "כל הקישורים שהוזנו נכללו בבדיקה."] };
}

function checkMessageLinks(value: string): ToolResult {
  const links = value.match(/(?:https?:\/\/|www\.)[^\s<>'"]+/gi) || [];
  if (!value.trim()) return { tone: "warning", title: "לא הוזנה הודעה", body: "הדביקו הודעה כללית כדי לאתר בתוכה כתובות אינטרנט.", checks: [] };
  if (!links.length) return { tone: "caution", title: "לא נמצאו קישורים מפורשים", body: "יכול להיות שההודעה עדיין דורשת בדיקה, גם אם לא הופיעה בה כתובת מלאה.", checks: ["לא זוהה קישור שמתחיל ב־http, https או www."] };
  const inspected = links.slice(0, 10).map(inspectUrl);
  const risk = inspected.filter((item) => item.risk > 0 || !item.parsed).length;
  return { tone: risk ? "caution" : "positive", title: `נמצאו ${links.length} קישורים בהודעה`, body: "הכתובות לא נפתחו. לפני פעולה, אמתו את ההודעה מול הערוץ הרשמי של הגוף שאמור היה לפנות אליכם.", checks: [`קישורים עם סימן לבדיקה: ${risk}`, links.length > 10 ? "נבדקו עשרת הקישורים הראשונים בלבד." : "כל הקישורים שהופיעו נבדקו מקומית."] };
}

function checkEmailList(value: string): ToolResult {
  const entries = value.split(/[\s,;]+/).map((item) => item.trim().toLowerCase()).filter(Boolean).slice(0, 50);
  if (!entries.length) return { tone: "warning", title: "לא הוזנו כתובות", body: "הדביקו רשימת כתובות כדי לקבל בדיקת מבנה וכפילויות.", checks: [] };
  const invalid = entries.filter((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)).length;
  const duplicates = entries.length - new Set(entries).size;
  const unusual = entries.filter((email) => /xn--|\d{4,}/i.test(email)).length;
  return { tone: invalid ? "warning" : duplicates || unusual ? "caution" : "positive", title: `נבדקו ${entries.length} כתובות מקומית`, body: "הבדיקה אינה מאשרת שתיבה קיימת, שהנמען הסכים לקבל פנייה או שההודעה תימסר. היא רק מסדרת סימנים בסיסיים לפני עבודה עם הרשימה.", checks: [`כתובות במבנה לא מלא: ${invalid}`, `כפילויות ברשימה: ${duplicates}`, `כתובות עם תווים או ספרות חריגים לבדיקה: ${unusual}`] };
}

function checkWebsiteTrust(selected: number): ToolResult {
  const total = websiteTrustItems.length;
  const tone: ResultTone = selected >= total - 1 ? "positive" : selected >= Math.ceil(total / 2) ? "caution" : "warning";
  return {
    tone,
    title: selected >= total - 1 ? "יש בסיס טוב של בהירות ואמון" : selected >= Math.ceil(total / 2) ? "יש כמה נקודות שכדאי להשלים" : "כדאי לחזק את יסודות האמון לפני קמפיין",
    body: "הצ׳קליסט אינו בודק אתר בפועל. הוא מסדר את הנקודות שכדאי לוודא לפני שמפנים אליו קהל חדש או מבקשים ממנו פרטים.",
    checks: [`סומנו ${selected} מתוך ${total} נקודות.`, "לבדיקה עמוקה יותר כדאי לשלב אבטחה, נגישות, SEO וחוויית משתמש לפי הצורך."],
  };
}

function buildCampaignUrl(baseUrl: string, source: string, medium: string, campaign: string) {
  if (!baseUrl.trim()) return { url: "", result: { tone: "warning" as const, title: "נדרשת כתובת יעד", body: "הזינו כתובת של דף הנחיתה לפני בניית הקישור.", checks: [] } };
  try {
    const url = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(baseUrl) ? baseUrl : `https://${baseUrl}`);
    if (source.trim()) url.searchParams.set("utm_source", source.trim());
    if (medium.trim()) url.searchParams.set("utm_medium", medium.trim());
    if (campaign.trim()) url.searchParams.set("utm_campaign", campaign.trim());
    const present = [source, medium, campaign].filter((item) => item.trim()).length;
    return { url: url.toString(), result: { tone: present === 3 ? "positive" as const : "caution" as const, title: present === 3 ? "קישור הקמפיין מוכן" : "הקישור נבנה, אבל חסרים פרטי תיוג", body: "עברו על הכתובת שנוצרה לפני פרסום. אפשר להשלים מקור, אמצעי ושם קמפיין כדי לשמור על מדידה עקבית.", checks: [`נוספו ${present} מתוך 3 פרמטרי UTM מרכזיים.`, url.protocol === "https:" ? "כתובת היעד משתמשת ב־HTTPS." : "כתובת היעד אינה משתמשת ב־HTTPS."] } };
  } catch {
    return { url: "", result: { tone: "warning" as const, title: "כתובת היעד אינה תקינה", body: "בדקו שהכתובת כוללת דומיין תקין וללא רווחים.", checks: [] } };
  }
}

function checkCopyClarity(value: string): ToolResult {
  const text = value.trim();
  if (!text) return { tone: "warning", title: "לא הוזן טקסט", body: "הדביקו טקסט קצר כדי לקבל מדדי אורך ומבנה בסיסיים.", checks: [] };
  const words = text.split(/\s+/).filter(Boolean).length;
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length;
  const sentences = text.split(/[.!?。！？]+/).map((item) => item.trim()).filter(Boolean);
  const longSentences = sentences.filter((item) => item.split(/\s+/).filter(Boolean).length > 28).length;
  const hasAction = /דברו|שלחו|צרו קשר|הזמינו|קבלו|לפרטים|לבדיקה|להתחלה/i.test(text);
  return { tone: longSentences > 2 ? "caution" : "positive", title: "מדדי הבהירות המקומיים מוכנים", body: "המדדים עוזרים לפתוח שיחה על מבנה הטקסט. הם אינם קובעים אם המסר נכון לקהל או עומד בכל דרישת תוכן.", checks: [`מספר מילים: ${words}`, `פסקאות: ${paragraphs}`, `משפטים ארוכים במיוחד: ${longSentences}`, hasAction ? "נמצאה הנעה לפעולה." : "לא זוהתה הנעה לפעולה מפורשת."] };
}

function checkEmailHeaders(value: string): ToolResult {
  const text = value.trim();
  if (!text) return { tone: "warning", title: "לא הודבקו כותרות אימייל", body: "פתחו את הצגת המקור של ההודעה והדביקו רק את הכותרות הדרושות לבדיקה.", checks: [] };
  const normalized = text.replace(/\r?\n[ \t]+/g, " ");
  const header = (name: string) => normalized.match(new RegExp(`^${name}:\\s*(.+)$`, "im"))?.[1]?.trim() || "";
  const from = header("From");
  const replyTo = header("Reply-To");
  const returnPath = header("Return-Path");
  const auth = `${header("Authentication-Results")} ${header("Received-SPF")}`.toLowerCase();
  const emailDomain = (input: string) => input.match(/@([^>\s]+)/)?.[1]?.toLowerCase().replace(/[;,]$/, "") || "";
  const fromDomain = emailDomain(from);
  const replyDomain = emailDomain(replyTo);
  const spf = /spf=pass|\bpass\b.*spf/i.test(auth) ? "עבר" : /spf=(?:fail|softfail|neutral|none)|\b(?:fail|softfail)\b.*spf/i.test(auth) ? "דורש בדיקה" : "לא נמצא";
  const dkim = /dkim=pass/i.test(auth) ? "עבר" : /dkim=(?:fail|neutral|none)/i.test(auth) ? "דורש בדיקה" : "לא נמצא";
  const dmarc = /dmarc=pass/i.test(auth) ? "עבר" : /dmarc=(?:fail|bestguesspass|none)/i.test(auth) ? "דורש בדיקה" : "לא נמצא";
  const replyMismatch = Boolean(fromDomain && replyDomain && fromDomain !== replyDomain);
  const failures = [spf, dkim, dmarc].filter((status) => status === "דורש בדיקה").length + Number(replyMismatch);
  return {
    tone: failures >= 2 ? "warning" : failures || [spf, dkim, dmarc].includes("לא נמצא") ? "caution" : "positive",
    title: failures >= 2 ? "נמצאו כמה סימנים שדורשים אימות" : failures ? "יש פרט שכדאי לבדוק לפני תשובה" : "הכותרות נותחו מקומית",
    body: "כותרות אימייל יכולות לעזור להבין את מסלול ההודעה, אך אינן מוכיחות לבדן שהשולח אמין. אמתו בקשה רגישה בערוץ רשמי ונפרד.",
    checks: [
      `SPF: ${spf}`,
      `DKIM: ${dkim}`,
      `DMARC: ${dmarc}`,
      replyMismatch ? "כתובת Reply-To משתמשת בדומיין שונה מכתובת From." : "לא זוהה פער ברור בין From ל־Reply-To.",
      returnPath ? "נמצאה כתובת Return-Path לבדיקה נוספת." : "לא נמצאה שורת Return-Path בטקסט שהודבק.",
    ],
  };
}

function checkBusinessRequest(value: string): ToolResult {
  const text = value.trim();
  if (!text) return { tone: "warning", title: "לא הודבק נוסח לבדיקה", body: "הדביקו נוסח כללי לאחר שמחקתם שמות, מספרי חשבון ומידע רגיש.", checks: [] };
  const patterns = [
    [/דחוף|מיד|היום|עכשיו|urgent|immediately|today/i, "ניסיון לזרז פעולה"],
    [/שינוי.*(?:בנק|חשבון)|פרטי.*(?:בנק|תשלום)|change.*bank|new account/i, "שינוי בפרטי תשלום או בנק"],
    [/אל תתקשר|סודי|בינינו|confidential|do not call|keep this/i, "בקשה להימנע מאימות רגיל"],
    [/קוד|סיסמה|OTP|verification code|password/i, "בקשה לקוד או לפרטי גישה"],
    [/כרטיס מתנה|gift card|crypto|ביטקוין|מטבע דיגיטלי/i, "אמצעי תשלום שקשה לבטל"],
    [/חשבונית|העברה|תשלום|invoice|wire|transfer|payment/i, "פעולה כספית"],
  ] as const;
  const checks = patterns.filter(([pattern]) => pattern.test(text)).map(([, label]) => label);
  return {
    tone: checks.length >= 3 ? "warning" : checks.length ? "caution" : "positive",
    title: checks.length >= 3 ? "עצרו ואמתו את הבקשה בערוץ נוסף" : checks.length ? "יש סימנים שדורשים אימות" : "לא נמצאו דפוסי לחץ מרכזיים",
    body: "אל תאשרו תשלום או שינוי פרטים מתוך אותה הודעה בלבד. התקשרו למספר רשמי שכבר היה מוכר לארגון ובדקו עם אדם מוסמך.",
    checks: checks.length ? checks : ["לא זוהתה דחיפות, סודיות, שינוי בנק, קוד או אמצעי תשלום חריג לפי הבדיקה המקומית."],
  };
}

function checkRedirectChain(value: string): ToolResult {
  const links = value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean).slice(0, 12);
  if (!links.length) return { tone: "warning", title: "לא הודבקה שרשרת", body: "הדביקו כתובת אחת בכל שורה לפי סדר ההפניה.", checks: [] };
  const inspected = links.map(inspectUrl);
  const hosts = inspected.map((item) => item.parsed?.hostname.toLowerCase()).filter((host): host is string => Boolean(host));
  const uniqueHosts = new Set(hosts);
  const invalid = inspected.filter((item) => !item.parsed).length;
  const insecure = inspected.filter((item) => item.parsed?.protocol !== "https:").length;
  const risky = inspected.filter((item) => item.risk > 0).length;
  const concerns = invalid + insecure + Number(uniqueHosts.size > 2) + Number(links.length > 5) + Number(risky > 1);
  return {
    tone: concerns >= 3 ? "warning" : concerns ? "caution" : "positive",
    title: concerns >= 3 ? "השרשרת מורכבת ודורשת בדיקה" : concerns ? "יש מעבר שכדאי להבין" : "השרשרת נראית פשוטה בבדיקת המבנה",
    body: "הכלי אינו פותח קישורים ואינו מאמת את היעד הסופי. ודאו שהכתובת האחרונה שייכת לגוף הרשמי שציפיתם לראות.",
    checks: [`מספר תחנות: ${links.length}`, `מספר דומיינים שונים: ${uniqueHosts.size}`, `כתובות לא תקינות: ${invalid}`, `כתובות ללא HTTPS: ${insecure}`],
  };
}

function checkQrCampaign(selected: number): ToolResult {
  const total = qrCampaignItems.length;
  const tone: ResultTone = selected >= total - 1 ? "positive" : selected >= Math.ceil(total / 2) ? "caution" : "warning";
  return {
    tone,
    title: tone === "positive" ? "הקמפיין קרוב למוכנות" : tone === "caution" ? "כדאי להשלים כמה בדיקות" : "עדיין חסרים יסודות לפני הדפסה",
    body: "סרקו את הקוד מעותק אמיתי, בדקו את היעד בכמה מכשירים ושמרו דרך חלופית להגיע לאותו מידע.",
    checks: [`סומנו ${selected} מתוך ${total} בדיקות.`, "לפני הדפסה בכמות גדולה, בצעו בדיקת ניסיון עם אדם שלא מכיר את הקמפיין."],
  };
}

function createOfficialLinksPolicy(businessName: string, domainValue: string, contact: string) {
  const name = businessName.trim();
  const domain = cleanDomain(domainValue);
  if (!name || !domain) return { policy: "", result: { tone: "warning" as const, title: "חסרים שם עסק או דומיין", body: "מלאו שם עסק ודומיין רשמי כדי ליצור נוסח.", checks: [] } };
  const verification = contact.trim() || "עמוד יצירת הקשר הרשמי באתר";
  const policy = `${name} משתמשת בדומיין הרשמי ${domain}. לפני הזנת פרטים או ביצוע תשלום, בדקו שהכתובת מסתיימת בדומיין הזה. קיבלתם הודעה או קישור לא צפויים? אל תמסרו סיסמה או קוד אימות. אמתו את הפנייה דרך ${verification}.`;
  return { policy, result: { tone: "positive" as const, title: "נוצר נוסח ראשוני", body: "בדקו שהדומיין וערוץ האימות נכונים, וקבלו אישור פנימי לפני פרסום באתר או בהודעות.", checks: [`דומיין רשמי: ${domain}`, `ערוץ אימות: ${verification}`] } };
}

function checkPasswordPattern(value: string): ToolResult {
  if (!value) return { tone: "warning", title: "לא הוזנה דוגמה", body: "הזינו דוגמה בעלת מבנה דומה בלבד, בלי סיסמה פעילה או פרטית.", checks: [] };
  const checks = [
    value.length >= 14 ? "האורך הוא לפחות 14 תווים." : "האורך קצר מ־14 תווים.",
    /[a-z]/.test(value) && /[A-Z]/.test(value) ? "יש אותיות קטנות וגדולות באנגלית." : "לא זוהה שילוב של אותיות קטנות וגדולות באנגלית.",
    /\d/.test(value) ? "יש לפחות ספרה אחת." : "לא זוהתה ספרה.",
    /[^A-Za-z0-9]/.test(value) ? "יש תו מיוחד." : "לא זוהה תו מיוחד.",
    /(.)\1\1|1234|qwer|password|סיסמה/i.test(value) ? "זוהה רצף או מילה נפוצה שכדאי להימנע מהם." : "לא זוהה רצף נפוץ מהבדיקה המקומית.",
  ];
  const score = Number(value.length >= 14) + Number(/[a-z]/.test(value) && /[A-Z]/.test(value)) + Number(/\d/.test(value)) + Number(/[^A-Za-z0-9]/.test(value)) - Number(/(.)\1\1|1234|qwer|password|סיסמה/i.test(value));
  return { tone: score >= 4 ? "positive" : score >= 2 ? "caution" : "warning", title: score >= 4 ? "למבנה יש בסיס טוב" : score >= 2 ? "כדאי לחזק את המבנה" : "כדאי לבחור מבנה חזק יותר", body: "הבדיקה בוחנת מאפיינים בסיסיים בלבד. היא לא יודעת אם הסיסמה דלפה, נמצאת בשימוש חוזר או מתאימה למדיניות הארגון.", checks };
}

function checkAccountProtection(selected: number): ToolResult {
  const total = accountProtectionItems.length;
  const tone: ResultTone = selected >= total - 1 ? "positive" : selected >= Math.ceil(total / 2) ? "caution" : "warning";
  return { tone, title: tone === "positive" ? "יש בסיס טוב להגנת החשבון" : tone === "caution" ? "יש כמה צעדים שכדאי להשלים" : "כדאי לחזק את ההגנה לפני שמתרחשת בעיה", body: "הצ׳קליסט לא בודק חשבון בפועל. הוא מסדר את הנקודות שכדאי לוודא בשגרה, במיוחד בחשבון עסקי או בחשבון שמחובר לנכסים דיגיטליים.", checks: [`סומנו ${selected} מתוך ${total} צעדי הגנה.`, "אם אבדת גישה או קיים חשד לפריצה, עברו דרך עמודי השחזור הרשמיים ואל תמסרו קודי אימות לאדם אחר."] };
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
