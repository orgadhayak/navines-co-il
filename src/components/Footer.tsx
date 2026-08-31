"use client";

import Link from "next/link";
import Image from "next/image";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { languageLinks, localeFromPath, type LocaleSlug } from "@/i18n/locales";
import { site } from "@/data/site";

type FooterItem = { label: string; href: string; status?: string };
type FooterGroup = { id: string; title: string; items: FooterItem[] };

const footerGroups: FooterGroup[] = [
  {
    id: "services",
    title: "שירותים מרכזיים",
    items: [
      { label: "בינה מלאכותית ואוטומציה", href: "/services/ai-automation" },
      { label: "מחקר החלטות וניסויים לאתרים", href: "/services/website-decision-research-experiments" },
      { label: "חשבונית אונליין ומערכות ל־ChatGPT", href: "/services/business-systems-chatgpt-integration" },
      { label: "פיתוח Connector ו־API מותאם", href: "/services/api-integrations" },
      { label: "סוכני AI וצ׳ט ג׳י פי טי לעסקים", href: "/services/chatgpt-ai-agents-business" },
      { label: "סוכן SEO אוטונומי ו־Search Console", href: "/services/autonomous-seo-agent-search-console-chatgpt" },
      { label: "פיתוח אתרים ומערכות", href: "/services/web-development" },
      { label: "פיתוח אפליקציות", href: "/services/mobile-app-development" },
      { label: "הפצת מוזיקה וניהול אמן", href: "/services/music-distribution-artist-digital-presence" },
      { label: "משחקי רובלוקס ועולמות מותג", href: "/services/roblox-brand-experiences" },
      { label: "איקומרס ומרקטפלייסים", href: "/services/ecommerce" },
      { label: "מערכת תוכנית שותפים לאתר קיים", href: "/services/affiliate-program-platform" },
      { label: "בדיקת חיובים והחזרים אפשריים", href: "/services/payment-discrepancy-review" },
      { label: "תמיכה טכנית, סייבר ורשתות", href: "/services/technical-support-cyber-networks" },
    ],
  },
  {
    id: "products",
    title: "מוצרים וכלים",
    items: [
      { label: "TalkToData", href: "https://talktodata.navines.com" },
      { label: "AmazonIQ", href: "/products/amazoniq" },
      { label: "NAVINES SEO Lab", href: "https://seo.navines.com/he/" },
      { label: "CheckLink.ai", href: "https://checklink.ai" },
      { label: "בודק האתרים של נביא נס", href: "https://analyze.navines.com" },
      { label: "כלים שימושיים בעברית", href: "/tools" },
      { label: "מרכז כלי נביא נס לדפדפן", href: "https://chromewebstore.google.com/detail/navines-tools-hub/ickjjfnfhmednmejidkphbcjdmlgjdpd" },
    ],
  },
  {
    id: "solutions",
    title: "פתרונות וידע",
    items: [
      { label: "פתרונות לרואי חשבון", href: "/solutions/accountants" },
      { label: "פתרונות למוכרי אמזון", href: "/solutions/amazon-sellers" },
      { label: "פתרונות לפרילנסרים", href: "/solutions/freelancers" },
      { label: "קורסי AI מעשיים", href: "/courses" },
      { label: "מרכז האופטימיזציה", href: "/optimization-hub" },
      { label: "מאמרים ותובנות", href: "/blog" },
    ],
  },
  {
    id: "company",
    title: "החברה",
    items: [
      { label: "כל השירותים", href: "/services" },
      { label: "כל המוצרים", href: "/products" },
      { label: "אודות נביא נס ישראל בע״מ", href: "/about" },
      { label: "יצירת קשר", href: "/contact" },
      { label: "מדיניות פרטיות", href: "/privacy" },
      { label: "תנאי שימוש", href: "/terms" },
      { label: "הצהרת נגישות", href: "/accessibility" },
    ],
  },
];

