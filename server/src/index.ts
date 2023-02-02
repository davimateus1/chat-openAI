import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { openAiRoutes } from "./routes/openai.routes";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(openAiRoutes);

env.config();

export { app };
