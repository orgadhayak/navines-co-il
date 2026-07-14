import Link from "next/link";
import { languageLinks, type LocaleSlug } from "@/i18n/locales";
import { site } from "@/data/site";

const footerCopy: Record<LocaleSlug, {
  description: string;
  services: string;
  products: string;
  contact: string;
  languages: string;
  legal: string;
  ctaTitle: string;
  ctaText: string;
  whatsapp: string;
  email: string;
  phone: string;
}> = {
  he: {
    description: "חברת תוכנה ו-AI ישראלית שבונה אתרים, מערכות, אוטומציות וכלים דיגיטליים לעסקים שרוצים לעבוד ברור, מהיר ומסודר יותר.",
    services: "שירותים מרכזיים",
    products: "מוצרים ותובנות",
    contact: "יצירת קשר",
    languages: "NAVINES בעולם",
    legal: "משפטי",
    ctaTitle: "רוצים להבין מה נכון לעסק שלכם?",
    ctaText: "שלחו הודעה קצרה ונכוון אתכם לשירות, מוצר או שיחה שמתאימים לצורך האמיתי.",
    whatsapp: "דברו איתנו ב-WhatsApp",
    email: "שליחת email",
    phone: "טלפון",
  },
  de: {
    description: "Israelisches Software- und KI-Unternehmen für praktische digitale Systeme, Automatisierung und Datenwerkzeuge für Unternehmen.",
    services: "Leistungen",
    products: "Produkte und Einblicke",
    contact: "Kontakt",
    languages: "Sprachen",
    legal: "Rechtliches",
    ctaTitle: "Möchten Sie ein konkretes digitales Projekt besprechen?",
    ctaText: "Senden Sie eine kurze Nachricht. Wir helfen, den richtigen nächsten Schritt zu klären.",
    whatsapp: "Über WhatsApp schreiben",
    email: "E-Mail senden",
    phone: "Telefon",
  },
  jp: {
    description: "イスラエル発のソフトウェアとAIの会社として、実用的なシステム、自動化、データ活用を支援します。",
    services: "サービス",
    products: "製品とインサイト",
    contact: "お問い合わせ",
    languages: "言語",
    legal: "法務情報",
    ctaTitle: "デジタルプロジェクトについて相談しますか。",
    ctaText: "短いメッセージをお送りください。次に何を確認すべきか整理します。",
    whatsapp: "WhatsAppで相談",
    email: "メールを送る",
    phone: "電話",
  },
  ar: {
    description: "شركة إسرائيلية للبرمجيات والذكاء الاصطناعي تبني أنظمة عملية وأتمتة وأدوات بيانات للشركات.",
    services: "الخدمات",
    products: "المنتجات والمقالات",
    contact: "تواصل",
    languages: "اللغات",
    legal: "روابط قانونية",
    ctaTitle: "هل تريدون مناقشة مشروع رقمي عملي؟",
    ctaText: "أرسلوا رسالة قصيرة وسنساعدكم في فهم الخطوة المناسبة.",
    whatsapp: "تواصل عبر WhatsApp",
    email: "إرسال بريد إلكتروني",
    phone: "هاتف",
  },
  hi: {
    description: "इज़राइल की software और AI कंपनी, जो व्यवसायों के लिए व्यावहारिक systems, automation और data tools बनाती है।",
    services: "सेवाएँ",
    products: "उत्पाद और लेख",
    contact: "संपर्क",
    languages: "भाषाएँ",
    legal: "कानूनी",
    ctaTitle: "किसी डिजिटल प्रोजेक्ट पर बात करनी है?",
    ctaText: "एक छोटा संदेश भेजें। हम सही अगला कदम समझने में मदद करेंगे।",
    whatsapp: "WhatsApp पर बात करें",
    email: "ईमेल भेजें",
    phone: "फोन",
  },
  fr: {
    description: "Entreprise israélienne de logiciel et d’IA qui conçoit des systèmes numériques, automatisations et outils de données utiles aux entreprises.",
    services: "Services",
    products: "Produits et articles",
    contact: "Contact",
    languages: "Langues",
    legal: "Mentions légales",
    ctaTitle: "Vous voulez discuter d’un projet numérique concret ?",
    ctaText: "Envoyez un court message. Nous vous aiderons à clarifier la bonne prochaine étape.",
    whatsapp: "Écrire sur WhatsApp",
    email: "Envoyer un email",
    phone: "Téléphone",
  },
  zh: {
    description: "来自以色列的软件与 AI 公司，为企业构建实用的数字系统、自动化流程和数据工具。",
    services: "服务",
    products: "产品与洞察",
    contact: "联系",
    languages: "语言",
    legal: "法律信息",
    ctaTitle: "想讨论一个实际的数字项目？",
    ctaText: "发送一条简短消息，我们会帮助您判断合适的下一步。",
    whatsapp: "通过 WhatsApp 联系",
    email: "发送邮件",
    phone: "电话",
  },
};

const serviceLinks = [
  ["AI ואוטומציה", "/services/ai-automation"],
  ["אתרים ומערכות", "/services/web-development"],
  ["TalkToData", "/services/chatgpt-business-data"],
  ["צ׳ט AI לאתרים", "/services/ai-chat-for-websites"],
  ["תמיכה טכנית וסייבר", "/services/technical-support-cyber-networks"],
  ["תהליכים משפטיים וציות", "/services/legal-operations-technology"],
  ["טכנולוגיה לתיקי תעבורה", "/services/traffic-case-technology"],
  ["כל השירותים", "/services"],
];

