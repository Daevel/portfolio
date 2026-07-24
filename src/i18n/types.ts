export type Locale = "it" | "en";

export type Translation = {
  skipToContent: string;
  navigation: {
    home: string;
    about: string;
    projects: string;
    contacts: string;
    menu: string;
  };
  home: {
    heroTitle: string;
    coreTechnologies: string;
    seeMyWorks: string;
    contacts: string;
    contactCopiedSuccess: string;
    contactForm: {
      placeholder: {
        fullName: string;
        email: string;
        message: string;
      };
      fullName: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      validation: {
        fullName: string;
        email: string;
        message: string;
      };
      consent: string;
      privacyConsentPrefix: string;
      privacyConsentSuffix: string;
    };
  };
  about: {
    h1Title: string;
    introduction: string;
    frontendArchitecture: string;
    frontendArchitectureDescription: string;
    userExperience: string;
    userExperienceDescription: string;
    engineeringQuality: string;
    engineeringQualityDescription: string;
    approachTitle: string;
  };
  projects: {
    sectionLabel: string;
    h1Title: string;
    introduction: string;
  };
  projectDetail: {
    projectNotFound: string;
    visitWebsite: string;
    otherProjects: string;
    seeAllProjects: string;
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
  contactSection: {
    linkedin: string;
    github: string;
  };
  footer: {
    privacyPolicy: string;
    allRightsReserved: string;
    location: string;
  };
  metadata: {
    privacyPolicyDescription: string;
  };
};
