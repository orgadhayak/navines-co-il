import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.navines.co.il"),
  applicationName: "נבינס ישראל",
  title: {
    default: "נבינס ישראל בע״מ | AI, אוטומציה ותשתיות דיגיטליות",
    template: "%s | נבינס ישראל",
  },
  description: "נבינס ישראל בע״מ בונה מערכות AI, אתרים, אוטומציות, חנויות ותשתיות דיגיטליות לעסקים בישראל.",
  keywords: ["נבינס ישראל", "NAVINES", "AI לעסקים", "אוטומציה", "בניית אתרים", "איקומרס", "תשתיות דיגיטליות"],
  authors: [{ name: "נבינס ישראל בע״מ" }],
  creator: "נבינס ישראל בע״מ",
  publisher: "נבינס ישראל בע״מ",
  icons: {
    icon: [{ url: "/brand/navines-symbol.jpg", type: "image/jpeg" }],
    apple: [{ url: "/brand/navines-symbol.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "נבינס ישראל בע״מ | AI, אוטומציה ותשתיות דיגיטליות",
    description: "אתר NAVINES ישראל הרשמי: מערכות AI, אתרים, אוטומציה, איקומרס ותשתיות דיגיטליות לעסקים.",
    url: "https://www.navines.co.il",
    siteName: "נבינס ישראל",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "נבינס ישראל - תשתיות דיגיטליות חכמות" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "נבינס ישראל בע״מ | AI, אוטומציה ותשתיות דיגיטליות",
    description: "מערכות AI, אתרים, אוטומציה, איקומרס ותשתיות דיגיטליות לעסקים בישראל.",
    images: ["/og.svg"],
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
        <Analytics />
      </body>
    </html>
  );
}
