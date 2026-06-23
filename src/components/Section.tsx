import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
  titleAs = "h2",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleAs?: "h1" | "h2";
}) {
  const Heading = titleAs;

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow && <p className="mb-3 text-base font-black text-glowred">{eyebrow}</p>}
          {title && <Heading className="text-4xl font-black leading-tight text-white md:text-5xl">{title}</Heading>}
        </div>
      )}
      {children}
    </section>
  );
}
