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
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contacts", href: "/contacts" },
  ],
  technologies: [
    { name: "Angular", path: "/tools/Angular.svg" },
    { name: "React", path: "/tools/React.svg" },
    { name: "Next.js", path: "/tools/Next.js.svg" },
    { name: "TypeScript", path: "/tools/Typescript.svg" },
    { name: "Tailwind CSS", path: "/tools/Tailwind.svg" },
    { name: "RxJS", path: "/tools/Rxjs.svg" },
    { name: "GSAP", path: "/tools/Gsap.svg" },
    { name: "Framer", path: "/tools/Framer.svg" },
    { name: "Figma", path: "/tools/Figma.svg" },
  ],
} as const;
