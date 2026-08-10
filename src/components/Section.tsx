import type { ReactNode } from "react";
import { BrandInline } from "@/components/BrandInline";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
  id,
  titleAs = "h2",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  titleAs?: "h1" | "h2";
}) {
  const Heading = titleAs;

  return (
    <section className={`site-section mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20 ${className}`} id={id}>
      {(eyebrow || title) && (
        <div className="section-heading mb-9 max-w-3xl">
          {eyebrow && (
            <p className="section-eyebrow mb-3 text-sm font-semibold text-glowred">
              <BrandInline text={eyebrow} />
            </p>
          )}
          {title && (
            <Heading className="section-title text-3xl font-semibold leading-tight text-white md:text-5xl">
              <BrandInline text={title} />
            </Heading>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
