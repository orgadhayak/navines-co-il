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
  title: {
    default: "NAVINES ישראל | AI, אוטומציה ותשתיות דיגיטליות",
    template: "%s | NAVINES ישראל",
  },
  description: "נבינס ישראל בע״מ בונה מערכות AI, אתרים, אוטומציות, חנויות ותשתיות דיגיטליות לעסקים בישראל.",
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
