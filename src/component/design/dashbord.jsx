import React, { useState, useEffect } from "react";
import TableRows from "./tablerows"; // Adjust the path as necessary
import Modal from "./modal"; // Ensure the path is correct

function Dashboard({ files, removeFile, addFile }) {
  const [rowsData, setRowsData] = useState(files);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page

  useEffect(() => {
    setRowsData(files);
  }, [files]);

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rowsData.slice(indexOfFirstItem, indexOfLastItem);

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

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(rowsData.length / itemsPerPage);

  return (
    <div className="card bg-base-100 shadow-xl">
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
                rowsData={currentItems}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          {/* Pagination Controls */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            class="px-3 py-2 text-xs font-medium text-center inline-flex items-center rounded-lg"
          >
            {"<<"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-2 text-xs font-medium text-center inline-flex items-center rounded-lg" ${
                currentPage === index + 1 ? "btn-primary" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            class="px-3 py-2 text-xs font-medium text-center inline-flex items-center rounded-lg"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
