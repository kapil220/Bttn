import React, { useState, useEffect } from "react";
import TableRows from "./tablerows"; // Adjust the path as necessary
import Modal from "./modal"; // Ensure the path is correct

function Dashboard({ files, removeFile, addFile }) {
  const [rowsData, setRowsData] = useState(files);

  useEffect(() => {
    setRowsData(files);
  }, [files]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rowsData];
    updatedRows[index][name] = value;
    setRowsData(updatedRows);
  };

  const deleteTableRows = async (index) => {
    try {
      const fileToDelete = rowsData[index];
      await removeFile(fileToDelete.id);
      const updatedRows = rowsData.filter((row, i) => i !== index);
      setRowsData(updatedRows);
    } catch (err) {
      console.error(`Failed to delete record: ${err.message}`);
    }
  };

  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="card-title">Account Records</div>
          <Modal addFile={addFile} />
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
