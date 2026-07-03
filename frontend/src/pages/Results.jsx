import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const currentAudio = useRef(null);

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-4xl font-bold mb-6">
          No Analysis Found 
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

      <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-10 shadow-xl">

        {/* Analysis */}
        <div className="grid md:grid-cols-2 gap-8 text-xl">

          <p><strong>Mood:</strong> {state.mood}</p>

          <p><strong>Location:</strong> {state.location}</p>

          <p><strong>Outfit:</strong> {state.outfit}</p>

          <p><strong>Lighting:</strong> {state.lighting}</p>

          <p><strong>Aesthetic:</strong> {state.aesthetic}</p>

          <p><strong>Genre:</strong> {state.genre}</p>

        </div>

        {/* Songs */}
        <h2 className="text-4xl font-bold mt-14 mb-8">
          🎵 Recommended Songs
        </h2>

        <div className="space-y-6">

          {(state.songs ?? []).length === 0 ? (
            <div className="bg-slate-800 rounded-2xl p-6 text-center text-gray-400">
              No songs found for this vibe.
            </div>
          ) : (
            (state.songs ?? []).map((song, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-5 flex gap-6 items-center hover:bg-slate-700 transition"
              >

                <img
                  src={song.image}
                  alt={song.title}
                  className="w-24 h-24 rounded-xl object-cover shadow-lg"
                />

                <div className="flex-1">

                  <h3 className="text-2xl font-bold">
                    {song.title}
                  </h3>

                  <p className="text-gray-400">
                    {song.artist}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {song.album}
                  </p>

                  {song.preview && (
                    <audio
  controls
  className="mt-4 w-full"
  ref={(audio) => {
    if (!audio) return;

    audio.onplay = () => {
      if (currentAudio.current && currentAudio.current !== audio) {
        currentAudio.current.pause();
        currentAudio.current.currentTime = 0;
      }

      currentAudio.current = audio;
    };
  }}
>
  <source src={song.preview} type="audio/mpeg" />
</audio>
                  )}

                </div>

                <a
                  href={song.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-semibold"
                >
                  🎵 Listen
                </a>

              </div>
            ))
          )}

        </div>

        {/* Caption */}
        <h2 className="text-4xl font-bold mt-14 mb-6">
           Caption
        </h2>

        <div className="bg-slate-800 rounded-2xl p-6 text-xl italic">
          {state.caption}
        </div>

        {/* AI Reasoning */}
        <h2 className="text-4xl font-bold mt-14 mb-6">
           AI Reasoning
        </h2>

        <div className="bg-slate-800 rounded-2xl p-6 text-lg text-gray-300 leading-relaxed">
          {state.reasoning}
        </div>

      </div>

    </div>
  );
}

export default Results;