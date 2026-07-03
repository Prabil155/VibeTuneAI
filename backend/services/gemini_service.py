import os
import json
from PIL import Image
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_image(image_path):
    image = Image.open(image_path)

    prompt = """
You are an expert fashion stylist, photographer, travel blogger, and music curator.

Analyze the uploaded image carefully.

Return ONLY valid JSON in this exact format:

{
  "mood": "",
  "location": "",
  "outfit": "",
  "lighting": "",
  "aesthetic": "",
  "genre": "",
  "caption": "",
  "reasoning": ""
}

Instructions:

- mood = overall emotion of the image
- location = where the image appears to be taken
- outfit = clothing style
- lighting = lighting condition
- aesthetic = visual aesthetic
- genre = ONE music genre that best matches the image

Possible genres include:
Indie Pop
Lo-fi
Dream Pop
Synthwave
Acoustic
EDM
Hip Hop
R&B
Alternative Rock
Pop
Classical
Jazz
Chill
Electronic
Ambient
K-Pop
Afrobeats
Country

caption = Write one creative Instagram caption.

reasoning = Explain briefly why you selected this genre and mood.

IMPORTANT:
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT include ```json.
Do NOT include any extra text.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[prompt, image]
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = (
            text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

    return json.loads(text)