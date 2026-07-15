import type { ReactNode } from "react";
import { site } from "@/data/site";

export function BrandInline({ text, className = "text-glowred hover:text-white" }: { text: string; className?: string }) {
  const parts = text.split(/(Navines|[A-Za-z0-9][A-Za-z0-9._:/+-]*(?:\.[A-Za-z0-9._:/+-]+)*)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index): ReactNode => {
        if (part === "Navines") {
          return (
            <a className={`${className} english-tech`} href={site.internationalUrl} key={`${part}-${index}`} rel="noreferrer" target="_blank">
              Navines
            </a>
          );
        }

        if (/[A-Za-z]/.test(part)) {
          return (
            <span className="english-tech" key={`${part}-${index}`}>
              {part}
            </span>
          );
        }

        return part;
      })}
    </>
  );
}
