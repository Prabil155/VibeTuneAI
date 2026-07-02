import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-4xl font-bold mb-6">
          No Analysis Found 😢
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-12">
        🎵 AI Vibe Analysis
      </h1>

      <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 shadow-xl">

        <div className="grid md:grid-cols-2 gap-8 text-xl">

          <div>
            <strong>😊 Mood</strong>
            <p>{state.mood}</p>
          </div>

          <div>
            <strong>📍 Location</strong>
            <p>{state.location}</p>
          </div>

          <div>
            <strong>👕 Outfit</strong>
            <p>{state.outfit}</p>
          </div>

          <div>
            <strong>🌅 Lighting</strong>
            <p>{state.lighting}</p>
          </div>

          <div>
            <strong>✨ Aesthetic</strong>
            <p>{state.aesthetic}</p>
          </div>

          <div>
            <strong>🎨 Colors</strong>
            <p>{state.colors?.join(", ")}</p>
          </div>

        </div>

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-4">
            🧠 AI Reasoning
          </h2>

          <div className="bg-slate-800 rounded-2xl p-6 text-lg">
            {state.reasoning}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Results;