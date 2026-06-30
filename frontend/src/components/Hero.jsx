import { Upload } from "lucide-react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20 px-6">

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        Find the
        <span className="text-purple-500"> Perfect Song </span>
        for your Photo
      </h1>

      <p className="text-gray-400 mt-8 max-w-2xl text-xl">
        Upload an Instagram photo and let AI analyze your mood,
        outfit, location and vibe to recommend the perfect soundtrack.
      </p>

      <button
        className="
        mt-10
        flex
        items-center
        gap-3
        bg-purple-600
        hover:bg-purple-700
        transition
        px-8
        py-4
        rounded-2xl
        text-xl
        font-semibold"
      >
        <Upload size={24} />
        Upload Image
      </button>

    </section>
  );
}

export default Hero;