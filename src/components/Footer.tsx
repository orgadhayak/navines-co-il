"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { languageLinks, type LocaleSlug } from "@/i18n/locales";
import { products, services, site, type Product, type Service } from "@/data/site";
import { solutionPages } from "@/data/solutions";

type FooterItem = { label: string; href: string; status?: Product["status"] };
type FooterGroup = { id: string; title: string; items: FooterItem[] };

const serviceGroupMap: Record<string, string> = {
  "ai-automation": "ai",
  "chatgpt-business-data": "ai",
  "ai-chat-for-websites": "ai",
  "api-integrations": "ai",
  "business-intelligence": "ai",
  "web-development": "build",
  "global-brand-b2b-platform": "build",
  "mobile-app-development": "build",
  "browser-extension-development": "build",
  "business-website-999": "build",
  "smart-website-lead-engine": "build",
  "website-speed-optimization": "build",
  "seo-digital-marketing": "build",
  consulting: "build",
  ecommerce: "commerce",
  shopify: "commerce",
  woocommerce: "commerce",
  "amazon-account-management": "commerce",
  "amazon-seller-seo-website": "commerce",
  "ebay-account-management": "commerce",
  "technical-support-cyber-networks": "support",
  "account-hack-recovery": "support",
  "security-recovery": "support",
  "business-due-diligence-intelligence": "support",
  "vehicle-property-agricultural-appraisal": "support",
  "legal-operations-technology": "support",
  "traffic-case-technology": "support",
};

const serviceGroupLabels: Record<string, string> = {
  ai: "AI, נתונים ואוטומציה",
  build: "פיתוח, אתרים ומערכות",
  commerce: "איקומרס ומרקטפלייסים",
  support: "תמיכה ושירותים מקצועיים",
};

const productGroupMap: Record<string, string> = {
  "talk-to-data": "data",
  amazoniq: "data",
  "Navines-beacon": "data",
  "Navines-site-assistant": "web",
  "website-analyzer": "web",
  checklink: "web",
  "navines-tools-hub-extension": "browser",
  "partnercrypto-toolkit-extension": "browser",
};

const productGroupLabels: Record<string, string> = {
  data: "נתונים ומודיעין",
  web: "אתרים ואמון דיגיטלי",
  browser: "תוספי דפדפן וכלים",
  other: "מוצרים נוספים",
};

