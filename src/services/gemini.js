import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey || apiKey === "AIzaSyBjUhPa2FacAtkiD3ISspTOb1eLNUjXb-Y") {
  throw new Error(
    "Gemini API kaliti o'rnatilmagan. Iltimos, .env faylida VITE_GEMINI_API_KEY ni haqiqiy kalitga o'zgartiring.",
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

export const getAIResponse = async (userPrompt) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction:
      "Siz Codial IT o'quv markazining yordamchisisiz. Kurslar: Frontend, Backend, Android, Grafik dizayn. Faqat shu markaz haqida do'stona javob bering.",
  });

  const result = await model.generateContent(userPrompt);
  const response = await result.response;
  return response.text();
};
