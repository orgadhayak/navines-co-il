"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { DataDefenderGame } from "@/components/DataDefenderGame";

const quizQuestions = [
  {
    question: "אתר מקבל כניסות אבל מעט אנשים פונים. מה כדאי לבדוק קודם?",
    answers: ["רק להחליף צבעים", "מהירות, מסר ברור וכפתורי פעולה", "להוסיף עוד טקסט ארוך"],
    correct: 1,
    explain: "לפני שמוסיפים עוד עומס, בודקים אם הגולש מבין מהר מה מציעים לו ואם האתר עובד מהר וברור.",
  },
  {
    question: "עסק מעתיק נתונים ידנית בין קבצים, מיילים וחנות. מה הפתרון הנכון יותר?",
    answers: ["להמשיך ידנית", "לחבר מערכות ואוטומציה", "למחוק את כל הדוחות"],
    correct: 1,
    explain: "חיבור נכון בין מערכות מצמצם טעויות, חוסך זמן ועוזר לצוות לעבוד מסודר יותר.",
  },
  {
    question: "בעל עסק רוצה להבין איזה מוצר נמכר הכי טוב השבוע. מה הכי יעזור?",
    answers: ["דוח נתונים ברור", "תחושת בטן בלבד", "להחליף לוגו"],
    correct: 0,
    explain: "נתונים פשוטים וברורים עוזרים לקבל החלטה מהירה בלי לחפש ידנית בכל המערכות.",
  },
  {
    question: "מה כלי חינמי באתר יכול לעשות לגולש?",
    answers: ["לתת ערך שימושי ולהגדיל אמון", "להסתיר מידע חשוב", "להאט את האתר בכוונה"],
    correct: 0,
    explain: "מחשבון, בדיקה או שאלון טובים נותנים לגולש עזרה אמיתית ומחזקים את הרושם מהעסק.",
  },
];

const memoryCards = ["דאטה", "אתר", "לקוח", "מכירות", "AI", "מהירות"].flatMap((value, index) => [
  { id: `${value}-1-${index}`, value },
  { id: `${value}-2-${index}`, value },
]);

const reactionTasks = [
  { prompt: "האתר איטי במובייל. בחרו פעולה נכונה.", correct: "בדיקת מהירות", options: ["בדיקת מהירות", "הוספת עומס", "התעלמות"] },
  { prompt: "לקוחות שואלים שוב ושוב את אותן שאלות.", correct: "אוטומציה", options: ["אוטומציה", "עוד קובץ", "פחות מידע"] },
  { prompt: "החנות מתקשה להבין מה נמכר השבוע.", correct: "דוח מכירות", options: ["דוח מכירות", "שינוי צבע", "מחיקת מוצרים"] },
  { prompt: "גולשים לא מבינים איזה שירות מתאים להם.", correct: "כלי התאמה", options: ["כלי התאמה", "טקסט ארוך", "הסתרת מחיר"] },
];

const ideaOpeners = ["בנו כלי", "צרו מחשבון", "הוסיפו בדיקה", "בנו עוזר קטן", "צרו שאלון"];
const ideaActions = ["שעוזר לגולש להבין", "שבודק במהירות", "שמסכם לבעל העסק", "שמכוון את הלקוח", "שמזהה הזדמנות"];
const ideaSubjects = ["איזה מוצר מוכר הכי טוב השבוע", "איזה שירות מתאים לצורך שלו", "איפה האתר מאבד גולשים", "מה כדאי לשפר לפני קמפיין", "איזו פעולה תחסוך לצוות זמן"];

function getRandomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function GamesClient() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const [reactionIndex, setReactionIndex] = useState(0);
  const [reactionStartedAt, setReactionStartedAt] = useState<number | null>(null);
  const [reactionResult, setReactionResult] = useState("לחצו על התחלה ואז בחרו את הפעולה הנכונה.");
  const [reactionScore, setReactionScore] = useState(0);

  const [idea, setIdea] = useState("בנו כלי שעוזר לעסק להבין איזה מוצר מוכר הכי טוב השבוע.");

  const currentQuestion = quizQuestions[quizIndex];
  const currentReaction = reactionTasks[reactionIndex];
  const completedPairs = matched.length;
  const memoryComplete = completedPairs === 6;

  const quizProgress = useMemo(() => `${quizIndex + 1} מתוך ${quizQuestions.length}`, [quizIndex]);

  function answerQuiz(index: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correct) {
      setQuizScore((score) => score + 1);
    }
  }

  function nextQuizQuestion() {
    setSelectedAnswer(null);
    setQuizIndex((index) => (index + 1) % quizQuestions.length);
  }

  function handleMemoryClick(card: (typeof memoryCards)[number]) {
    if (flipped.includes(card.id) || matched.includes(card.value) || flipped.length === 2) return;
    const nextFlipped = [...flipped, card.id];
    setFlipped(nextFlipped);
    if (nextFlipped.length === 2) {
      setMoves((value) => value + 1);
      const firstCard = memoryCards.find((item) => item.id === nextFlipped[0]);
      if (firstCard?.value === card.value) {
        setMatched((values) => [...values, card.value]);
        setFlipped([]);
      } else {
        window.setTimeout(() => setFlipped([]), 700);
      }
    }
  }

  function resetMemory() {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }

  function startReaction() {
    setReactionStartedAt(performance.now());
    setReactionResult("המשימה פעילה. בחרו פעולה.");
  }

  function answerReaction(answer: string) {
    if (reactionStartedAt === null) {
      setReactionResult("קודם לחצו התחלה.");
      return;
    }
    const elapsed = Math.round(performance.now() - reactionStartedAt);
    const isCorrect = answer === currentReaction.correct;
    if (isCorrect) {
      const points = elapsed < 900 ? 3 : elapsed < 1500 ? 2 : 1;
      setReactionScore((score) => score + points);
      setReactionResult(`נכון. זמן תגובה: ${elapsed} אלפיות שנייה. ניקוד: +${points}`);
    } else {
      setReactionResult(`לא נכון. הפעולה הנכונה הייתה: ${currentReaction.correct}`);
    }
    setReactionStartedAt(null);
  }

  function nextReaction() {
    setReactionIndex((index) => (index + 1) % reactionTasks.length);
    setReactionResult("לחצו על התחלה ואז בחרו את הפעולה הנכונה.");
    setReactionStartedAt(null);
  }

  function generateIdea() {
    setIdea(`${getRandomItem(ideaOpeners)} ${getRandomItem(ideaActions)} ${getRandomItem(ideaSubjects)}.`);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <DataDefenderGame />
      <div className="grid gap-5 lg:grid-cols-2">
        <GamePanel eyebrow="משחק 1" title="חידון החלטות חכמות" status={`ניקוד: ${quizScore} · ${quizProgress}`}>
          <p className="text-lg font-black leading-8 text-white">{currentQuestion.question}</p>
          <div className="mt-5 grid gap-3">
            {currentQuestion.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = currentQuestion.correct === index;
              const stateClass = selectedAnswer === null ? "hover:border-purple-200/45 hover:bg-purple-500/12" : isCorrect ? "border-purple-200/60 bg-purple-500/20 text-white" : isSelected ? "border-white/15 bg-white/[0.04] text-zinc-500" : "border-white/10 bg-black/20 text-zinc-400";
              return (
                <button className={`rounded-[1.15rem] border px-4 py-3 text-right text-base font-black transition ${stateClass}`} disabled={selectedAnswer !== null} key={answer} onClick={() => answerQuiz(index)} type="button">
                  {answer}
                </button>
              );
            })}
          </div>
          {selectedAnswer !== null ? (
            <div className="mt-5 rounded-[1.15rem] border border-purple-200/18 bg-purple-500/10 p-4 text-zinc-200" aria-live="polite">
              <p className="font-black text-white">{selectedAnswer === currentQuestion.correct ? "נכון" : "לא נכון"}</p>
              <p className="mt-2 leading-7">{currentQuestion.explain}</p>
            </div>
          ) : null}
          <button className="btn-secondary mt-5 w-full justify-center" onClick={nextQuizQuestion} type="button">
            שאלה הבאה
          </button>
        </GamePanel>

        <GamePanel eyebrow="משחק 2" title="זיכרון נתונים" status={`מהלכים: ${moves} · התאמות: ${completedPairs}/6`}>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {memoryCards.map((card) => {
              const visible = flipped.includes(card.id) || matched.includes(card.value);
              return (
                <button className={`min-h-20 rounded-[1.05rem] border px-2 text-center text-base font-black transition hover:-translate-y-0.5 ${visible ? "border-purple-200/55 bg-purple-500/18 text-white shadow-[0_0_26px_rgba(168,85,247,0.22)]" : "border-white/10 bg-white/[0.045] text-purple-200 hover:border-purple-200/35"}`} key={card.id} onClick={() => handleMemoryClick(card)} type="button">
                  {visible ? card.value : "נתון"}
                </button>
              );
            })}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button className="btn-secondary" onClick={resetMemory} type="button">
              איפוס משחק
            </button>
            {memoryComplete ? <span className="rounded-full border border-purple-200/35 bg-purple-500/14 px-4 py-2 text-sm font-black text-glowred">כל ההתאמות הושלמו</span> : null}
          </div>
        </GamePanel>

        <GamePanel eyebrow="משחק 3" title="מהירות תגובה" status={`ניקוד: ${reactionScore}`}>
          <p className="text-lg font-black leading-8 text-white">{currentReaction.prompt}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {currentReaction.options.map((option) => (
              <button className="rounded-[1.05rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-center text-base font-black text-zinc-100 transition hover:-translate-y-0.5 hover:border-purple-200/45 hover:bg-purple-500/12" key={option} onClick={() => answerReaction(option)} type="button">
                {option}
              </button>
            ))}
          </div>
          <p className="mt-5 rounded-[1.15rem] border border-purple-200/18 bg-black/35 p-4 leading-7 text-zinc-300" aria-live="polite">
            {reactionResult}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="btn-primary" onClick={startReaction} type="button">
              התחילו משימה
            </button>
            <button className="btn-secondary" onClick={nextReaction} type="button">
              משימה הבאה
            </button>
          </div>
        </GamePanel>

        <GamePanel eyebrow="משחק 4" title="מחולל רעיונות חכם" status="רעיונות מקומיים ללא API">
          <div className="rounded-[1.35rem] border border-purple-200/20 bg-gradient-to-br from-purple-500/16 via-white/[0.05] to-black/20 p-5 shadow-[0_0_50px_rgba(168,85,247,0.12)]">
            <p className="text-2xl font-black leading-tight text-white">{idea}</p>
            <p className="mt-4 leading-8 text-zinc-300">
              הרעיון כאן הוא לחשוב מה באמת יעזור לגולש באתר: כלי קטן, ברור ושימושי שיכול לתת ערך, לחזק אמון ולעזור לעסק להתפתח קדימה.
            </p>
          </div>
          <button className="btn-primary mt-5 w-full justify-center" onClick={generateIdea} type="button">
            תן לי רעיון חדש
          </button>
        </GamePanel>
      </div>
    </section>
  );
}

function GamePanel({ eyebrow, title, status, children }: { eyebrow: string; title: string; status: string; children: ReactNode }) {
  return (
    <article className="command-glass rounded-[1.6rem] p-5">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-glowred">{eyebrow}</p>
          <h2 className="mt-1 text-2xl font-black leading-tight text-white sm:text-3xl">{title}</h2>
        </div>
        <span className="rounded-full border border-purple-200/20 bg-purple-500/12 px-3 py-1.5 text-sm font-black text-zinc-200">
          {status}
        </span>
      </div>
      {children}
    </article>
  );
}
