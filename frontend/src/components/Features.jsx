import { Smile, Shirt, MapPin, Music } from "lucide-react";

const features = [
  {
    icon: <Smile size={40} />,
    title: "Mood Detection",
    description: "Understand the emotion behind your photo.",
  },
  {
    icon: <Shirt size={40} />,
    title: "Outfit Analysis",
    description: "Detect fashion style and aesthetics.",
  },
  {
    icon: <MapPin size={40} />,
    title: "Location Recognition",
    description: "Recognize scenic places and environments.",
  },
  {
    icon: <Music size={40} />,
    title: "Song Recommendation",
    description: "Find music that perfectly matches your vibe.",
  },
];

function Features() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        What VibeTune AI Understands
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-purple-500 transition"
          >
            <div className="text-purple-400 flex justify-center mb-4">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;