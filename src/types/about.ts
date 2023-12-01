export interface About {
  name: string;
  startDate: string;
  endDate: string;
  team?: string;
  description: string[];
  webSiteLink?: string;
  portfolioLink?: string;
  githubLink?: string;
  skills?: string;
}

export interface AboutProps {
  data: About;
}
