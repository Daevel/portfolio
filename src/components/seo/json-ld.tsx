import { siteConfig } from "@/config/site";

type JsonLdPersonProps = {
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
  email?: string;
};

export function JsonLdPerson({
  jobTitle = siteConfig.role,
  url = siteConfig.url,
  sameAs = Object.values(siteConfig.links),
  email = siteConfig.email,
}: JsonLdPersonProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    jobTitle,
    url,
    email,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressCountry: "IT",
    },
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}

type JsonLdWebSiteProps = {
  url?: string;
  name?: string;
  description?: string;
};

export function JsonLdWebSite({
  url = siteConfig.url,
  name = siteConfig.name,
  description = siteConfig.description,
}: JsonLdWebSiteProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}

type JsonLdProjectProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  technologies?: string[];
};

export function JsonLdProject({
  title,
  description,
  url,
  image,
  technologies,
}: JsonLdProjectProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url,
    ...(image && { image: `${siteConfig.url}${image}` }),
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    ...(technologies &&
      technologies.length > 0 && {
        keywords: technologies.join(", "),
      }),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
