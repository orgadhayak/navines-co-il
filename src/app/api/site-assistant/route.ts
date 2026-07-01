import { NextRequest, NextResponse } from "next/server";

type AssistantAction = {
  label: string;
  href: string;
  tone?: "primary" | "danger" | "neutral";
};

type Topic = {
  keys: string[];
  answer: string;
  href?: string;
  label?: string;
  urgent?: boolean;
};

type HistoryMessage = {
  role: "assistant" | "user";
  text: string;
};

type ResponseInputMessage = {
  role: "assistant" | "user";
  content: string;
};

const whatsappAction: AssistantAction = { label: "דברו בוואטסאפ", href: "https://wa.me/972548180200", tone: "primary" };
const phoneAction: AssistantAction = { label: "התקשרו עכשיו", href: "tel:0548180200", tone: "danger" };

const leadKeys = [
  "אני צריך",
  "צריכה",
  "צריך אתר",
  "צריכים אתר",
  "יש לי תקלה",
  "רוצה צ׳ט",
  "רוצה צ'ט",
  "כמה עולה",
  "אפשר לדבר",
  "בעיה באמזון",
  "האתר נפל",
  "רוצה קורס",
  "צריך עזרה",
  "עזרה דחופה",
  "דחוף",
];

const urgentKeys = ["דחוף", "נפל", "לא עובד", "פריצה", "תקלה", "הושעה", "חסימה", "מיילים לא עובדים"];
const priceKeys = ["כמה עולה", "מחיר", "עלות", "כמה זה", "תמחור"];
const pageRequestKeys = ["שלח אותי לעמוד", "תשלח לעמוד", "קישור", "עמוד", "איפה קוראים"];

