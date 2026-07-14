import type { PublicLocale } from "@/i18n/locales";

export type LinkItem = {
  label: string;
  href: string;
};

export type LocalizedLandingContent = {
  locale: PublicLocale;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trust: string;
  services: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  solutions: {
    title: string;
    items: { title: string; text: string }[];
  };
  process: {
    title: string;
    steps: { title: string; text: string }[];
  };
  why: {
    title: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    text: string;
    whatsappLabel: string;
    emailLabel: string;
    whatsappText: string;
    emailSubject: string;
  };
  insight: {
    title: string;
    text: string;
    href: string;
    cta: string;
  };
};

export type LocalizedArticleContent = {
  locale: PublicLocale;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  sections: { title: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    text: string;
    whatsappLabel: string;
    emailLabel: string;
  };
};

export type LocalizedPageContent = {
  landing: LocalizedLandingContent;
  article: LocalizedArticleContent;
};
