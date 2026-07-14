"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const labels = {
  he: { light: "מצב בהיר", dark: "מצב כהה", aria: "החלפת מצב תצוגה" },
  de: { light: "Hell", dark: "Dunkel", aria: "Darstellung wechseln" },
  jp: { light: "ライト", dark: "ダーク", aria: "表示テーマを切り替える" },
  ar: { light: "فاتح", dark: "داكن", aria: "تبديل نمط العرض" },
  hi: { light: "लाइट", dark: "डार्क", aria: "थीम बदलें" },
  fr: { light: "Clair", dark: "Sombre", aria: "Changer le thème" },
  zh: { light: "浅色", dark: "深色", aria: "切换显示模式" },
};

export function ThemeToggle({ locale = "he" }: { locale?: keyof typeof labels }) {
  const [theme, setTheme] = useState<Theme>("light");
  const copy = labels[locale] || labels.he;

  useEffect(() => {
    const stored = window.localStorage.getItem("navines-theme");
    const nextTheme: Theme = stored === "dark" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("theme-dark", nextTheme === "dark");
    document.documentElement.classList.toggle("theme-light", nextTheme === "light");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("navines-theme", nextTheme);
    document.documentElement.classList.toggle("theme-dark", nextTheme === "dark");
    document.documentElement.classList.toggle("theme-light", nextTheme === "light");
  }

  return (
    <button
      aria-label={copy.aria}
      aria-pressed={theme === "dark"}
      className="inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition"
      onClick={toggleTheme}
      style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text)" }}
      type="button"
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: theme === "dark" ? "#38BDF8" : "#0284C7" }} aria-hidden="true" />
      <span>{theme === "dark" ? copy.dark : copy.light}</span>
    </button>
  );
}
