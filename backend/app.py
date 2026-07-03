from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import traceback

from services.gemini_service import analyze_image
from services.deezer_service import get_recommended_songs

app = FastAPI(title="VibeTune AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
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
    try:
        print("\n==============================")
        print("📸 Image received")

        # Save uploaded image
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        print("🤖 Calling Gemini...")

        # Analyze image
        result = analyze_image(file_path)

        print("\n✅ Gemini Response:")
        print(result)

        # Check if Gemini returned a genre
        genre = result.get("genre")

        if not genre:
            print("❌ No genre returned from Gemini!")
            result["songs"] = []
            return result

        print(f"\n🎵 Searching Spotify for genre: {genre}")

        # Search Spotify
        songs = get_recommended_songs(genre)

        print(f"✅ Spotify returned {len(songs)} songs")

        result["songs"] = songs

        print("\n🚀 Final Response:")
        print(result)
        print("==============================\n")

        return result

    except Exception as e:
        print("\n❌ ERROR OCCURRED")
        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )