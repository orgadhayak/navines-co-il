import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import { Heebo } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { JsonLd } from "@/components/JsonLd";
import { localeFromPath } from "@/i18n/locales";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteFont = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-site",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navines.co.il"),
  applicationName: "נביא נס ישראל בע״מ",
  title: {
    default: "נביא נס ישראל בע״מ | בינה מלאכותית, אוטומציה ותשתיות דיגיטליות",
    template: "%s | נביא נס ישראל בע״מ",
  },
  description: "נביא נס ישראל בע״מ בונה מערכות בינה מלאכותית, אתרים, אוטומציות, חנויות ותשתיות דיגיטליות לעסקים בישראל.",
  keywords: ["נביא נס ישראל בע״מ", "NAVINES", "בינה מלאכותית לעסקים", "אוטומציה", "בניית אתרים", "איקומרס", "תשתיות דיגיטליות", "קידום אורגני"],
  authors: [{ name: "נביא נס ישראל בע״מ" }],
  creator: "נביא נס ישראל בע״מ",
  publisher: "נביא נס ישראל בע״מ",
  icons: {
    icon: [{ url: "/brand/navines-symbol.jpg", type: "image/jpeg" }],
    apple: [{ url: "/brand/navines-symbol.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "נביא נס ישראל בע״מ | בינה מלאכותית, אוטומציה ותשתיות דיגיטליות",
    description: "אתר נביא נס ישראל בע״מ הרשמי: מערכות בינה מלאכותית, אתרים, אוטומציה, איקומרס ותשתיות דיגיטליות לעסקים.",
    url: "https://www.navines.co.il",
    siteName: "נביא נס ישראל בע״מ",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/og-navines-israel.jpg", width: 1106, height: 746, alt: "נביא נס ישראל בע״מ, תשתיות דיגיטליות חכמות" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "נביא נס ישראל בע״מ | בינה מלאכותית, אוטומציה ותשתיות דיגיטליות",
    description: "מערכות בינה מלאכותית, אתרים, אוטומציה, איקומרס ותשתיות דיגיטליות לעסקים בישראל.",
    images: ["/og-navines-israel.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
  const locale = localeFromPath(requestHeaders.get("x-navines-pathname"));
  const initialTheme = cookieStore.get("navines-theme")?.value === "dark" ? "dark" : "light";

  return (
    <html className={initialTheme === "dark" ? "theme-dark" : "theme-light"} dir={locale.dir} lang={locale.lang}>
      <head />
      <body className={siteFont.variable}>
        <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded-premium focus:bg-white focus:px-4 focus:py-3 focus:text-ink" href="#main">
          {skipLabels[locale.slug] || skipLabels.he}
        </a>
        <Header initialLocale={locale.slug} initialTheme={initialTheme} />
        <main id="main">{children}</main>
        <Footer locale={locale.slug} />
        <FloatingContact locale={locale.slug} />
        <AnalyticsEvents />
        {enableVercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
