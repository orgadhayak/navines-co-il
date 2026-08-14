import type { ReactNode } from "react";
import { site } from "@/data/site";

const productLinks = {
  "Navines Real Estate Intelligence": "https://realestateintel.navines.com/",
  "Navines Beacon": "https://beacon.navines.com",
  "CheckLink.ai": "https://checklink.ai",
  "TalkToData": "https://talktodata.navines.com",
  "AmazonIQ": "https://iq.navines.com/",
  "NAVINES IQ": "https://iq.navines.com/",
  Navines: site.internationalUrl,
} as const;

const productPattern = Object.keys(productLinks).sort((first, second) => second.length - first.length).map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");

export function BrandInline({ text, className = "text-glowred hover:text-white", linkProducts = true }: { text: string; className?: string; linkProducts?: boolean }) {
  const parts = text.split(new RegExp(`(${productPattern}|[A-Za-z0-9][A-Za-z0-9._:/+-]*(?:\\.[A-Za-z0-9._:/+-]+)*)`, "g")).filter(Boolean);

  return (
    <>
      {parts.map((part, index): ReactNode => {
        const href = productLinks[part as keyof typeof productLinks];
        if (href && linkProducts) {
          return (
            <a className={`${className} english-tech`} href={href} key={`${part}-${index}`} rel="noopener noreferrer" target="_blank">
              {part}
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
