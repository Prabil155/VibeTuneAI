from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os

from services.gemini_service import analyze_image

app = FastAPI(title="VibeTune AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "Welcome to VibeTune AI 🚀"}


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    print("📸 Image received")

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    print("🤖 Calling Gemini...")

    result = analyze_image(file_path)

    print("✅ Gemini finished")

    return result