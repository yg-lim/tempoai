import { Request, Response, NextFunction } from "express";
import { leverService } from "../services/leverService";
import { isLeverJobPosting } from "../utils/urlValidator";
import { parseJobPostingHtml } from "../utils/parser";

export const predictSalary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jobPostingUrl } = req.body;
  if (!isLeverJobPosting(jobPostingUrl)) next("Not a valid Lever Job Posting");

  const jobPostingHtml = await leverService.getJobPosting(jobPostingUrl);
  // TODO: check if job posting still valid (expired? not found?)

  const parsedJobPosting = parseJobPostingHtml(jobPostingHtml);
  console.log(res.send(parsedJobPosting));
};
