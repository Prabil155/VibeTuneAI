from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="VibeTune AI API")

# Allow React frontend to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to VibeTune AI 🚀"}

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "mood": "Happy 😊",
        "location": "Beach 🏖️",
        "outfit": "Casual 👕",
        "lighting": "Golden Hour 🌅",
        "songs": [
            "Golden Hour - JVKE",
            "Paradise - Coldplay",
            "Sunset Lover - Petit Biscuit"
        ],
        "caption": "Golden skies and unforgettable memories."
    }