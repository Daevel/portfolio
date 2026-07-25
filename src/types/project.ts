export type Project = {
  slug: string;
  title: string;
  technologies: string[];
  image: string;
  images: string[];
  videos?: {
    src: string;
    captions: string;
  }[];
  repositoryUrl: string;
  liveUrl: string;
  featured: boolean;
};
