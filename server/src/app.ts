import { configDotenv } from "dotenv";
configDotenv();

import express from "express";
import morgan from "morgan";
import { apiRouter } from "./routes/apiRoutes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
