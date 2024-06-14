import React, { useState } from "react";
import drag from "../../assets/drag.png";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [uploaded, setUploaded] = useState({});

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).slice(0, 10);
    setFiles(newFiles);
    newFiles.forEach((file, index) => uploadFile(file, index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).slice(0, 10);
    setFiles(droppedFiles);
    droppedFiles.forEach((file, index) => uploadFile(file, index));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const uploadFile = (file, index) => {
    const uploadProgress = {};
    uploadProgress[file.name] = 0;
    setProgress((prevProgress) => ({ ...prevProgress, ...uploadProgress }));

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress[file.name] + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploaded((prevUploaded) => ({
            ...prevUploaded,
            [file.name]: true,
          }));
        }
        return { ...prevProgress, [file.name]: newProgress };
      });
    }, 300);
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
          accept="image/*"
        />
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center">
            <img
              src={drag}
              onClick={() => document.querySelector(".file-input").click()}
              className="h-20 w-20 cursor-pointer"
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

      {files.length > 0 && (
        <div className="mt-4 w-full">
          {files.map((file, index) => (
            <div key={index} className="relative my-2">
              <div className="flex items-center justify-between">
                <span>{file.name}</span>
                <span>
                  {uploaded[file.name] ? (
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
                    `${progress[file.name]}%`
                  )}
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${progress[file.name]}%` }}
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
