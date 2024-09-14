import { Router } from "express";
import { predictSalary } from "../controllers/apiController";

export const apiRouter = Router();

apiRouter.post("/predict/salary", predictSalary);
