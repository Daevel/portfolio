export type ExperienceKey = "gftL2" | "gftL1" | "hiTechSystems" | "jsbSolutions" | "threeEm";

export type ExperienceEntry = {
  key: ExperienceKey;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  remote: boolean;
  startDate: string;
  endDate: string | null;
  technologies: string[];
};
