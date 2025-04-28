
// Install the Generative AI SDK
// $ npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyDTR1lHyGi3QZ5UAS6mQc9AtugS5njfuuM"; // Make sure API keys are properly secured in environment variables, not hard-coded.

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings,
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [ 

    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response
  console.log(result.response.text());
  return response.text()
}

export default run;
