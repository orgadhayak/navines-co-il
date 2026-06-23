"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>> & { push?: (event: Record<string, unknown>) => void };
  }
}

function eventNameForLink(link: HTMLAnchorElement) {
  const href = link.getAttribute("href") || "";
  const text = link.textContent || "";
  if (href.includes("wa.me")) return "whatsapp_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (text.includes("Beacon")) return "beacon_click";
  if (text.includes("Analyzer") || text.includes("בדקו את האתר")) return "analyzer_click";
  if (href.startsWith("/services") || href.includes("/services/")) return "service_cta_click";
  return "";
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const name = eventNameForLink(link as HTMLAnchorElement);
      if (name) {
        window.dataLayer?.push?.({ event: name, href: (link as HTMLAnchorElement).href });
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
