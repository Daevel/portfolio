export const siteConfig = {
  name: "Luigi Avitabile",
  role: "Frontend Software Engineer",
  title: "Luigi Avitabile | Frontend Software Engineer",
  description:
    "Personal portfolio of Luigi Avitabile, Frontend Software Engineer specializing in React, Angular, and modern web interfaces.",
  url: "https://example.com",
  email: "luigi.avitabile5@gmail.com",
  links: {
    github: "https://github.com/daevel",
    linkedin: "https://www.linkedin.com/in/luigi-avitabile/",
  },
  navigation: [
    { key: "home" as const, href: "/" },
    { key: "about" as const, href: "/about" },
    { key: "projects" as const, href: "/projects" },
    { key: "contacts" as const, href: "/contacts" },
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
