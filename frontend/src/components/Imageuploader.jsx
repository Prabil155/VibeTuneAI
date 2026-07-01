import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";

function ImageUploader() {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center mt-16">

      {!image ? (
        <div
          {...getRootProps()}
          className={`w-[700px] max-w-full h-72 rounded-3xl border-2 border-dashed transition cursor-pointer flex flex-col justify-center items-center
          ${
            isDragActive
              ? "border-purple-500 bg-purple-500/10"
              : "border-gray-600 hover:border-purple-500"
          }`}
        >
          <input {...getInputProps()} />

          <UploadCloud size={60} className="text-purple-500" />

          <h2 className="text-2xl font-semibold mt-5">
            Drag & Drop Image
          </h2>

          <p className="text-gray-400 mt-2">
            or click to browse
          </p>

          <p className="text-sm text-gray-500 mt-4">
            JPG • PNG • WEBP
          </p>

        </div>
      ) : (
        <div className="relative">

          <img
            src={image}
            alt="Preview"
            className="rounded-3xl w-[450px] shadow-2xl"
          />

          <button
            onClick={() => setImage(null)}
            className="absolute top-3 right-3 bg-red-500 rounded-full p-2"
          >
            <X />
          </button>

        </div>
      )}

    </div>
  );
}

export default ImageUploader;