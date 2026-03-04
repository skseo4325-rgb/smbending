import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    console.log('Generating image...');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A close up of a smooth, solid bronze/metal pipe bending in a U-shape, mounted on a textured grey vertical stone tile wall. The metal is completely smooth without any holes. Industrial, architectural, soft lighting, photorealistic.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'hero-bg.jpg'), buffer);
        console.log('Image generated successfully at public/hero-bg.jpg');
        break;
      }
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generate();
