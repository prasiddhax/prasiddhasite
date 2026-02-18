
import { GoogleGenAI } from "@google/genai";

// Fix: Follow strictly the initialization guideline by using process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCreativePrompt = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are prasiddha's AI Creative Assistant. A user is asking for inspiration: "${userInput}". 
      Respond as a minimalist, cool creative developer. Give a short, quirky, and inspiring project idea (max 3 sentences). 
      Use a slightly poetic but tech-savvy tone.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    return response.text || "Connection lost in the grid. Try again, dreamer.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are misaligned. (API Key missing or error)";
  }
};
