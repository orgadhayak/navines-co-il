import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Hebrew } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LocaleDocument } from "@/components/LocaleDocument";
import type { LocaleMeta } from "@/i18n/locales";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";

const hebrewFont = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  display: "swap",
  variable: "--font-hebrew",
});

const latinFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-latin",
});

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://www.navines.co.il"),
  applicationName: "נביא נס ישראל בע״מ",
  title: {
    default: "נביא נס ישראל בע״מ | בית תוכנה, AI ותשתיות דיגיטליות",
    template: "%s | נביא נס ישראל בע״מ",
  },
  description: "נביא נס ישראל בע״מ מתכננת ומפתחת מערכות תוכנה, פתרונות בינה מלאכותית, אוטומציות, אתרים, מסחר דיגיטלי ותשתיות לעסקים.",
  keywords: ["נביא נס ישראל בע\"מ", "Navines", "בינה מלאכותית לעסקים", "אוטומציה", "בניית אתרים", "איקומרס", "תשתיות דיגיטליות", "קידום אורגני"],
  authors: [{ name: "נביא נס ישראל בע\"מ" }],
  creator: "נביא נס ישראל בע״מ",
  publisher: "נביא נס ישראל בע״מ",
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg", sizes: "512x512" }],
    shortcut: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg", type: "image/jpeg", sizes: "512x512" }],
  },
  openGraph: {
    title: "נביא נס ישראל בע״מ | בית תוכנה, AI ותשתיות דיגיטליות",
    description: "האתר הרשמי של נביא נס ישראל בע״מ: מערכות תוכנה, בינה מלאכותית, אוטומציה ותשתיות דיגיטליות לעסקים.",
    url: "https://www.navines.co.il",
    siteName: "נביא נס ישראל בע״מ",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/og-navines-israel.jpg", width: 1106, height: 746, alt: "נביא נס, תשתיות דיגיטליות חכמות" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "נביא נס ישראל בע״מ | בית תוכנה, AI ותשתיות דיגיטליות",
    description: "מערכות בינה מלאכותית, אתרים, אוטומציה, איקומרס ותשתיות דיגיטליות לעסקים בישראל.",
    images: ["/og-navines-israel.jpg"],
  },
};

export const siteViewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const enableVercelAnalytics = process.env.VERCEL === "1";

export function SiteDocument({ children, locale }: Readonly<{ children: React.ReactNode; locale: LocaleMeta }>) {
  return (
    <html className="theme-dark" dir={locale.dir} lang={locale.lang}>
      <body className={`${hebrewFont.variable} ${latinFont.variable}`}>
        <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <LocaleDocument />
        <Header initialLocale={locale.slug} initialTheme="dark" />
        <main id="main">{children}</main>
        <Footer locale={locale.slug} showCta={false} />
        <FloatingContact locale={locale.slug} />
        <AnalyticsEvents />
        {enableVercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
