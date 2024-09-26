import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/sendMessage', async (req, res) => {
    const { messages } = req.body;

    console.log(messages)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})