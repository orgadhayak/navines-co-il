import { NextRequest, NextResponse } from "next/server";

const localTopics = [
  {
    keys: ["אתר", "אתרים", "בניית אתר", "וורדפרס", "מערכת"],
    answer: "נביא נס ישראל בע״מ בונה אתרים ומערכות שמסבירים ברור, עובדים טוב במובייל ומובילים לפנייה. אפשר לשלוח לנו בוואטסאפ מה יש לכם היום ונכוון אתכם.",
  },
  {
    keys: ["צ׳ט", "chat", "בוט", "עוזר"],
    answer: "אנחנו בונים צ׳ט AI חכם לאתרים: קצר, ברור, מותאם לתוכן האתר ומוביל לוואטסאפ כשצריך שיחה אנושית. העמוד הרלוונטי הוא /services/ai-chat-for-websites.",
  },
  {
    keys: ["talktodata", "נתונים", "דאטה", "דוחות", "מיילים", "אימיילים"],
    answer: "TalkToData עוזר לעסק לדבר עם נתונים, דוחות ואימיילים בשפה פשוטה. אפשר לבדוק חיבור למערכות כמו חנות, מייל, מלאי או מערכת לקוחות.",
  },
  {
    keys: ["beacon", "ביקון", "ניטור"],
    answer: "NAVINES Beacon הוא כיוון לניטור נכסים דיגיטליים, אתרים, חנויות וסימני סיכון לפני שהם הופכים לבעיה גדולה.",
  },
  {
    keys: ["תמיכה", "תקלה", "סייבר", "רשת", "רשתות", "dns", "דומיין", "מייל"],
    answer: "אנחנו מסייעים בתמיכה טכנית, סייבר בסיסי, רשתות, דומיינים, מיילים ואתרים שנפלו. אם זו תקלה דחופה, כדאי לכתוב לנו עכשיו בוואטסאפ.",
  },
  {
    keys: ["קורס", "ילדים", "בוגרים", "לימודים"],
    answer: "יש קורסי AI מעשיים לילדים ולבוגרים, עם מפגשים פרונטליים וליווי. אפשר לקרוא בעמוד /courses או לשלוח הודעה בוואטסאפ לבדיקת התאמה.",
  },
  {
    keys: ["אמזון", "amazon", "איביי", "ebay"],
    answer: "אנחנו עוזרים למוכרי Amazon ו־eBay בניהול, דוחות, Account Health, אוטומציה, ניטור וטיפול במצבים דחופים. אפשר להתחיל בעמוד /solutions/amazon-sellers.",
  },
  {
    keys: ["משחק", "משחקים"],
    answer: "בעמוד /games יש משחקים קטנים בעברית וגם משחק ארקייד בשם מגן האתר של נביא נס ישראל.",
  },
];

function fallbackAnswer(question: string) {
  const normalized = question.toLowerCase();
  const topic = localTopics.find((item) => item.keys.some((key) => normalized.includes(key.toLowerCase())));
  return topic?.answer || "כדאי לדבר איתנו בוואטסאפ ונכוון אתכם. אפשר לשאול אותי על אתרים, AI, אוטומציה, TalkToData, Beacon, Amazon, קורסים, תמיכה טכנית ומשחקים באתר.";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const rawQuestion = typeof body?.message === "string" ? body.message : "";
    const question = rawQuestion.replace(/\s+/g, " ").trim().slice(0, 500);

    if (!question) {
      return NextResponse.json({ answer: "אפשר לכתוב שאלה קצרה על שירותי נביא נס ישראל בע״מ, ואענה בקצרה." });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ answer: fallbackAnswer(question), mode: "fallback" });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        max_tokens: 180,
        temperature: 0.25,
        messages: [
          {
            role: "system",
            content:
              "אתה העוזר החכם של נביא נס ישראל בע״מ. ענה בעברית בלבד, קצר וברור, עד 4 משפטים. אל תבקש מידע רגיש. אל תבטיח תוצאות. אם מתאים, הפנה לשירות באתר או לוואטסאפ. שירותים מרכזיים: בניית אתרים, AI ואוטומציה, צ׳ט AI לאתרים, TalkToData, NAVINES Beacon, Amazon sellers, רואי חשבון, פרילנסרים, קורסי AI לילדים ולבוגרים, תמיכה טכנית, סייבר ורשתות, משחקים ויצירת קשר.",
          },
          { role: "user", content: question },
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ answer: fallbackAnswer(question), mode: "fallback" });
    }

    const data = await response.json();
    const answer = String(data?.choices?.[0]?.message?.content || "").trim().slice(0, 900);
    return NextResponse.json({ answer: answer || fallbackAnswer(question) });
  } catch {
    return NextResponse.json({ answer: "יש תקלה רגעית בצ׳ט. כדאי לדבר איתנו בוואטסאפ ונכוון אתכם." });
  }
}
