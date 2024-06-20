import React, { useState, useEffect } from "react";
import Modal from "./design/modal";
import TableRows from "../component/design/tablerows";
import { getFiles, deleteFile } from "../../indexDB"; // Adjust the import path

function Dashboard() {
  const [rowsData, setRowsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);
        const storedFiles = await getFiles();
        setRowsData(storedFiles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rowsData];
    updatedRows[index][name] = value;
    setRowsData(updatedRows);
  };

  const deleteTableRows = async (index) => {
    try {
      const fileToDelete = rowsData[index];
      await deleteFile(fileToDelete.id); // Delete file from IndexedDB
      const updatedRows = rowsData.filter((row, i) => i !== index);
      setRowsData(updatedRows);
    } catch (err) {
      setError(`Failed to delete record: ${err.message}`);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="card-title">Account Records</div>
          <Modal />
        </div>
        <hr />

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Record</th>
                <th>File Size</th>
                <th>Upload Date</th>
                <th>Uploaded by</th>
                <th>Record Label</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
