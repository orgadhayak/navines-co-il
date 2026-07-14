import { arContent } from "./ar";
import { deContent } from "./de";
import { frContent } from "./fr";
import { hiContent } from "./hi";
import { jpContent } from "./jp";
import { zhContent } from "./zh";
import type { PublicLocale } from "@/i18n/locales";
import type { LocalizedPageContent } from "./types";

export const localizedContent: Record<PublicLocale, LocalizedPageContent> = {
  de: deContent,
  jp: jpContent,
  ar: arContent,
  hi: hiContent,
  fr: frContent,
  zh: zhContent,
};

export function getLocalizedContent(locale: string): LocalizedPageContent | undefined {
  return localizedContent[locale as PublicLocale];
}
