import { configDotenv } from "dotenv";
configDotenv();

import express, { Response } from "express";
import morgan from "morgan";
import { apiRouter } from "./routes/apiRoutes";
import { errorHandler } from "./middlewares/error";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use((_, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