const localizedFooterCopy: Record<Exclude<LocaleSlug, "he">, { description: string; services: string; solutions: string; products: string; tools: string; contact: string; languages: string; legal: string; ctaTitle: string; ctaText: string; whatsapp: string; email: string; phone: string; copyright: string }> = {
  de: { description: "Israelisches Software- und KI-Unternehmen für praktische digitale Systeme, Automatisierung und Datenwerkzeuge für Unternehmen.", services: "Leistungen", solutions: "Lösungen", products: "Produkte und Einblicke", tools: "Werkzeuge", contact: "Kontakt", languages: "Sprachen", legal: "Rechtliches", ctaTitle: "Möchten Sie ein konkretes digitales Projekt besprechen?", ctaText: "Senden Sie eine kurze Nachricht. Wir helfen, den richtigen nächsten Schritt zu klären.", whatsapp: "Über WhatsApp schreiben", email: "E-Mail senden", phone: "Telefon", copyright: "© 2026 Navines. Alle Rechte vorbehalten." },
  jp: { description: "イスラエル発のソフトウェアとAIの会社として、実用的なシステム、自動化、データ活用を支援します。", services: "サービス", solutions: "ソリューション", products: "製品とインサイト", tools: "ツール", contact: "お問い合わせ", languages: "言語", legal: "法務情報", ctaTitle: "デジタルプロジェクトについて相談しますか。", ctaText: "短いメッセージをお送りください。次に何を確認すべきか整理します。", whatsapp: "WhatsAppで相談", email: "メールを送る", phone: "電話", copyright: "© 2026 Navines。すべての権利を保有しています。" },
  ar: { description: "شركة إسرائيلية للبرمجيات والذكاء الاصطناعي تبني أنظمة عملية وأتمتة وأدوات بيانات للشركات.", services: "الخدمات", solutions: "الحلول", products: "المنتجات والمقالات", tools: "الأدوات", contact: "تواصل", languages: "اللغات", legal: "روابط قانونية", ctaTitle: "هل تريدون مناقشة مشروع رقمي عملي؟", ctaText: "أرسلوا رسالة قصيرة وسنساعدكم في فهم الخطوة المناسبة.", whatsapp: "تواصل عبر WhatsApp", email: "إرسال بريد إلكتروني", phone: "هاتف", copyright: "© 2026 Navines. جميع الحقوق محفوظة." },
  hi: { description: "इज़राइल की software और AI कंपनी, जो व्यवसायों के लिए व्यावहारिक systems, automation और data tools बनाती है।", services: "सेवाएँ", solutions: "समाधान", products: "उत्पाद और लेख", tools: "टूल्स", contact: "संपर्क", languages: "भाषाएँ", legal: "कानूनी", ctaTitle: "किसी डिजिटल प्रोजेक्ट पर बात करनी है?", ctaText: "एक छोटा संदेश भेजें। हम सही अगला कदम समझने में मदद करेंगे।", whatsapp: "WhatsApp पर बात करें", email: "ईमेल भेजें", phone: "फोन", copyright: "© 2026 Navines. सर्वाधिकार सुरक्षित।" },
  fr: { description: "Entreprise israélienne de logiciel et d’IA qui conçoit des systèmes numériques, automatisations et outils de données utiles aux entreprises.", services: "Services", solutions: "Solutions", products: "Produits et articles", tools: "Outils", contact: "Contact", languages: "Langues", legal: "Mentions légales", ctaTitle: "Vous voulez discuter d’un projet numérique concret ?", ctaText: "Envoyez un court message. Nous vous aiderons à clarifier la bonne prochaine étape.", whatsapp: "Écrire sur WhatsApp", email: "Envoyer un email", phone: "Téléphone", copyright: "© 2026 Navines. Tous droits réservés." },
  zh: { description: "来自以色列的软件与 AI 公司，为企业构建实用的数字系统、自动化流程和数据工具。", services: "服务", solutions: "解决方案", products: "产品与洞察", tools: "工具", contact: "联系", languages: "语言", legal: "法律信息", ctaTitle: "想讨论一个实际的数字项目？", ctaText: "发送一条简短消息，我们会帮助您判断合适的下一步。", whatsapp: "通过 WhatsApp 联系", email: "发送邮件", phone: "电话", copyright: "© 2026 Navines。保留所有权利。" },
};

