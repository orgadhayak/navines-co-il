import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import { Inter, Noto_Sans_Hebrew } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { JsonLd } from "@/components/JsonLd";
import { localeFromPath } from "@/i18n/locales";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navines.co.il"),
  applicationName: "נביא נס ישראל בע״מ",
  title: {
    default: "נביא נס ישראל בע״מ | בית תוכנה, AI ותשתיות דיגיטליות",
    template: "%s | נביא נס ישראל בע״מ",
  },
  description: "נביא נס ישראל בע״מ מתכננת ומפתחת מערכות תוכנה, פתרונות בינה מלאכותית, אוטומציות, אתרים, מסחר דיגיטלי ותשתיות לעסקים.",
  keywords: ["נביא נס ישראל בע\"מ", "Navines", "בינה מלאכותית לעסקים", "אוטומציה", "בניית אתרים", "איקומרס", "תשתיות דיגיטליות", "קידום אורגני"],
  authors: [{ name: "נביא נס ישראל בע\"מ" }],
  creator: "נביא נס ישראל בע\"מ",
  publisher: "נביא נס ישראל בע\"מ",
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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const dynamic = "force-dynamic";

const skipLabels = {
  he: "דלגו לתוכן המרכזי",
  de: "Zum Hauptinhalt springen",
  jp: "本文へスキップ",
  ar: "تخطي إلى المحتوى الرئيسي",
  hi: "मुख्य सामग्री पर जाएँ",
  fr: "Aller au contenu principal",
  zh: "跳到主要内容",
};

const enableVercelAnalytics = process.env.VERCEL === "1";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const cookieStore = await cookies();
  const locale = localeFromPath(requestHeaders.get("x-Navines-pathname"));
  const pathname = requestHeaders.get("x-Navines-pathname") || "/";
  const initialTheme = cookieStore.get("navines-theme")?.value === "light" ? "light" : "dark";

  return (
    <html className={initialTheme === "dark" ? "theme-dark" : "theme-light"} dir={locale.dir} lang={locale.lang}>
      <head />
      <body className={`${hebrewFont.variable} ${latinFont.variable}`}>
        <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded-premium focus:bg-white focus:px-4 focus:py-3 focus:text-ink" href="#main">
          {skipLabels[locale.slug] || skipLabels.he}
        </a>
        <Header initialLocale={locale.slug} initialTheme={initialTheme} />
        <main id="main">{children}</main>
        <Footer locale={locale.slug} showCta={pathname !== "/"} />
        <FloatingContact locale={locale.slug} />
        <AnalyticsEvents />
        {enableVercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
