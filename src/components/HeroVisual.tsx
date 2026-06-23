import Link from "next/link";
import { site } from "@/data/site";

const signals = [
  { label: "נתונים ו־ChatGPT", href: "/services/chatgpt-business-data" },
  { label: "בינה מלאכותית", href: "/services/ai-automation" },
  { label: "אוטומציה", href: "/services/ai-automation" },
  { label: "אתרים", href: "/services/web-development" },
  { label: "איקומרס", href: "/services/ecommerce" },
  { label: "אבטחה", href: "/services/security-recovery" },
];

const livePanels = [
  { title: "מערכות פעילות", value: "זמין", text: "אתר, וואטסאפ, מדידה וניטור" },
  { title: "ChatGPT לנתונים", value: "מחובר", text: "מכירות, מלאי, הזמנות ודוחות" },
  { title: "אופטימיזציה", value: "בבדיקה", text: "מהירות, אבטחה וחוויית מובייל" },
];

const commandCards = [
  { title: "פניות", text: "מסלול ברור מלקוח עד פעולה" },
  { title: "נתונים", text: "תמונה אחת במקום ניחושים" },
  { title: "תפעול", text: "פחות עבודה ידנית ויותר סדר" },
];

export function HeroVisual() {
  return (
    <div
      className="hero-star-field relative overflow-hidden rounded-[2rem] border border-purple-300/12 bg-black p-3 shadow-[0_28px_120px_rgba(0,0,0,0.55)] sm:p-5"
      data-section="hero-visual"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0_26%,rgba(255,255,255,0.09)_26.2%_26.45%,transparent_26.7%_100%),linear-gradient(35deg,transparent_0_68%,rgba(216,180,254,0.1)_68.2%_68.45%,transparent_68.7%_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[18%] top-[18%] h-24 w-32 rotate-[-18deg] rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[12%] right-[12%] h-28 w-40 rotate-[20deg] rounded-full bg-white/8 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 grid gap-3">
        <div className="grid gap-2 sm:grid-cols-3">
          {livePanels.map((panel) => (
            <div className="command-glass rounded-[1.2rem] px-3 py-2.5" key={panel.title}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-black text-zinc-400">{panel.title}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-xs font-black text-emerald-200">
                  <span className="status-pip bg-emerald-300" />
                  {panel.value}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{panel.text}</p>
            </div>
          ))}
        </div>

        <div className="relative mx-auto h-64 w-full max-w-[34rem] bg-black sm:h-[23rem] lg:h-[25rem]">
          <div className="absolute inset-8 rounded-full border border-white/8 bg-black shadow-[0_0_58px_rgba(255,255,255,0.08),0_0_78px_rgba(216,180,254,0.16)]" aria-hidden="true" />
          <div className="absolute inset-16 rounded-full bg-white/[0.035] blur-[38px]" aria-hidden="true" />
          <div className="absolute inset-x-10 top-8 hidden rounded-full border border-purple-300/12 bg-black/36 px-4 py-2 text-center text-sm font-black text-glowred shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:block">
            מרכז פיקוד דיגיטלי לעסק
          </div>
          <div className="absolute left-[12%] top-[19%] h-px w-2/3 rotate-[-16deg] bg-gradient-to-l from-transparent via-white/55 to-transparent shadow-[0_0_24px_rgba(216,180,254,0.36)]" aria-hidden="true" />
          <div className="absolute bottom-[24%] right-[8%] h-px w-3/4 rotate-[22deg] bg-gradient-to-l from-transparent via-purple-300/48 to-transparent shadow-[0_0_24px_rgba(168,85,247,0.34)]" aria-hidden="true" />
          <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-l from-transparent via-purple-200/25 to-transparent" aria-hidden="true" />
          <span className="hero-spark left-[10%] top-[34%]" aria-hidden="true" />
          <span className="hero-spark left-[22%] bottom-[23%]" aria-hidden="true" />
          <span className="hero-spark right-[14%] top-[18%]" aria-hidden="true" />
          <span className="hero-spark right-[24%] bottom-[18%]" aria-hidden="true" />
          <span className="hero-spark left-[50%] top-[9%]" aria-hidden="true" />
          <span className="hero-spark left-[8%] bottom-[45%]" aria-hidden="true" />
          <span className="hero-spark right-[8%] top-[52%]" aria-hidden="true" />
          <span className="hero-spark left-[64%] bottom-[8%]" aria-hidden="true" />
          <img
            alt="מגן דוד טכנולוגי סגול וזוהר"
            className="glow-asset relative h-full w-full object-contain"
            src="/visuals/navines-purple-tech-star.png"
          />
          <span className="absolute left-[18%] top-[26%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_22px_rgba(168,85,247,0.86)]" aria-hidden="true" />
          <span className="absolute right-[17%] top-[36%] h-1.5 w-1.5 rounded-full bg-glowred shadow-[0_0_26px_rgba(216,180,254,0.78)]" aria-hidden="true" />
          <span className="absolute bottom-[20%] left-[44%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_28px_rgba(192,132,252,0.9)]" aria-hidden="true" />
          <span className="absolute bottom-[30%] right-[28%] h-1 w-1 rounded-full bg-purple-200 shadow-[0_0_22px_rgba(233,213,255,0.72)]" aria-hidden="true" />
          <span className="absolute left-[32%] top-[14%] h-1 w-1 rounded-full bg-fuchsia-200 shadow-[0_0_20px_rgba(216,180,254,0.7)]" aria-hidden="true" />
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {commandCards.map((card) => (
            <div className="command-glass rounded-[1.2rem] px-4 py-3" key={card.title}>
              <p className="text-lg font-black text-white">{card.title}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-400">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="mx-auto max-w-xl text-[2rem] font-black leading-tight text-white sm:text-4xl">מערכת אחת שמחברת אתר, נתונים, אוטומציה וביצוע</h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-zinc-300">עיצוב נקי, תשתית חכמה, מהירות, אבטחה וכלים שעוזרים לעסק לעבוד ברור יותר.</p>
          <a className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full border border-purple-200/30 bg-purple-500/16 px-6 py-2.5 text-base font-black text-white shadow-[0_0_34px_rgba(168,85,247,0.24)] transition hover:-translate-y-0.5 hover:bg-purple-500/24" href={site.whatsappHref}>
            שלחו הודעה קצרה ונכוון אתכם
          </a>
        </div>

        <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-2 sm:grid-cols-3">
          {signals.map((signal) => (
            <Link className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-purple-300/55 hover:bg-purple-500/12" href={signal.href} key={signal.label}>
              <span className="text-sm font-black text-white sm:text-lg">{signal.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