const topics: Topic[] = [
  {
    keys: ["צ׳ט", "צ'ט", "chat", "בוט", "עוזר", "עוזר חכם"],
    answer:
      "נביא נס ישראל בע״מ בונה צ׳ט AI חכם לאתרים: קצר, ברור ומותאם לתוכן האתר. הוא עוזר לגולשים להבין מה העסק מציע, מפנה לעמוד הנכון ומוביל לוואטסאפ כשצריך שיחה אנושית.",
    href: "/services/ai-chat-for-websites",
    label: "לעמוד צ׳ט AI לאתרים",
  },
  {
    keys: ["אתר", "אתרים", "בניית אתר", "וורדפרס", "מערכת", "מערכות"],
    answer:
      "אנחנו בונים אתרים ומערכות עסקיות שנראים טוב, עובדים מהר ומובילים לפנייה ברורה. המטרה היא לא רק עיצוב, אלא אתר שמסביר, מודד ומשרת את העסק.",
    href: "/services/web-development",
    label: "לעמוד אתרים ומערכות",
  },
  {
    keys: ["talktodata", "נתונים", "דאטה", "דוחות", "מיילים", "אימיילים", "chatgpt"],
    answer:
      "TalkToData מאפשר לעסק לדבר עם נתונים, דוחות ואימיילים בשפה פשוטה. אפשר לבדוק חיבור לחנות, מערכת לקוחות, מלאי, מיילים או API עסקי בצורה מאובטחת ומסודרת.",
    href: "/services/chatgpt-business-data",
    label: "לעמוד TalkToData",
  },
  {
    keys: ["beacon", "ביקון", "ניטור"],
    answer:
      "NAVINES Beacon נועד לניטור נכסים דיגיטליים, אתרים וחנויות כדי לזהות סימני תקלה, סיכון או ירידה בביצועים מוקדם יותר. זה מתאים לעסק שרוצה לדעת לפני שהבעיה גדלה.",
    href: "/products",
    label: "לעמוד כלים ומוצרים",
  },
  {
    keys: ["תמיכה", "תקלה", "סייבר", "רשת", "רשתות", "dns", "דומיין", "מייל", "מיילים", "אחסון", "נפל"],
    answer:
      "אנחנו מסייעים בתמיכה טכנית, סייבר בסיסי, רשתות, דומיינים, מיילים ואתרים שנפלו. אם זה מפריע לעסק לעבוד, כדאי לפנות מהר בוואטסאפ או בטלפון.",
    href: "/services/technical-support-cyber-networks",
    label: "לעמוד תמיכה טכנית",
    urgent: true,
  },
  {
    keys: ["קורס", "קורסים", "ילדים", "בוגרים", "לימודים"],
    answer:
      "יש קורסי AI מעשיים לילדים ולבוגרים. המטרה היא ללמוד איך עוברים מרעיון לפרויקט אמיתי, עם מפגשים פרונטליים וליווי לאורך השנה.",
    href: "/courses",
    label: "לעמוד הקורסים",
  },
  {
    keys: ["אמזון", "amazon", "איביי", "ebay", "הושעה", "account health"],
    answer:
      "אנחנו עוזרים למוכרי Amazon ו־eBay בניהול חשבון, דוחות, Account Health, אוטומציה, ניטור וטיפול במצבים דחופים. לא מבטיחים תוצאה, כן עוזרים להבין את המצב ולבנות כיוון פעולה.",
    href: "/solutions/amazon-sellers",
    label: "לעמוד מוכרי Amazon",
  },
  {
    keys: ["רואה חשבון", "רואי חשבון", "הנהלת חשבונות", "דוחות כספיים"],
    answer:
      "לרואי חשבון והנהלת חשבונות אנחנו בונים פתרונות שמחברים מסמכים, דוחות ושאלות לקוחות לממשק חכם. זה עוזר לסכם מידע ולחסוך זמן, בלי להחליף שיקול דעת מקצועי.",
    href: "/solutions/accountants",
    label: "לעמוד רואי חשבון",
  },
  {
    keys: ["פרילנס", "פרילנסר", "פרילנסרים", "עצמאי", "יועץ"],
    answer:
      "לפרילנסרים אנחנו בונים מערכות קטנות וחכמות לניהול פניות, משימות, לקוחות, דוחות ותזכורות. המטרה היא פחות עבודה ידנית ויותר סדר בעבודה השוטפת.",
    href: "/solutions/freelancers",
    label: "לעמוד פרילנסרים",
  },
  {
    keys: ["משחק", "משחקים", "game"],
    answer:
      "בעמוד המשחקים יש משחקים קטנים בעברית וגם משחק ארקייד בשם מגן האתר של נביא נס ישראל. זה חלק מהצד היצירתי של האתר ומהיכולת לבנות חוויות אינטראקטיביות.",
    href: "/games",
    label: "לעמוד משחקים",
  },
  {
    keys: ["יצירת קשר", "וואטסאפ", "טלפון", "מייל", "לדבר"],
    answer:
      "אפשר לדבר איתנו בוואטסאפ או בטלפון. אם תכתבו בקצרה מה אתם צריכים, נכוון אתכם לשירות או לצעד הבא בצורה פשוטה.",
    href: "/contact",
    label: "לעמוד יצירת קשר",
  },
];

const siteContext = `
נביא נס ישראל בע״מ היא חברת טכנולוגיה לעסקים בישראל.
תחומים מרכזיים:
- בניית אתרים ומערכות: /services/web-development
- AI ואוטומציה: /services/ai-automation
- צ׳ט AI חכם לאתרים: /services/ai-chat-for-websites
- TalkToData וחיבור נתונים ל־ChatGPT: /services/chatgpt-business-data
- NAVINES Beacon וכלים: /products
- קורסי AI לילדים ולבוגרים: /courses
- פתרונות למוכרי Amazon: /solutions/amazon-sellers
- פתרונות לרואי חשבון: /solutions/accountants
- פתרונות לפרילנסרים: /solutions/freelancers
- תמיכה טכנית, סייבר ורשתות: /services/technical-support-cyber-networks
- משחקים באתר: /games
- יצירת קשר: /contact
וואטסאפ: 054-818-0200. טלפון: 054-818-0200.
`;

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function findTopicFromText(text: string) {
  const normalized = normalize(text);
  const matches = topics.filter((topic) => topic.keys.some((key) => normalized.includes(key.toLowerCase())));
  if (hasAny(text, urgentKeys)) {
    return matches.find((topic) => topic.urgent) || matches[0];
  }
  return matches[0];
}

