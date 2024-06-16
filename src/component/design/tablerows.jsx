import React from "react";

function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { id, name, file, uploadedBy, recordLabel } = data;

    return (
      <tr key={id}>
        <td>
          <a
            href={URL.createObjectURL(file)}
            download={name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 underline"
          >
            {name}
          </a>
        </td>
        <td>{(file.size / 1024 / 1024).toFixed(2)} MB</td>
        <td>{new Date(file.lastModified).toLocaleDateString()}</td>
        <td>
          <input
            type="text"
            value={uploadedBy || ""}
            onChange={(event) => handleChange(index, event)}
            name="uploadedBy"
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 rounded-lg border-1 outline-slate-300 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer focus:outline-none"
            placeholder="Uploaded By"
          />
        </td>
        <td>
          <input
            type="text"
            value={recordLabel || ""}
            onChange={(event) => handleChange(index, event)}
            name="recordLabel"
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 rounded-lg border-1 outline-slate-300 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer focus:outline-none"
            placeholder="Record Label"
          />
        </td>
        <td>
          <button className="btn btn-outline btn-primary">
            <a
              href={URL.createObjectURL(file)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "table-cell" }}
            >
              View
            </a>
          </button>
        </td>
        <td>
          <button
            onClick={() => deleteTableRows(index)}
            className="btn btn-outline btn-error"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
}

export default TableRows;
