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
    <section className={`mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ${className}`} id={id}>
      {(eyebrow || title) && (
        <div className="mb-6 max-w-4xl">
          {eyebrow && (
            <p className="mb-3 text-base font-black text-glowred">
              <BrandInline text={eyebrow} />
            </p>
          )}
          {title && (
            <Heading className="text-[2.65rem] font-black leading-[1.05] text-white md:text-6xl">
              <BrandInline text={title} />
            </Heading>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