function findTopic(question: string, history: HistoryMessage[] = []) {
  const directTopic = findTopicFromText(question);
  if (directTopic) return directTopic;

  for (const item of [...history].reverse()) {
    const historyTopic = findTopicFromText(item.text);
    if (historyTopic) return historyTopic;
  }

  return undefined;
}

function hasAny(question: string, keys: string[]) {
  const normalized = normalize(question);
  return keys.some((key) => normalized.includes(key.toLowerCase()));
}

function buildActions(topic: Topic | undefined, question: string): AssistantAction[] {
  const isLead = hasAny(question, leadKeys) || hasAny(question, priceKeys);
  const isUrgent = topic?.urgent || hasAny(question, urgentKeys);
  const actions: AssistantAction[] = [];

  if (isLead || isUrgent) {
    actions.push(whatsappAction);
    if (isUrgent) actions.push(phoneAction);
  }

  if (topic?.href && topic.label) {
    actions.push({ label: topic.label, href: topic.href, tone: "neutral" });
  }

  if (!actions.length) {
    actions.push(whatsappAction);
  }

  return actions.slice(0, 3);
}

function sanitizeHistory(input: unknown): HistoryMessage[] {
  if (!Array.isArray(input)) return [];

  return input
    .slice(-10)
    .map((item) => {
      if (typeof item !== "object" || item === null) return null;
      const candidate = item as { role?: unknown; text?: unknown; content?: unknown };
      const role = candidate.role === "user" ? "user" : candidate.role === "assistant" ? "assistant" : null;
      const rawText = typeof candidate.text === "string" ? candidate.text : typeof candidate.content === "string" ? candidate.content : "";
      const text = rawText.replace(/\s+/g, " ").trim().slice(0, 420);
      if (!role || !text) return null;
      return { role, text };
    })
    .filter((item): item is HistoryMessage => Boolean(item));
}

function buildConversationInput(question: string, history: HistoryMessage[]): ResponseInputMessage[] {
  return [
    ...history.slice(-8).map((item) => ({
      role: item.role,
      content: item.text,
    })),
    { role: "user", content: question },
  ];
}

function fallbackPayload(question: string, history: HistoryMessage[]) {
  const topic = findTopic(question, history);
  const lead = hasAny(question, leadKeys) || hasAny(question, priceKeys);
  const urgent = topic?.urgent || hasAny(question, urgentKeys);
  const wantsPage = hasAny(question, pageRequestKeys);
  let answer =
    topic?.answer ||
    "אפשר לשאול אותי על אתרים, AI, אוטומציה, TalkToData, Beacon, Amazon, קורסים, תמיכה טכנית ומשחקים באתר. אם לא בטוחים מה מתאים, כתבו לנו ונכוון אתכם.";

  if (hasAny(question, priceKeys)) {
    answer = "כדי לתת מחיר נכון צריך להבין מה בדיוק בונים ומה כבר קיים. הכי נכון לשלוח לנו הודעה קצרה בוואטסאפ, ונכוון אתכם מהר בלי התחייבות.";
  } else if (wantsPage && topic?.href) {
    answer = "צירפתי כאן את העמוד הרלוונטי. אם תרצו, אפשר גם לשלוח לנו הודעה בוואטסאפ ונכוון אתכם לפי המקרה שלכם.";
  } else if (lead || urgent) {
    answer =
      "נשמע שזה משהו שכדאי לבדוק יחד. אפשר לדבר איתנו בוואטסאפ או בטלפון ונכוון אותך מהר.\nאם יש עמוד מתאים באתר, צירפתי אותו כאן למטה.";
  }

  return { answer, actions: buildActions(topic, question), mode: "fallback", source: "fallback" };
}

