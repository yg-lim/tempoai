export interface ParsedPosting {
  title: string;
  location: string;
  department: string;
  commitment: string;
  workplaceTypes: string;
  requirements: string;
}

export interface JobPostingInfo extends ParsedPosting {
  company: string;
}
