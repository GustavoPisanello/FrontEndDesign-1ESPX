import { GoogleGenerativeAI } from "@google/generative-ai"
//Acessando a API do gemni via sua API key


const genAI = new GoogleGenerativeAI("");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "";

const result = await model.generateContent(prompt);
console.log(result.response.text());