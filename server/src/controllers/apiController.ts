import { Request, Response, NextFunction } from "express";
import { leverService } from "../services/leverService";

export const predictSalary = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jobPostingUrl } = req.body;
  res.send(jobPostingUrl);
};