function extractResponseText(data: unknown) {
  if (typeof data !== "object" || data === null) return "";
  const record = data as { output_text?: unknown; output?: unknown };
  if (typeof record.output_text === "string") return record.output_text;

  if (Array.isArray(record.output)) {
    return record.output
      .flatMap((item) => {
        if (typeof item !== "object" || item === null) return [];
        const content = (item as { content?: unknown }).content;
        return Array.isArray(content) ? content : [];
      })
      .map((content) => {
        if (typeof content !== "object" || content === null) return "";
        const value = content as { text?: unknown };
        return typeof value.text === "string" ? value.text : "";
      })
      .filter(Boolean)
      .join("\n");
  }

  return "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawQuestion = typeof body?.message === "string" ? body.message : "";
    const question = rawQuestion.replace(/\s+/g, " ").trim().slice(0, 500);
    const history = sanitizeHistory(body?.history);

    if (!question) {
      return NextResponse.json({
        answer: "אפשר לכתוב שאלה קצרה על שירותי נביא נס ישראל בע״מ, ואענה בקצרה.",
        actions: [whatsappAction],
        source: "fallback",
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const topic = findTopic(question, history);
    const fallback = fallbackPayload(question, history);

    if (!apiKey) {
      return NextResponse.json(fallback);
    }

    const systemPrompt = `
אתה העוזר החכם של נביא נס ישראל בע״מ.
תענה בעברית טבעית, קצרה, מדויקת וידידותית.
המטרה: להבין את כוונת הגולש, לענות ישירות, להפנות לעמוד הנכון, ולהציע וואטסאפ או טלפון כשזה מתאים.
השתמש בהיסטוריית השיחה כדי להבין שאלות המשך כמו "כמה זה עולה", "אפשר כזה גם לאמזון", "ומה עם זה" או "שלח אותי לעמוד".
אל תחזור על אותה תשובה. אל תפתח כל תשובה במשפט כללי על החברה.
תשובה רגילה: 2 עד 5 שורות. אם צריך bullets, עד 3 נקודות בלבד.
אם שואלים על מחיר: הסבר שצריך להבין צורך והצע וואטסאפ.
אם זו תקלה דחופה: הפנה מיידית לוואטסאפ או טלפון.
אם זה קורסים, Amazon, צ׳ט AI לאתרים, TalkToData או תמיכה טכנית, הפנה לעמוד המתאים.
אל תבקש מידע רגיש. אל תבטיח תוצאות. אל תמציא מידע שלא מופיע בהקשר האתר.
אם לא בטוח, אמור בקצרה שכדאי לדבר עם הצוות.
${siteContext}
`;

    const model = process.env.OPENAI_MODEL || "gpt-5-mini";
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        instructions: systemPrompt,
        input: buildConversationInput(question, history),
        max_output_tokens: 260,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.warn("site-assistant OpenAI fallback", {
        status: response.status,
        model,
        body: errorText.slice(0, 260),
      });
      return NextResponse.json(fallback);
    }

    const data = await response.json();
    const answer = extractResponseText(data).replace(/\s+\n/g, "\n").trim().slice(0, 900);

    return NextResponse.json({
      answer: answer || fallback.answer,
      actions: buildActions(topic, question),
      source: "openai",
    });
  } catch (error) {
    console.warn("site-assistant fallback", {
      message: error instanceof Error ? error.message.slice(0, 180) : "unknown error",
    });
    return NextResponse.json({
      answer: "יש תקלה רגעית בצ׳ט. כדאי לדבר איתנו בוואטסאפ ונכוון אתכם.",
      actions: [whatsappAction],
      mode: "fallback",
      source: "fallback",
    });
  }
}
