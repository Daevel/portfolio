import type { Metadata } from "next";

import { PrivacyPolicyContent } from "@/components/privacy-policy-content";
import { siteConfig } from "@/config/site";
import en from "@/i18n/en.json";

const description = en.metadata.privacyPolicyDescription;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
