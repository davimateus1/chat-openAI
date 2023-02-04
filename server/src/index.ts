import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { openAiRoutes } from "./routes/openai.routes";

env.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(openAiRoutes);

export { app };