const localizedFooterCopy: Record<Exclude<LocaleSlug, "he">, { description: string; services: string; products: string; contact: string; languages: string; legal: string; ctaTitle: string; ctaText: string; whatsapp: string; email: string; phone: string }> = {
  de: { description: "Israelisches Software- und KI-Unternehmen für praktische digitale Systeme, Automatisierung und Datenwerkzeuge für Unternehmen.", services: "Leistungen", products: "Produkte und Einblicke", contact: "Kontakt", languages: "Sprachen", legal: "Rechtliches", ctaTitle: "Möchten Sie ein konkretes digitales Projekt besprechen?", ctaText: "Senden Sie eine kurze Nachricht. Wir helfen, den richtigen nächsten Schritt zu klären.", whatsapp: "Über WhatsApp schreiben", email: "E-Mail senden", phone: "Telefon" },
  jp: { description: "イスラエル発のソフトウェアとAIの会社として、実用的なシステム、自動化、データ活用を支援します。", services: "サービス", products: "製品とインサイト", contact: "お問い合わせ", languages: "言語", legal: "法務情報", ctaTitle: "デジタルプロジェクトについて相談しますか。", ctaText: "短いメッセージをお送りください。次に何を確認すべきか整理します。", whatsapp: "WhatsAppで相談", email: "メールを送る", phone: "電話" },
  ar: { description: "شركة إسرائيلية للبرمجيات والذكاء الاصطناعي تبني أنظمة عملية وأتمتة وأدوات بيانات للشركات.", services: "الخدمات", products: "المنتجات والمقالات", contact: "تواصل", languages: "اللغات", legal: "روابط قانونية", ctaTitle: "هل تريدون مناقشة مشروع رقمي عملي؟", ctaText: "أرسلوا رسالة قصيرة وسنساعدكم في فهم الخطوة المناسبة.", whatsapp: "تواصل عبر WhatsApp", email: "إرسال بريد إلكتروني", phone: "هاتف" },
  hi: { description: "इज़राइल की software और AI कंपनी, जो व्यवसायों के लिए व्यावहारिक systems, automation और data tools बनाती है।", services: "सेवाएँ", products: "उत्पाद और लेख", contact: "संपर्क", languages: "भाषाएँ", legal: "कानूनी", ctaTitle: "किसी डिजिटल प्रोजेक्ट पर बात करनी है?", ctaText: "एक छोटा संदेश भेजें। हम सही अगला कदम समझने में मदद करेंगे।", whatsapp: "WhatsApp पर बात करें", email: "ईमेल भेजें", phone: "फोन" },
  fr: { description: "Entreprise israélienne de logiciel et d’IA qui conçoit des systèmes numériques, automatisations et outils de données utiles aux entreprises.", services: "Services", products: "Produits et articles", contact: "Contact", languages: "Langues", legal: "Mentions légales", ctaTitle: "Vous voulez discuter d’un projet numérique concret ?", ctaText: "Envoyez un court message. Nous vous aiderons à clarifier la bonne prochaine étape.", whatsapp: "Écrire sur WhatsApp", email: "Envoyer un email", phone: "Téléphone" },
  zh: { description: "来自以色列的软件与 AI 公司，为企业构建实用的数字系统、自动化流程和数据工具。", services: "服务", products: "产品与洞察", contact: "联系", languages: "语言", legal: "法律信息", ctaTitle: "想讨论一个实际的数字项目？", ctaText: "发送一条简短消息，我们会帮助您判断合适的下一步。", whatsapp: "通过 WhatsApp 联系", email: "发送邮件", phone: "电话" },
};

function toServiceItem(service: Service): FooterItem {
  return { label: service.title, href: `/services/${service.slug}` };
}

function createServiceGroups(): FooterGroup[] {
  const buckets = new Map(Object.keys(serviceGroupLabels).map((id) => [id, [] as FooterItem[]]));
  services.forEach((service) => {
    const group = serviceGroupMap[service.slug] || "support";
    buckets.get(group)?.push(toServiceItem(service));
  });
  return Object.entries(serviceGroupLabels).map(([id, title]) => ({ id, title, items: buckets.get(id) || [] }));
}

function createProductGroups(): FooterGroup[] {
  const buckets = new Map(Object.keys(productGroupLabels).map((id) => [id, [] as FooterItem[]]));
  products.filter((product) => product.url).forEach((product) => {
    const group = productGroupMap[product.slug] || "other";
    buckets.get(group)?.push({ label: product.name, href: product.url as string, status: product.status });
  });
  return Object.entries(productGroupLabels)
    .map(([id, title]) => ({ id, title, items: buckets.get(id) || [] }))
    .filter((group) => group.items.length > 0);
}

const serviceGroups = createServiceGroups();
const productGroups = createProductGroups();
const solutionItems: FooterItem[] = [
  ...solutionPages.map((solution) => ({ label: solution.navLabel, href: `/solutions/${solution.slug}` })),
  { label: "כל הפתרונות", href: "/solutions" },
];
const companyItems: FooterItem[] = [
  { label: "מאמרים", href: "/blog" },
  { label: "אודות", href: "/about" },
  { label: "יצירת קשר", href: "/contact" },
  { label: "כל השירותים", href: "/services" },
  { label: "כל המוצרים", href: "/products" },
];
const legalItems: FooterItem[] = [
  { label: "מדיניות פרטיות", href: "/privacy" },
  { label: "תנאי שימוש", href: "/terms" },
  { label: "הצהרת נגישות", href: "/accessibility" },
];

