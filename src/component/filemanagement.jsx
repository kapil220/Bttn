import React, { useState, useEffect } from "react";
import Dashboard from "./design/dashbord";
import { getFiles, saveFile, deleteFile } from "../../indexDB";

function FileManagement() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);
        const storedFiles = await getFiles();
        console.log("Fetched files:", storedFiles); // Log fetched files
        setFiles(storedFiles);
      } catch (err) {
        console.error("Error fetching files:", err); // Log error
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const addFile = async (file) => {
    await saveFile(file);
    console.log("File added:", file); // Log added file
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const removeFile = async (id) => {
    await deleteFile(id);
    console.log("File removed with id:", id); // Log removed file id
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Dashboard files={files} removeFile={removeFile} addFile={addFile} />
    </div>
  );
}

export default FileManagement;
