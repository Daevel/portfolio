import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";
import { useTranslation } from "@/i18n/context";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const { t } = useTranslation();
  const {
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
  } = useContactForm({
    instagram: t.contactSection.instagram,
    linkedin: t.contactSection.linkedin,
    github: t.contactSection.github,
  });

  return (
    <section className={className} data-header-theme="light">
      <Container className="max-w-none">
        <SectionReveal>
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tighter">
            {t.home.contacts.toUpperCase()}
          </h2>

          <div className="mt-6 grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 xl:gap-32">
            {/* Contact links and social links */}
            <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
              {contactLinks.map((contact) => (
                <div className="flex flex-col" key={contact.key}>
                  {copiedContact === contact.key ? (
                    <p className="w-fit max-w-full text-left text-[clamp(1.5rem,7.2vw,3rem)] font-medium leading-[1.05] tracking-tighter whitespace-nowrap text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring">
                      {t.home.contactCopiedSuccess.toUpperCase()}!
                    </p>
                  ) : (
                    <button
                      className="w-fit max-w-full text-left text-[clamp(1.5rem,7.2vw,3rem)] font-medium leading-[1.05] tracking-tighter whitespace-nowrap text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                      onClick={() => copyContact(contact)}
                      type="button"
                    >
                      {contact.label.toUpperCase()}
                    </button>
                  )}
                </div>
              ))}
              {socialLinks.map((link) => (
                <a
                  className="w-fit max-w-full text-left text-[clamp(1.5rem,7.2vw,3rem)] font-medium leading-[1.05] tracking-tighter whitespace-nowrap text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                  href={link.href}
                  key={link.key}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="mb-10 flex min-w-0 flex-col">
              <form ref={formRef} className="grid gap-6" noValidate onSubmit={sendEmail}>
                <div className="grid gap-2">
                  <label
                    className="font-medium text-lg tracking-tighter text-primary"
                    htmlFor="full-name"
                  >
                    {t.home.contactForm.fullName.toUpperCase()}
                  </label>
                  <input
                    aria-describedby={fieldErrors.fullName ? "full-name-error" : undefined}
                    aria-invalid={fieldErrors.fullName}
                    className="min-h-14 w-full min-w-0 bg-background py-2 text-[clamp(2rem,9vw,2.25rem)] font-medium leading-[1.25] outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="full-name"
                    name="name"
                    onChange={(event) => {
                      setFullName(event.target.value);
                      setFieldErrors((currentErrors) => ({
                        ...currentErrors,
                        fullName: currentErrors.fullName && event.target.value.trim().length < 2,
                      }));
                    }}
                    required
                    type="text"
                    value={fullName}
                    placeholder={t.home.contactForm.placeholder.fullName}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-destructive text-md tracking-tight" id="full-name-error">
                      {t.home.contactForm.validation.fullName.toUpperCase()}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <label
                    className="font-medium text-lg tracking-tighter text-primary"
                    htmlFor="email"
                  >
                    {t.home.contactForm.email.toUpperCase()}
                  </label>
                  <input
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    aria-invalid={fieldErrors.email}
                    className="min-h-14 w-full min-w-0 bg-background py-2 text-[clamp(2rem,9vw,2.25rem)] font-medium leading-[1.25] outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setFieldErrors((currentErrors) => ({
                        ...currentErrors,
                        email: false,
                      }));
                    }}
                    required
                    type="email"
                    value={email}
                    placeholder={t.home.contactForm.placeholder.email}
                  />
                  {fieldErrors.email && (
                    <p className="text-destructive text-md tracking-tight" id="email-error">
                      {t.home.contactForm.validation.email.toUpperCase()}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <label
                    className="font-medium text-lg tracking-tighter text-primary"
                    htmlFor="message"
                  >
                    {t.home.contactForm.message.toUpperCase()}
                  </label>
                  <textarea
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    aria-invalid={fieldErrors.message}
                    className="max-h-80 min-h-40 w-full min-w-0 resize-y overflow-y-auto overscroll-contain bg-background py-3 text-[clamp(2rem,9vw,2.25rem)] font-medium leading-[1.25] outline-none transition-colors [-webkit-overflow-scrolling:touch] focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="message"
                    maxLength={messageMaxLength}
                    name="description"
                    onChange={(event) => {
                      setMessage(event.target.value);
                      setFieldErrors((currentErrors) => ({
                        ...currentErrors,
                        message: false,
                      }));
                    }}
                    required
                    value={message}
                    placeholder={t.home.contactForm.placeholder.message}
                  />
                  {fieldErrors.message && (
                    <p className="text-destructive text-md tracking-tight" id="message-error">
                      {t.home.contactForm.validation.message.toUpperCase()}
                    </p>
                  )}
                  <p className="text-right text-muted-foreground text-sm">
                    {message.length}/{messageMaxLength}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium tracking-tighter text-lg text-primary">
                    {t.home.contactForm.consent.toUpperCase()}
                  </p>
                  <div className="flex flex-row items-center gap-3">
                    <input
                      checked={agreedToPrivacy}
                      className="size-5 shrink-0 accent-primary"
                      id="checkbox-agreement"
                      onChange={(event) => setAgreedToPrivacy(event.target.checked)}
                      required
                      type="checkbox"
                    />
                    <label
                      className="text-md tracking-tight text-secondary"
                      htmlFor="checkbox-agreement"
                    >
                      {t.home.contactForm.privacyConsentPrefix.toUpperCase()}
                      <Link
                        className="underline underline-offset-2 text-secondary"
                        href="/privacy-policy"
                      >
                        {t.footer.privacyPolicy.toUpperCase()}
                      </Link>
                      {t.home.contactForm.privacyConsentSuffix.toUpperCase()}
                    </label>
                  </div>
                </div>
                <Button
                  className="h-auto min-h-18 w-full whitespace-normal border-4 border-primary bg-white px-4 py-4 text-[clamp(2rem,8vw,3rem)] leading-none tracking-tighter text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-5 sm:min-h-20"
                  disabled={isSending || !agreedToPrivacy}
                  type="submit"
                >
                  {isSending
                    ? t.home.contactForm.sending.toUpperCase()
                    : t.home.contactForm.submit.toUpperCase()}
                </Button>
                {formStatus === "success" && (
                  <p className="text-primary text-sm">{t.home.contactForm.success.toUpperCase()}</p>
                )}
                {formStatus === "error" && (
                  <p className="text-destructive text-md tracking-tight">
                    {t.home.contactForm.error.toUpperCase()}
                  </p>
                )}
              </form>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
