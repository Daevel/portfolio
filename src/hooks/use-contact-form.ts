import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";

const messageMaxLength = 200;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactLinks = [{ key: "email", label: siteConfig.email, value: siteConfig.email }] as const;

type SocialLinkLabels = {
  linkedin: string;
  github: string;
};

export function useContactForm(socialLinkLabels: SocialLinkLabels) {
  const formRef = useRef<HTMLFormElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ fullName: false, email: false, message: false });
  const [copiedContact, setCopiedContact] = useState<(typeof contactLinks)[number]["key"] | null>(
    null,
  );
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const socialLinks = [
    { key: "linkedin", label: socialLinkLabels.linkedin, href: siteConfig.links.linkedin },
    { key: "github", label: socialLinkLabels.github, href: siteConfig.links.github },
  ] as const;

  const copyContact = async (contact: (typeof contactLinks)[number]) => {
    await navigator.clipboard.writeText(contact.value);
    setCopiedContact(contact.key);
    setTimeout(() => setCopiedContact(null), 3000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const nextFieldErrors = {
      fullName: fullName.trim().length < 2,
      email: !emailRegex.test(email.trim()),
      message: message.trim().length === 0,
    };

    setFieldErrors(nextFieldErrors);

    if (nextFieldErrors.fullName || nextFieldErrors.email || nextFieldErrors.message) return;

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
      setFullName("");
      setEmail("");
      setMessage("");
      setFieldErrors({ fullName: false, email: false, message: false });
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
    fullName,
    setFullName,
    email,
    setEmail,
    message,
    setMessage,
    fieldErrors,
    setFieldErrors,
    copiedContact,
    isSending,
    formStatus,
    agreedToPrivacy,
    setAgreedToPrivacy,
    contactLinks,
    socialLinks,
    messageMaxLength,
    copyContact,
    sendEmail,
  };
}
