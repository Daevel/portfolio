import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/use-contact-form";
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
    description,
    setDescription,
    fieldErrors,
    setFieldErrors,
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
  } = useContactForm();

  return (
    <section className={className}>
      <Container className="max-w-none">
        <SectionReveal>
          <h2 className="font-semibold tracking-tighter sm:text-2xl">
            {t.home.contacts.toUpperCase()}
          </h2>

          <div className="flex flex-row mt-6 gap-96">
            {/* Contact links and social links */}
            <div className="flex flex-col w-full gap-5">
              {contactLinks.map((contact) => (
                <div className="flex flex-col" key={contact.key}>
                  {copiedContact === contact.key ? (
                    <p className="w-fit text-left font-medium text-5xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring tracking-tighter">
                      {t.home.contactCopiedSuccess.toUpperCase()}!
                    </p>
                  ) : (
                    <button
                      className="w-fit tracking-tighter text-left font-medium text-5xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
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
                  className="w-fit tracking-tighter text-left font-medium text-5xl text-primary underline decoration-primary/40 underline-offset-8 transition-colors hover:text-secondary hover:decoration-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
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
            <div className="flex flex-col w-full mb-10">
              <form ref={formRef} className="grid gap-6" noValidate onSubmit={sendEmail}>
                <div className="grid gap-2">
                  <label
                    className="font-medium tracking-tighter text-lg text-primary"
                    htmlFor="full-name"
                  >
                    {t.home.contactForm.fullName.toUpperCase()}
                  </label>
                  <input
                    aria-describedby={fieldErrors.fullName ? "full-name-error" : undefined}
                    aria-invalid={fieldErrors.fullName}
                    className="min-h-14 py-2 text-4xl font-medium leading-[1.2] bg-background outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
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
                    <p className="text-destructive text-sm" id="full-name-error">
                      {t.home.contactForm.validation.fullName.toUpperCase()}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <label
                    className="font-medium tracking-tighter text-lg text-primary"
                    htmlFor="email"
                  >
                    {t.home.contactForm.email.toUpperCase()}
                  </label>
                  <input
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    aria-invalid={fieldErrors.email}
                    className="min-h-14 py-2 bg-background text-4xl font-medium leading-[1.2] outline-none transition-colors focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
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
                    <p className="text-destructive text-sm" id="email-error">
                      {t.home.contactForm.validation.email.toUpperCase()}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <label
                    className="font-medium tracking-tighter text-lg text-primary"
                    htmlFor="description"
                  >
                    {t.home.contactForm.description.toUpperCase()}
                  </label>
                  <textarea
                    className="max-h-80 min-h-40 resize-y overflow-y-auto overscroll-contain py-3 bg-background text-4xl font-medium leading-[1.2] outline-none transition-colors [-webkit-overflow-scrolling:touch] focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    id="description"
                    maxLength={descriptionMaxLength}
                    name="description"
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    value={description}
                    placeholder={t.home.contactForm.placeholder.description}
                  />
                  <p className="text-right text-muted-foreground text-sm">
                    {description.length}/{descriptionMaxLength}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium tracking-tighter text-lg text-primary">
                    {t.home.contactForm.consent.toUpperCase()}
                  </p>
                  <div className="flex flex-row items-center gap-3">
                    <input
                      checked={agreedToPrivacy}
                      className="size-5 accent-primary"
                      id="checkbox-agreement"
                      onChange={(event) => setAgreedToPrivacy(event.target.checked)}
                      required
                      type="checkbox"
                    />
                    <label
                      className="text-sm tracking-tight text-primary"
                      htmlFor="checkbox-agreement"
                    >
                      {t.home.contactForm.privacyConsentPrefix}
                      <Link
                        className="underline underline-offset-2 text-secondary"
                        href="/privacy-policy"
                      >
                        {t.footer.privacyPolicy}
                      </Link>
                      {t.home.contactForm.privacyConsentSuffix}
                    </label>
                  </div>
                </div>
                <Button
                  className="h-20 tracking-tighter w-full border-4 border-primary bg-white text-3xl text-primary transition-colors hover:bg-primary hover:text-white hover:underline hover:underline-offset-5"
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
                  <p className="text-destructive text-sm">
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
