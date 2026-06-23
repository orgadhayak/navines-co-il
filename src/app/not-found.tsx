import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "העמוד שחיפשתם לא נמצא",
  description: "הקישור השתנה או שהעמוד כבר לא קיים. אפשר לחזור לעמוד הבית או ליצור קשר עם NAVINES ישראל.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[65svh] max-w-4xl place-items-center px-4 py-20 text-center">
      <div>
        <p className="mb-4 text-sm font-black text-glowred">404</p>
        <h1 className="text-4xl font-black text-white md:text-6xl">העמוד שחיפשתם לא נמצא</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">יכול להיות שהקישור השתנה או שהעמוד כבר לא קיים. אפשר לחזור לעמוד הבית או ליצור איתנו קשר ונעזור לכם למצוא את מה שחיפשתם.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link className="btn-primary" href="/">
            חזרה לעמוד הבית
          </Link>
          <Link className="btn-secondary" href="/contact">
            יצירת קשר
          </Link>
        </div>
      </div>
    </section>
  );
}