export function Footer({ locale = "he", showCta = true }: { locale?: LocaleSlug; showCta?: boolean }) {
  const isHebrew = locale === "he";
  const localized = isHebrew ? null : localizedFooterCopy[locale as Exclude<LocaleSlug, "he">];

  if (!isHebrew) return <LocalizedFooter locale={locale} copy={localized!} showCta={showCta} />;

  return (
    <footer className="site-footer border-t" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {showCta ? <FooterCta /> : null}
        <div className="footer-desktop-directory hidden gap-x-8 gap-y-10 xl:grid">
          <FooterBrand />
          {serviceGroups.map((group) => <FooterColumn group={group} key={group.id} />)}
          {productGroups.map((group) => <FooterColumn group={group} key={group.id} />)}
          <FooterColumn group={{ id: "solutions", title: "פתרונות לפי סוג עסק", items: solutionItems }} />
          <FooterColumn group={{ id: "company", title: "תוכן וחברה", items: companyItems }} />
          <FooterLanguageColumn />
          <FooterColumn group={{ id: "legal", title: "משפטי", items: legalItems }} />
        </div>
        <div className="grid gap-7 xl:hidden">
          <FooterBrand />
          <FooterMobileGroup group={{ id: "services", title: "שירותים", items: serviceGroups.flatMap((group) => group.items) }} />
          <FooterMobileGroup group={{ id: "products", title: "מוצרים", items: productGroups.flatMap((group) => group.items) }} />
          <FooterMobileGroup group={{ id: "solutions", title: "פתרונות", items: solutionItems }} />
          <FooterMobileGroup group={{ id: "languages", title: "שפות", items: languageItems() }} />
          <FooterMobileGroup group={{ id: "company", title: "תוכן וחברה", items: [...companyItems, ...legalItems] }} />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}

function FooterCta() {
  return (
    <section className="mb-10 border-b pb-8" style={{ borderColor: "var(--border)" }}>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">רוצים להבין מה נכון לעסק שלכם?</h2>
          <p className="mt-2 text-base leading-7" style={{ color: "var(--text-muted)" }}>ספרו לנו מה אתם רוצים לבנות, לחבר או לשפר, ונעזור לבחור את הצעד הראשון.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">דברו איתנו בוואטסאפ</a>
          <a className="btn-secondary" href={site.emailHref}>שליחת אימייל</a>
        </div>
      </div>
    </section>
  );
}

function FooterBrand() {
  return (
    <section className="footer-brand min-w-0">
      <Link className="inline-flex items-center" href="/" aria-label="חזרה לעמוד הבית">
        <img alt="Navines" className="brand-logo h-6 w-auto object-contain" src="/brand/navines-wordmark-slim.png" />
      </Link>
      <strong className="mt-4 block text-lg font-semibold">{site.hebrewLegalName}</strong>
      <p className="mt-3 max-w-sm text-base leading-7" style={{ color: "var(--text-muted)" }}>חברת תוכנה ו־AI שמפתחת מערכות, אוטומציות, אתרים וכלים דיגיטליים לעסקים.</p>
      <p className="mt-3 text-sm font-medium" style={{ color: "var(--text-soft)" }}>{site.companyNumberLabel}</p>
      <div className="mt-5 grid gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
        <a className="footer-contact-link" dir="ltr" href={site.phoneHref}><bdi>{site.phone}</bdi></a>
        <a className="footer-contact-link" dir="ltr" href={site.emailHref}><bdi>{site.email}</bdi></a>
        <a className="footer-contact-link" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">דברו איתנו בוואטסאפ</a>
      </div>
    </section>
  );
}

function FooterColumn({ group }: { group: FooterGroup }) {
  return (
    <section className="min-w-0">
      <h3 className="mb-3 text-base font-semibold">{group.title}</h3>
      <div className="grid gap-1.5">
        {group.items.map((item) => <FooterLink item={item} key={`${group.id}-${item.href}`} />)}
      </div>
    </section>
  );
}

function FooterMobileGroup({ group }: { group: FooterGroup }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <section className="footer-mobile-group w-full border-b" style={{ borderColor: "var(--border)" }}>
      <button aria-controls={panelId} aria-expanded={open} className="footer-accordion-trigger" onClick={() => setOpen((value) => !value)} type="button">
        <span>{group.title}</span>
        <ChevronIcon open={open} />
      </button>
      {open ? <div className="grid gap-1 pb-4" id={panelId}>{group.items.map((item) => <FooterLink item={item} key={`${group.id}-${item.href}`} mobile />)}</div> : null}
    </section>
  );
}

