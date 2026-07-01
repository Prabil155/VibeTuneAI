function Results() {
  const dummyData = {
    mood: "Chill 😌",
    location: "Beach 🏖️",
    outfit: "Casual Summer 👕",
    lighting: "Golden Hour 🌅",
    vibeScore: 94,
    songs: [
      { title: "Golden Hour", artist: "JVKE", match: "96%" },
      { title: "Sunset Lover", artist: "Petit Biscuit", match: "94%" },
      { title: "Paradise", artist: "Coldplay", match: "92%" },
    ],
    caption: "Golden skies and unforgettable memories.",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        🎵 Your Vibe Analysis
      </h1>

      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8">

        <div className="grid grid-cols-2 gap-6 text-xl">
          <p><strong>Mood:</strong> {dummyData.mood}</p>
          <p><strong>Location:</strong> {dummyData.location}</p>
          <p><strong>Outfit:</strong> {dummyData.outfit}</p>
          <p><strong>Lighting:</strong> {dummyData.lighting}</p>
          <p><strong>Vibe Score:</strong> {dummyData.vibeScore}%</p>
        </div>

        <h2 className="text-3xl mt-10 mb-5">Recommended Songs</h2>

        {dummyData.songs.map((song, index) => (
          <div
            key={index}
            className="flex justify-between bg-slate-800 p-4 rounded-xl mb-3"
          >
            <div>
              <h3 className="font-bold">{song.title}</h3>
              <p>{song.artist}</p>
            </div>

            <span>{song.match}</span>
          </div>
        ))}

        <div className="mt-10">
          <h2 className="text-3xl mb-3">AI Caption</h2>

          <div className="bg-slate-800 rounded-xl p-5 italic">
            "{dummyData.caption}"
          </div>
        </div>

      </div>
    </div>
  );
}

export default Results;