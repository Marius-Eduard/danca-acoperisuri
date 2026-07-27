import { siteConfig } from "@/lib/site";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: "RO",
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.location.areaServed,
    },
    knowsAbout: siteConfig.services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii acoperișuri",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "ro",
    description: siteConfig.description,
  };
}