function FooterLink({ item, mobile = false }: { item: FooterItem; mobile?: boolean }) {
  const className = mobile ? "footer-mobile-link" : "footer-link";
  const label = <>{item.label}{item.status === "בטא" ? <span className="footer-status">בטא</span> : null}</>;
  return item.href.startsWith("http") ? (
    <a aria-label={`${item.label}, נפתח באתר חיצוני`} className={className} href={item.href} rel="noopener noreferrer" target="_blank">{label}</a>
  ) : <Link className={className} href={item.href}>{label}</Link>;
}

function FooterLanguageColumn() {
  return <FooterColumn group={{ id: "languages", title: "שפות", items: languageItems() }} />;
}

function languageItems(): FooterItem[] {
  return languageLinks.map((language) => ({ label: `${language.nativeName} (${language.shortLabel})`, href: language.href }));
}

function FooterCopyright() {
  return (
    <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
      <span><bdi>© 2026</bdi> נביא נס ישראל בע״מ <bdi>(Navines)</bdi>. כל הזכויות שמורות.</span>
      <a className="english-tech footer-contact-link" dir="ltr" href={site.internationalUrl} rel="noopener noreferrer" target="_blank"><bdi>navines.com</bdi></a>
    </div>
  );
}

function LocalizedFooter({ locale, copy, showCta }: { locale: Exclude<LocaleSlug, "he">; copy: typeof localizedFooterCopy.de; showCta: boolean }) {
  const homeHref = `/${locale}`;
  const serviceItems = [
    { label: copy.services, href: `${homeHref}#services` },
    { label: "Solutions", href: `${homeHref}#solutions` },
    { label: copy.contact, href: `${homeHref}#contact` },
  ];
  return (
    <footer className="site-footer border-t" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {showCta ? <section className="mb-10 border-b pb-8" style={{ borderColor: "var(--border)" }}><h2 className="text-2xl font-semibold">{copy.ctaTitle}</h2><p className="mt-2 max-w-2xl" style={{ color: "var(--text-muted)" }}>{copy.ctaText}</p><div className="mt-5 flex flex-wrap gap-3"><a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">{copy.whatsapp}</a><a className="btn-secondary" href={site.emailHref}>{copy.email}</a></div></section> : null}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <section><Link href={homeHref}><img alt="Navines" className="brand-logo h-6 w-auto" src="/brand/navines-wordmark-slim.png" /></Link><p className="mt-4 text-base leading-7" style={{ color: "var(--text-muted)" }}>{copy.description}</p></section>
          <FooterColumn group={{ id: "services", title: copy.services, items: serviceItems }} />
          <FooterColumn group={{ id: "languages", title: copy.languages, items: languageItems() }} />
          <section><h3 className="mb-3 text-base font-semibold">{copy.contact}</h3><div className="grid gap-2 text-sm" style={{ color: "var(--text-muted)" }}><a className="footer-contact-link" dir="ltr" href={site.phoneHref}><bdi>{site.phone}</bdi></a><a className="footer-contact-link" dir="ltr" href={site.emailHref}><bdi>{site.email}</bdi></a><a className="footer-contact-link" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">{copy.whatsapp}</a></div></section>
        </div>
        <div className="mt-10 border-t pt-6 text-sm" style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>© 2026 Navines. All rights reserved.</div>
      </div>
    </footer>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return <svg aria-hidden="true" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 20 20"><path d="M5 7.5 10 12l5-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>;
}
