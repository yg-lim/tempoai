import * as cheerio from "cheerio";
import { ParsedPosting } from "../types";

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

export function parseCompanyName(urlString: string) {
  const url = new URL(urlString);
  const path = url.pathname.split("/");
  console.log(path);
  return path[1];
}
