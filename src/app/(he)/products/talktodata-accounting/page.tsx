import { AccountingPromo } from "@/components/AccountingPromo";
import { JsonLd } from "@/components/JsonLd";
import { accountingPlugin } from "@/data/talktodata";
import { site } from "@/data/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "לדבר עם תוכנת החשבוניות ב־ChatGPT | נביא נס",
  description: "חפשו מסמכים ושאלו על נתוני תוכנת החשבוניות בעברית. פלאג לקריאה בלבד דרך TalkToData, עם חיבור לפי ספק והרשאות ובדיקת חיבורים פרטיים לפי הצורך.",
  path: "/products/talktodata-accounting",
});

export default function AccountingPage() {
  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: accountingPlugin.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: accountingPlugin.description,
      url: `${site.url}/products/talktodata-accounting`,
      installUrl: accountingPlugin.href,
      publisher: { "@id": `${site.url}/#organization`, name: site.legalName },
    }} />
    <JsonLd data={breadcrumbSchema([{ name: "כלים ומוצרים", href: "/products" }, { name: accountingPlugin.name, href: "/products/talktodata-accounting" }])} />
    <AccountingPromo full />
  </>;
}
