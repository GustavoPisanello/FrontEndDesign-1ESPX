import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {
  const { messages } = req.body;

  // Acessando a API do Gemini via sua API Key
  const genAI = new GoogleGenerativeAI("AIzaSyBNxLdrVlSjNGM0xcua0l3ov0LIgXGMg9U");

  // Instanciando o modelo
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // colocando o prompt
  const prompt = messages[0].parts[0].text;

  // enviando o prompt para o gemini e ESPERANDO a resposta dele
  const result = await model.generateContent(prompt);
  console.log(result.response.text());

  res.json({
    chat_completion: result.response.text()
  })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
