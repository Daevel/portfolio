export const siteConfig = {
  name: "Luigi Avitabile",
  role: "Frontend Software Engineer",
  title: "Luigi Avitabile | Frontend Software Engineer",
  description:
    "Portfolio personale di Luigi Avitabile, Frontend Software Engineer specializzato in React, Angular e interfacce web moderne.",
  url: "https://example.com",
  email: "hello@example.com",
  links: {
    github: "https://github.com/luigiavitabile",
    linkedin: "https://www.linkedin.com/in/luigiavitabile",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contacts", href: "/contacts" },
  ],
  technologies: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Accessibility"],
} as const;
