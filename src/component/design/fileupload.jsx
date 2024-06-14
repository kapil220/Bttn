import React, { useState } from "react";
import drag from "../../assets/drag.png";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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
        />
        <div className="flex flex-col gap-10">
          <div className="flex justify-center item-center">
            {" "}
            <img
              src={drag}
              onClick={() => document.querySelector(".file-input").click()}
              className="h-20 w-20"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-blue-950">Drag & drop any file here </p>

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
      {file && <p className="mt-4">Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUpload;
