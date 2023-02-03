import { Request, Response, Router } from "express";
import { Configuration, OpenAIApi } from "openai";

const openAiRoutes = Router();

const config = new Configuration({
  organization: "org-Nz7W9DskSI21ll8Qo2M02G4L",
  apiKey: "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",
});

const openAiApi = new OpenAIApi(config);

openAiRoutes.get("/", (_, res: Response) => {
  res.send();
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