const productLinks = [
  ["TalkToData", "https://talktodata.navines.com"],
  ["NAVINES Beacon", "https://beacon.navines.com"],
  ["Products", "/products"],
  ["Blog", "/blog"],
];

const legalLinks = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Accessibility", "/accessibility"],
];

const localizedFooterLinks: Record<Exclude<LocaleSlug, "he">, { services: string[][]; products: string[][] }> = {
  de: {
    services: [["Leistungen", "/de#services"], ["Lösungen", "/de#solutions"], ["Kontakt", "/de#contact"]],
    products: [["Einblicke", "/de#insights"], ["NAVINES.com", site.internationalUrl]],
  },
  jp: {
    services: [["サービス", "/jp#services"], ["ソリューション", "/jp#solutions"], ["お問い合わせ", "/jp#contact"]],
    products: [["インサイト", "/jp#insights"], ["NAVINES.com", site.internationalUrl]],
  },
  ar: {
    services: [["الخدمات", "/ar#services"], ["الحلول", "/ar#solutions"], ["تواصل", "/ar#contact"]],
    products: [["المقالات", "/ar#insights"], ["NAVINES.com", site.internationalUrl]],
  },
  hi: {
    services: [["सेवाएँ", "/hi#services"], ["समाधान", "/hi#solutions"], ["संपर्क", "/hi#contact"]],
    products: [["लेख", "/hi#insights"], ["NAVINES.com", site.internationalUrl]],
  },
  fr: {
    services: [["Services", "/fr#services"], ["Solutions", "/fr#solutions"], ["Contact", "/fr#contact"]],
    products: [["Articles", "/fr#insights"], ["NAVINES.com", site.internationalUrl]],
  },
  zh: {
    services: [["服务", "/zh#services"], ["解决方案", "/zh#solutions"], ["联系", "/zh#contact"]],
    products: [["洞察", "/zh#insights"], ["NAVINES.com", site.internationalUrl]],
  },
};

export function Footer({ locale = "he" }: { locale?: LocaleSlug }) {
  const copy = footerCopy[locale] || footerCopy.he;
  const isHebrew = locale === "he";
  const localizedLinks = isHebrew ? null : localizedFooterLinks[locale as Exclude<LocaleSlug, "he">];

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 rounded-lg border p-6 lg:grid-cols-[1fr_auto]" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div>
            <h2 className="text-2xl font-semibold">{copy.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-base" style={{ color: "var(--text-muted)" }}>{copy.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a className="btn-primary" href={site.whatsappHref} rel="noopener noreferrer" target="_blank">{copy.whatsapp}</a>
            <a className="btn-secondary" href={site.emailHref}>{copy.email}</a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="lg:col-span-1">
            <Link className="inline-flex items-center" href={isHebrew ? "/" : `/${locale}`}>
              <img alt="NAVINES" className="brand-logo h-5 w-auto object-contain" src="/brand/navines-wordmark-slim.png" />
            </Link>
            <strong className="mt-4 block text-lg font-semibold">{isHebrew ? site.hebrewLegalName : "NAVINES"}</strong>
            <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>{copy.description}</p>
            {isHebrew ? <p className="mt-3 text-sm font-medium" style={{ color: "var(--text-muted)" }}>{site.companyNumberLabel}</p> : null}
          </div>

          <FooterColumn title={copy.services} items={isHebrew ? serviceLinks : localizedLinks?.services || []} />
          <FooterColumn title={copy.products} items={isHebrew ? productLinks : localizedLinks?.products || []} />
          <FooterLanguageColumn title={copy.languages} />

          <div>
            <h3 className="mb-4 text-base font-semibold">{copy.contact}</h3>
            <div className="grid gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <span>NAVINES</span>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
              <a href={site.whatsappHref} rel="noopener noreferrer" target="_blank">{copy.whatsapp}</a>
            </div>
            <div className="mt-5 grid gap-2">
              {isHebrew ? legalLinks.map(([label, href]) => (
                <Link className="text-sm transition hover:text-sky-700" href={href} key={href} style={{ color: "var(--text-muted)" }}>{label}</Link>
              )) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t pt-6 text-sm" style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
          <span>© 2026 NAVINES. All rights reserved.</span>
          <a href={site.internationalUrl} rel="noopener noreferrer" target="_blank">NAVINES.com</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold">{title}</h3>
      <div className="grid gap-2">
        {items.map(([label, href]) => (
          href.startsWith("http") ? (
            <a className="text-sm transition hover:text-sky-700" href={href} key={`${href}-${label}`} rel="noopener noreferrer" target="_blank" style={{ color: "var(--text-muted)" }}>
              {label}
            </a>
          ) : (
            <Link className="text-sm transition hover:text-sky-700" href={href} key={`${href}-${label}`} style={{ color: "var(--text-muted)" }}>
              {label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

function FooterLanguageColumn({ title }: { title: string }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold">{title}</h3>
      <div className="grid gap-2">
        {languageLinks.map((language) => {
          const content = (
            <span className="inline-flex items-center gap-2">
              <span className="english-tech text-xs font-semibold">{language.shortLabel}</span>
              <span>{language.nativeName}</span>
            </span>
          );
          return language.href.startsWith("http") ? (
            <a className="text-sm transition hover:text-sky-700" href={language.href} key={language.nativeName} rel="noopener noreferrer" target="_blank" style={{ color: "var(--text-muted)" }}>
              {content}
            </a>
          ) : (
            <Link className="text-sm transition hover:text-sky-700" href={language.href} key={language.nativeName} style={{ color: "var(--text-muted)" }}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
