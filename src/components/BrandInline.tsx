import type { ReactNode } from "react";
import { site } from "@/data/site";

export function BrandInline({ text, className = "text-glowred hover:text-white" }: { text: string; className?: string }) {
  const parts = text.split(/(NAVINES)/g);

  return (
    <>
      {parts.map((part, index): ReactNode => {
        if (part !== "NAVINES") return part;
        return (
          <a className={className} href={site.internationalUrl} key={`${part}-${index}`} rel="noreferrer" target="_blank">
            NAVINES
          </a>
        );
      })}
    </>
  );
}
