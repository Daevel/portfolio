export type Locale = "it" | "en";

export type Translation = {
  skipToContent: string;
  navigation: {
    home: string;
    about: string;
    projects: string;
    contacts: string;
  };
  home: {
    coreTechnologies: string;
    h1Title: string;
    pPresentation: string;
    viewProjects: string;
    contactMe: string;
    currentFocus: string;
    modernFrontendArchitecture: string;
    currentFocusDescription: string;
    featuredProjects: string;
    featuredProjectsDescription: string;
    allProjects: string;
    readCaseStudy: string;
    seeMyWorks: string;
    contacts: string;
    contactCopiedSuccess: string;
    contactForm: {
      placeholder: {
        fullName: string;
        email: string;
        description: string;
      };
      fullName: string;
      email: string;
      description: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    ctaTitle: string;
    ctaDescription: string;
    letsTalk: string;
  };
  about: {
    sectionLabel: string;
    h1Title: string;
    introduction: string;
    frontendArchitecture: string;
    frontendArchitectureDescription: string;
    userExperience: string;
    userExperienceDescription: string;
    engineeringQuality: string;
    engineeringQualityDescription: string;
  };
  contacts: {
    sectionLabel: string;
    h1Title: string;
    introduction: string;
    email: string;
    github: string;
    linkedin: string;
  };
  projects: {
    sectionLabel: string;
    h1Title: string;
    introduction: string;
    readCaseStudy: string;
  };
  projectDetail: {
    backToProjects: string;
    caseStudyLabel: string;
    caseStudyStructure: string;
    caseStudyStructureDescription: string;
    technologies: string;
    repository: string;
    livePreview: string;
    projectNotFound: string;
  };
  privacyPolicy: {
    sectionLabel: string;
    h1Title: string;
    introduction: string;
    dataControllerTitle: string;
    dataControllerDescription: string;
    dataProcessedTitle: string;
    dataProcessedDescription: string;
    purposeTitle: string;
    purposeDescription: string;
    cookiesTitle: string;
    cookiesDescription: string;
    thirdPartiesTitle: string;
    thirdPartiesDescription: string;
    rightsTitle: string;
    rightsDescription: string;
    contactTitle: string;
    contactDescription: string;
    lastUpdated: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    backHome: string;
  };
  footer: {
    builtWith: string;
    privacyPolicy: string;
  };
  metadata: {
    aboutDescription: string;
    contactsDescription: string;
    projectsDescription: string;
    privacyPolicyDescription: string;
  };
};
