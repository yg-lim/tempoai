import { configDotenv } from "dotenv";
configDotenv();
import { Request, Response, NextFunction } from "express";
import { leverService } from "../services/leverService";
import { isLeverJobPosting } from "../utils/urlValidator";
import { Anthropic } from "@anthropic-ai/sdk";
import { parseJobPostingHtml, parseCompanyName } from "../utils/parser";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function parseJobPosting(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { jobPostingUrl } = req.body;
  if (!isLeverJobPosting(jobPostingUrl)) {
    next("Not a Lever Job Posting");
    return;
  }

  try {
    const jobPostingHtml = await leverService
      .getJobPosting(jobPostingUrl)
      .catch((_) => {
        next(
          "Could not find the Lever Job Posting. The listing may have expired."
        );
      });

    const parsedJobPosting = parseJobPostingHtml(jobPostingHtml);
    const company = parseCompanyName(jobPostingUrl);
    res.json({ company, ...parsedJobPosting });
  } catch (error) {
    next(error);
  }
}

export async function predictSalary(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const jobPostingInfo = req.body;
  if (!jobPostingInfo) {
    return res
      .status(400)
      .json({ error: "Job Posting Info object is required." });
  }

  const prompt =
    "Given the following job posting information in JSON format:\n" +
    `${JSON.stringify(jobPostingInfo)}\n` +
    "Please provide a salary estimate.";

  try {
    const stream = await anthropic.messages.stream({
      messages: [{ role: "user", content: prompt }],
      model: "claude-3-opus-20240229",
      max_tokens: 1000,
    });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of stream) {
      if (chunk.type === "content_block_delta") {
        res.write(`data: ${JSON.stringify(chunk.delta)}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    next("An error occurred while processing your request");
  }
}
