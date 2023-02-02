import { Request, Response, Router } from "express";
import { Configuration, OpenAIApi } from "openai";

const openAiRoutes = Router();

const config = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const openAiApi = new OpenAIApi(config);

openAiRoutes.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

openAiRoutes.post("/", async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const response: any = await openAiApi.createCompletion({
      model: "text-devinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ message: response.data.choices[0].value });
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
});

export { openAiRoutes };
