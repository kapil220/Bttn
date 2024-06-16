import React, { useState, useEffect } from "react";
import Modal from "./design/modal";
import TableRows from "../component/design/tablerows";
import { getFiles, deleteFile } from "../../indexDB"; // Adjust the import path

function Dashbord() {
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const storedFiles = await getFiles();
      setRowsData(storedFiles);
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
    const fileToDelete = rowsData[index];
    await deleteFile(fileToDelete.id); // Delete file from IndexedDB
    const updatedRows = rowsData.filter((row, i) => i !== index);
    setRowsData(updatedRows);
  };

  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title">Account Records</div>
        <hr />

        <div className="absolute right-10">
          <Modal />
        </div>

        <div>
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
    </div>
  );
}

export default Dashbord;
