import React, { useState } from "react";
import Modal from "./design/modal";
import records from "../component/record";
import TableRows from "../component/design/tablerows";

function Dashbord() {
  const [rowsData, setRowsData] = useState(records);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = rowsData.map((row, i) =>
      i === index ? { ...row, [name]: value } : row
    );
    setRowsData(updatedRows);
  };

  const deleteTableRows = (index) => {
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
              {/* head */}
              <thead>
                <tr>
                  <th>Record</th>
                  <th>File Size</th>
                  <th>Upload Date</th>
                  <th>Uploaded by</th>
                  <th>Record label</th>
                  <th></th>
                  <th></th>
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
