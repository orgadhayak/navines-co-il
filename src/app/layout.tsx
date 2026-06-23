import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

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
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html dir="rtl" lang="he">
      <body>
        <JsonLd data={[organizationSchema, localBusinessSchema, websiteSchema]} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded-premium focus:bg-white focus:px-4 focus:py-3 focus:text-ink" href="#main">
          דלגו לתוכן המרכזי
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
