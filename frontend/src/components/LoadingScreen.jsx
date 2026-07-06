import { Brain, Camera, MapPin, Music2, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Brain className="text-purple-400" size={24} />,
    text: "Uploading your image...",
  },
  {
    icon: <Camera className="text-pink-400" size={24} />,
    text: "AI is analyzing your photo...",
  },
  {
    icon: <MapPin className="text-cyan-400" size={24} />,
    text: "Understanding your vibe...",
  },
  {
    icon: <Music2 className="text-green-400" size={24} />,
    text: "Finding the perfect soundtrack...",
  },
  {
    icon: <Sparkles className="text-yellow-400" size={24} />,
    text: "Your vibe is ready!",
  },
];

function LoadingScreen({ currentStep }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">

      <div className="w-full max-w-xl px-8">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500 flex items-center justify-center shadow-2xl animate-pulse">
            <Brain size={56} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-white text-5xl font-bold mt-8">
          VibeTune AI
        </h1>

        <p className="text-center text-gray-400 mt-4 text-lg">
          Please wait while AI analyzes your image...
        </p>

        {/* Steps */}
        <div className="mt-12 space-y-4">

          {steps.map((step, index) => {
            const stepNumber = index + 1;

            const isDone = currentStep > stepNumber;
            const isActive = currentStep === stepNumber;

            return (
              <div
                key={index}
                className={`flex items-center justify-between rounded-2xl p-5 border transition-all duration-500
                  ${
                    isDone
                      ? "bg-slate-900 border-green-500"
                      : isActive
                      ? "bg-slate-900 border-purple-500"
                      : "bg-slate-900 border-slate-700 opacity-50"
                  }`}
              >
                <div className="flex items-center gap-4">
                  {step.icon}

                  <span className="text-white">
                    {step.text}
                  </span>
                </div>

                {isDone ? (
                  <CheckCircle2
                    className="text-green-400"
                    size={24}
                  />
                ) : isActive ? (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-600"></div>
                )}
              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;