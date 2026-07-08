import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LoadingScreen from "./LoadingScreen";
import api from "../services/api";

function ImageUploader() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(URL.createObjectURL(acceptedFiles[0]));
      setImageFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  const analyzeImage = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      setLoading(true);

      // Step 1
      setCurrentStep(1);

      await new Promise((resolve) => setTimeout(resolve, 400));

      // Step 2
      setCurrentStep(2);

      // Wait for Gemini (REAL backend)
      const response = await api.post("/analyze", formData);

      // Backend finished
      setCurrentStep(3);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setCurrentStep(4);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setCurrentStep(5);

      await new Promise((resolve) => setTimeout(resolve, 800));

      navigate("/results", {
        state: {
          ...response.data,
          uploadedImage: image,
        },
      });

    } catch (error) {
      console.error(error);
      alert("Failed to analyze image.");
    } finally {
      setLoading(false);
      setCurrentStep(0);
    }
  };

  return (
    <>
      {loading && (
        <LoadingScreen currentStep={currentStep} />
      )}

      <div className="flex flex-col items-center mt-16">

        {!image ? (
          <div
            {...getRootProps()}
            className={`w-[700px] max-w-full h-72 rounded-3xl border-2 border-dashed transition cursor-pointer flex flex-col justify-center items-center ${
              isDragActive
                ? "border-purple-500 bg-purple-500/10"
                : "border-gray-600 hover:border-purple-500"
            }`}
          >
            <input {...getInputProps()} />

            <Upload
              size={60}
              className="text-purple-500"
            />

            <h2 className="text-3xl font-bold mt-5">
              🎵 Drop Your Vibe Here
            </h2>

            <p className="text-gray-400 mt-3 text-center">
              Upload your Instagram photo and let AI discover
              <br />
              the perfect soundtrack for your moment.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              JPG • PNG • WEBP
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">

            <div className="relative">

              <img
                src={image}
                alt="Preview"
                className="rounded-3xl w-[450px] shadow-2xl"
              />

              <button
                onClick={() => {
                  setImage(null);
                  setImageFile(null);
                }}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 rounded-full p-2 transition"
              >
                <X className="text-white" />
              </button>

            </div>

            <button
              onClick={analyzeImage}
              disabled={loading}
              className="mt-8 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition px-8 py-3 rounded-xl text-lg font-semibold"
            >
              🎵 Analyze My Vibe
            </button>

          </div>
        )}

      </div>
    </>
  );
}

export default ImageUploader;