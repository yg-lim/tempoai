import axios from "axios";
import z from "zod";

const jobPostingInfoSchema = z.object({
  title: z.string(),
  location: z.string(),
  department: z.string(),
  commitment: z.string(),
  workplaceTypes: z.string(),
  requirements: z.string(),
});

const predictionSchema = z.object({
  prediction: z.string(),
});

export type Prediction = z.infer<typeof predictionSchema>;
export type JobPostingInfo = z.infer<typeof jobPostingInfoSchema>;

async function parseJobPosting(url: string) {
  const response = await axios.post("/api/parse/posting", {
    jobPostingUrl: url,
  });

  return jobPostingInfoSchema.parse(response.data);
}

async function predictSalary(jobPostingInfo: JobPostingInfo) {
  const response = await axios.post("/api/predict/salary", {
    jobPostingInfo,
    headers: {
      Accept: "text/event-stream",
    },
  });

  return predictionSchema.parse(response.data);
}

export const apiService = {
  parseJobPosting,
  predictSalary,
};
