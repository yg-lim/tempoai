import { Request, Response, NextFunction } from "express";
import { leverService } from "../services/leverService";
import { parseJobPostingHtml } from "../utils/parser";

export const predictSalary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jobPostingUrl } = req.body;
  // TODO: url validation (is valid Lever job posting url?)
  const jobPostingHtml = await leverService.getJobPosting(jobPostingUrl);
  // TODO: check if job posting still valid (expired? not found?)

  const parsedJobPosting = parseJobPostingHtml(jobPostingHtml);
  console.log(res.send(parsedJobPosting));
};
