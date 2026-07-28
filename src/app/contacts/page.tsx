import type { Metadata } from "next";

import { ContactsContent } from "@/app/contacts/contacts-content";
import { siteConfig } from "@/config/site";

const description =
  "Get in touch with Luigi Avitabile for frontend projects, collaborations, or to start a conversation about interfaces and products.";

export const metadata: Metadata = {
  title: "Contacts",
  description,
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: `Contacts | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/contacts`,
  },
};

export default function ContactsPage() {
  return <ContactsContent />;
}
