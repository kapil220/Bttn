import React, { useState } from "react";
import drag from "../../assets/drag.png";
import { saveFile } from "../../../indexDB";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [uploaded, setUploaded] = useState({});
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const supportedFormats = [
    "application/pdf",
    "application/msword",
    "image/png",
    "image/jpeg",
  ];
  const maxFileSize = 50 * 1024 * 1024; // 50MB

  const handleFileChange = async (e) => {
    const newFiles = Array.from(e.target.files);
    const validFiles = validateFiles(newFiles);

    if (validFiles.length > 0) {
      setUploading(true);
      setLoading(true);
      await uploadFiles(validFiles);
      setUploading(false);
      setLoading(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = validateFiles(droppedFiles);

    if (validFiles.length > 0) {
      setUploading(true);
      setLoading(true);
      await uploadFiles(validFiles);
      setUploading(false);
      setLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const validateFiles = (fileList) => {
    const validFiles = fileList.filter((file) => {
      if (!supportedFormats.includes(file.type)) {
        setError(
          "We currently support PDF, DOC, PNG, and JPEG formats. You can upload up to 10 files at once, each up to 50MB."
        );
        return false;
      }
      if (file.size > maxFileSize) {
        setError(
          "We currently support PDF, DOC, PNG, and JPEG formats. You can upload up to 10 files at once, each up to 50MB."
        );
        return false;
      }
      return true;
    });

    if (validFiles.length > 10) {
      setError("You can upload up to 10 files at once.");
      return [];
    }

    if (validFiles.length === 0) {
      setError(
        "We currently support PDF, DOC, PNG, and JPEG formats. You can upload up to 10 files at once, each up to 50MB."
      );
    } else {
      setError("");
    }

    return validFiles;
  };

  const uploadFiles = async (files) => {
    const uploadPromises = files.map((file) => uploadFile(file));
    await Promise.all(uploadPromises);
  };

  const uploadFile = async (file) => {
    const uploadProgress = {};
    uploadProgress[file.name] = 0;
    setProgress((prevProgress) => ({ ...prevProgress, ...uploadProgress }));

    const simulateUpload = () => {
      return new Promise((resolve) => {
        const totalSize = file.size;
        const incrementSize = totalSize / 100;
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const currentProgress = prevProgress[file.name];
            const newProgress = currentProgress + 1; // Increment by 1%
            if (newProgress >= 100) {
              clearInterval(interval);
              resolve();
            }
            return { ...prevProgress, [file.name]: newProgress };
          });
        }, 100); // Adjust interval based on file size
      });
    };

    await simulateUpload();
    await saveFile(file);
    setUploaded((prevUploaded) => ({
      ...prevUploaded,
      [file.name]: true,
    }));
    setFiles((prevFiles) => [
      ...prevFiles,
      {
        file,
        name:
          file.name.length > 30 ? `${file.name.slice(0, 30)}...` : file.name, // Limiting file name display
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        date: new Date(file.lastModified).toLocaleDateString(),
        uploadedBy: "",
        recordLabel: "",
      },
    ]);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="border-2 border-dashed border-blue-950 p-10 w-96 text-center rounded-lg"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          className="hidden file-input w-full max-w-xs"
          onChange={handleFileChange}
          multiple
          accept="image/*,application/pdf,application/msword"
        />
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center">
            <img
              src={drag}
              onClick={() => document.querySelector(".file-input").click()}
              className="h-16 w-16 cursor-pointer"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-blue-950">Drag & drop any file here</p>
            <p className="text-blue-950">or</p>
            <button
              className="btn btn-primary mt-4 bg-blue-950"
              onClick={() => document.querySelector(".file-input").click()}
            >
              Select File From Device
            </button>
          </div>
        </div>
      </div>

      {error && <div className="mt-4 text-red-500">{error}</div>}

      {loading && <div className="mt-4 text-blue-500">Uploading...</div>}

      {files.length > 0 && (
        <div className="mt-4 w-full max-w-md overflow-hidden">
          {files.map((file, index) => (
            <div key={index} className="relative my-2 truncate">
              <div className="flex items-center justify-between">
                <span className="truncate">{file.name}</span>
                <span>
                  {uploaded[file.file.name] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    `${progress[file.file.name]}%`
                  )}
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${progress[file.file.name]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
