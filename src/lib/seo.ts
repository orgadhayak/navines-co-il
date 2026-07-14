import type { Metadata } from "next";
import { site } from "@/data/site";
import { landingAlternates } from "@/i18n/locales";

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
  image = "/og-navines-israel.jpg",
  imageAlt = 'נביא נס ישראל בע״מ, תשתיות דיגיטליות חכמות',
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const pageTitle = `${title} | ${site.name}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages:
        path === ""
          ? landingAlternates
          : {
              "he-IL": url,
            },
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "he_IL",
      type,
      images: [{ url: image, width: 1106, height: 746, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.hebrewLegalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.internationalUrl],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.hebrewLegalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.hebrewAddress,
    addressLocality: "פתח תקווה",
    addressCountry: "IL",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "he-IL",
};

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
