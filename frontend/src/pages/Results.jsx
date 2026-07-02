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
        🎵 Your Vibe Analysis
      </h1>

      <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 shadow-xl">

        <div className="grid md:grid-cols-2 gap-10 text-2xl">

          <p>
            <strong>Mood:</strong> {state.mood}
          </p>

          <p>
            <strong>Location:</strong> {state.location}
          </p>

          <p>
            <strong>Outfit:</strong> {state.outfit}
          </p>

          <p>
            <strong>Lighting:</strong> {state.lighting}
          </p>

        </div>

        <h2 className="text-4xl font-bold mt-16 mb-8">
          🎵 Recommended Songs
        </h2>

        <div className="space-y-5">

          {state.songs.map((song, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 text-xl"
            >
              {song}
            </div>
          ))}

        </div>

        <h2 className="text-4xl font-bold mt-16 mb-6">
          ✍️ Caption
        </h2>

        <div className="bg-slate-800 rounded-2xl p-6 text-xl italic">
          {state.caption}
        </div>

      </div>

    </div>
  );
}

export default Results;