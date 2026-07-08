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
You are an expert photographer, fashion stylist, psychologist, travel blogger and music curator.

Analyze the uploaded image.

Recommend songs that perfectly match the vibe of the image.

The songs should fit the mood, colors, atmosphere, lighting, emotions and aesthetic.

Return ONLY valid JSON.

{
  "mood": "",
  "location": "",
  "outfit": "",
  "lighting": "",
  "aesthetic": "",
  "genre": "",
  "vibe_score": 0,
  "caption": "",
  "reasoning": "",
  "recommended_songs": [
    {
      "title": "",
      "artist": ""
    },
    {
      "title": "",
      "artist": ""
    },
    {
      "title": "",
      "artist": ""
    },
    {
      "title": "",
      "artist": ""
    },
    {
      "title": "",
      "artist": ""
    }
  ]
}

Return exactly five songs.

Choose real songs.

Do not invent songs.

Do not return markdown.

Return only JSON.

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

Choose ONLY one of these themes:

neon_city
sunset
ocean
forest
cozy_cafe
cosmic
default

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