export function Footer({ locale = "he", showCta = true }: { locale?: LocaleSlug; showCta?: boolean }) {
  const pathname = usePathname();
  const activeLocale = pathname ? localeFromPath(pathname).slug : locale;
  const activeShowCta = pathname ? pathname !== "/" : showCta;
  const isHebrew = activeLocale === "he";
  const localized = isHebrew ? null : localizedFooterCopy[activeLocale as Exclude<LocaleSlug, "he">];

  if (!isHebrew) return <LocalizedFooter locale={activeLocale as Exclude<LocaleSlug, "he">} copy={localized!} showCta={activeShowCta} />;

  return (
    <footer className="site-footer border-t" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {activeShowCta ? <FooterCta /> : null}
        <div className="footer-desktop-directory hidden xl:grid">
          <FooterBrand />
          {footerGroups.map((group) => <FooterColumn group={group} key={group.id} />)}
        </div>
        <FooterLanguageRow />
        <div className="grid gap-7 xl:hidden">
          <FooterBrand />
          {footerGroups.map((group) => <FooterMobileGroup group={group} key={group.id} />)}
          <FooterMobileGroup group={{ id: "languages", title: "שפות", items: languageItems() }} />
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
        <Image alt="Navines" className="brand-logo h-6 w-auto object-contain" height={33} src="/brand/navines-wordmark-slim.png" width={176} />
      </Link>
      <strong className="mt-4 block text-lg font-semibold">{site.hebrewLegalName}</strong>
      <p className="mt-3 max-w-sm text-base leading-7" style={{ color: "var(--text-muted)" }}>חברת תוכנה ו־AI שמפתחת מערכות, אוטומציות, אתרים וכלים דיגיטליים לעסקים.</p>
      <p className="mt-3 text-sm font-medium" style={{ color: "var(--text-soft)" }}>{site.companyNumberLabel}</p>
      <p className="mt-1 text-sm" style={{ color: "var(--text-soft)" }}>{site.hebrewAddress}</p>
      <div className="footer-contact-stack mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
        <a className="footer-contact-link footer-contact-ltr" dir="ltr" href={site.phoneHref}><bdi>{site.phone}</bdi></a>
        <a className="footer-contact-link footer-contact-ltr" dir="ltr" href={site.emailHref}><bdi>{site.email}</bdi></a>
        <a className="english-tech footer-contact-link footer-contact-ltr footer-site-link" dir="ltr" href={site.internationalUrl} rel="noopener noreferrer" target="_blank"><bdi>NAVINES.COM</bdi></a>
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
        <span aria-hidden="true" className="footer-disclosure-state">{open ? "הסתר" : "הצג"}</span>
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

function FooterLanguageRow() {
  return (
    <nav aria-label="בחירת שפה" className="footer-language-row hidden xl:flex">
      <strong>נביא נס בעולם</strong>
      {languageItems().map((item) => <FooterLink item={item} key={item.href} />)}
    </nav>
  );
}

function languageItems(): FooterItem[] {
  return languageLinks.map((language) => ({ label: `${language.nativeName} (${language.shortLabel})`, href: language.href }));
}

function FooterCopyright() {
  return (
    <div className="footer-legal-signature mt-10 border-t pt-6" style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
      <div>
        <strong>{site.hebrewLegalName}</strong>
        <span>{site.companyNumberLabel}</span>
        <span>{site.hebrewAddress}</span>
      </div>
      <div>
        <span><bdi>© 2026</bdi> כל הזכויות שמורות</span>
      </div>
    </div>
  );
}

function LocalizedFooter({ locale, copy, showCta }: { locale: Exclude<LocaleSlug, "he">; copy: typeof localizedFooterCopy.de; showCta: boolean }) {
  const homeHref = `/${locale}`;
  const serviceItems = [
    { label: copy.services, href: `${homeHref}#services` },
    { label: copy.solutions, href: `${homeHref}#solutions` },
    { label: copy.tools, href: `${homeHref}/tools` },
    { label: copy.contact, href: `${homeHref}#contact` },
  ];
  return (
    <footer className="site-footer border-t" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {showCta ? <section className="mb-10 border-b pb-8" style={{ borderColor: "var(--border)" }}><h2 className="text-2xl font-semibold">{copy.ctaTitle}</h2><p className="mt-2 max-w-2xl" style={{ color: "var(--text-muted)" }}>{copy.ctaText}</p><div className="mt-5 flex flex-wrap gap-3"><a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">{copy.whatsapp}</a><a className="btn-secondary" href={site.emailHref}>{copy.email}</a></div></section> : null}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <section><Link href={homeHref}><Image alt="Navines" className="brand-logo h-6 w-auto" height={33} src="/brand/navines-wordmark-slim.png" width={176} /></Link><p className="mt-4 text-base leading-7" style={{ color: "var(--text-muted)" }}>{copy.description}</p></section>
          <FooterColumn group={{ id: "services", title: copy.services, items: serviceItems }} />
          <FooterColumn group={{ id: "languages", title: copy.languages, items: languageItems() }} />
          <section><h3 className="mb-3 text-base font-semibold">{copy.contact}</h3><div className="footer-contact-stack text-sm" style={{ color: "var(--text-muted)" }}><a className="footer-contact-link footer-contact-ltr" dir="ltr" href={site.phoneHref}><bdi>{site.phone}</bdi></a><a className="footer-contact-link footer-contact-ltr" dir="ltr" href={site.emailHref}><bdi>{site.email}</bdi></a><a className="english-tech footer-contact-link footer-contact-ltr footer-site-link" dir="ltr" href={site.internationalUrl} rel="noopener noreferrer" target="_blank"><bdi>NAVINES.COM</bdi></a><a className="footer-contact-link" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">{copy.whatsapp}</a></div></section>
        </div>
        <div className="mt-10 border-t pt-6 text-sm" style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>{copy.copyright}</div>
      </div>
    </footer>
  );
}
