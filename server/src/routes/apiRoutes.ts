import { Router } from "express";
import { parseJobPosting, predictSalary } from "../controllers/apiController";

export const apiRouter = Router();

apiRouter.post("/parse/posting", parseJobPosting);
apiRouter.post("/predict/salary", predictSalary);
