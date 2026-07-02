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
You are an expert fashion stylist, photographer, travel blogger and music curator.

Analyze the uploaded image.

Return ONLY valid JSON.

{
    "mood": "",
    "location": "",
    "outfit": "",
    "lighting": "",
    "aesthetic": "",
    "colors": [],
    "reasoning": ""
}

Do not return markdown.

Do not explain anything.

Only return JSON.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[prompt, image]
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "").replace("```", "").strip()

    return json.loads(text)