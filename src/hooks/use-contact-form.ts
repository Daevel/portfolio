import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";

const descriptionMaxLength = 200;

const contactLinks = [{ key: "email", label: siteConfig.email, value: siteConfig.email }] as const;

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin },
  { key: "github", label: "Github", href: siteConfig.links.github },
] as const;

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [description, setDescription] = useState("");
  const [copiedContact, setCopiedContact] = useState<(typeof contactLinks)[number]["key"] | null>(
    null,
  );
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const copyContact = async (contact: (typeof contactLinks)[number]) => {
    await navigator.clipboard.writeText(contact.value);
    setCopiedContact(contact.key);
    setTimeout(() => setCopiedContact(null), 3000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFormStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
      );
      setFormStatus("success");
      formRef.current.reset();
      setDescription("");
      setAgreedToPrivacy(false);
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    } finally {
      setIsSending(false);
    }
  };

  return {
    formRef,
    description,
    setDescription,
    copiedContact,
    isSending,
    formStatus,
    agreedToPrivacy,
    setAgreedToPrivacy,
    contactLinks,
    socialLinks,
    descriptionMaxLength,
    copyContact,
    sendEmail,
  };
}
