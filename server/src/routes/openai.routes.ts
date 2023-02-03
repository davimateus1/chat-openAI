import { Request, Response, Router } from "express";
import { Configuration, OpenAIApi } from "openai";

const openAiRoutes = Router();

const config = new Configuration({
  organization: "org-Nz7W9DskSI21ll8Qo2M02G4L",
  apiKey: "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",
});

const openAiApi = new OpenAIApi(config);

openAiRoutes.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

openAiRoutes.post("/", async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const response = await openAiApi.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ message: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
});

export { openAiRoutes };
