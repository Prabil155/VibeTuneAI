import { Upload } from "lucide-react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20 px-6">

      <h1 className="text-6xl md:text-7xl font-extrabold text-center leading-tight">
  Find the <span className="text-purple-500">Perfect Soundtrack</span>
  <br />
  for Your Moment
      </h1>

      <p className="text-xl text-gray-400 text-center max-w-3xl mt-8">
  One photo. Infinite vibes.
  <br />
  AI analyzes your mood, outfit, location, lighting and aesthetic
  to recommend the perfect soundtrack for your Instagram post.
</p>
<div className="flex flex-wrap justify-center gap-4 mt-10">

  <div className="bg-slate-800 border border-slate-700 rounded-full px-5 py-2">
    ✨ AI Powered
  </div>

  <div className="bg-slate-800 border border-slate-700 rounded-full px-5 py-2">
    📷 Image Understanding
  </div>

  <div className="bg-slate-800 border border-slate-700 rounded-full px-5 py-2">
    🎵 Music Recommendation
  </div>

</div>

      

    </section>
  );
}

export default Hero;