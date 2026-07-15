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

function applyTheme(nextTheme: Theme) {
  document.documentElement.classList.toggle("theme-dark", nextTheme === "dark");
  document.documentElement.classList.toggle("theme-light", nextTheme === "light");
}

function persistTheme(nextTheme: Theme) {
  try {
    window.localStorage.setItem("navines-theme", nextTheme);
  } catch {
    // localStorage may be unavailable in private or restricted browsing modes.
  }
  document.cookie = `navines-theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
}

export function ThemeToggle({ locale = "he", initialTheme = "light" }: { locale?: keyof typeof labels; initialTheme?: Theme }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const copy = labels[locale] || labels.he;

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem("navines-theme");
    } catch {
      stored = null;
    }
    const nextTheme: Theme = stored === "dark" || stored === "light" ? stored : initialTheme;
    setTheme(nextTheme);
    applyTheme(nextTheme);
    persistTheme(nextTheme);
  }, [initialTheme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    persistTheme(nextTheme);
  }

  return (
    <button
      aria-label={copy.aria}
      aria-pressed={theme === "dark"}
      className="theme-toggle inline-flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle-indicator h-2.5 w-2.5 rounded-full" style={{ background: theme === "dark" ? "#38BDF8" : "#0284C7" }} aria-hidden="true" />
      <span>{theme === "dark" ? copy.dark : copy.light}</span>
    </button>
  );
}
