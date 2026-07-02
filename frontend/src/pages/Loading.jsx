import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">

      <div className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-3xl font-bold mt-10">
        AI is analyzing your vibe...
      </h1>

      <div className="mt-8 space-y-3 text-gray-400 text-lg">
        <p>😊 Detecting mood...</p>
        <p>👕 Recognizing outfit...</p>
        <p>📍 Identifying location...</p>
        <p>🎵 Matching songs...</p>
      </div>

    </div>
  );
}

export default Loading;