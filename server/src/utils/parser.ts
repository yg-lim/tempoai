import * as cheerio from "cheerio";

interface ParsedPosting {
  title: string;
  location: string;
  department: string;
  commitment: string;
  workplaceTypes: string;
  requirements: string;
}

export function parseJobPostingHtml(html: string) {
  const $ = cheerio.load(html);
  const parsedPosting: ParsedPosting = {
    title: $(".posting-headline h2").text(),
    location: $(".location").text(),
    department: $(".department").text().replace(" /", ""),
    commitment: $(".commitment").text().replace(" /", ""),
    workplaceTypes: $(".workplaceTypes").text(),
    requirements: $(".posting-requirements").text(),
  };

  return parsedPosting;
}
