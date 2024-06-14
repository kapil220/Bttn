function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { name, size, date, user, label, view } = data;
    return (
      <tr key={index}>
        <td>
          <a href="#" className="text-sky-500 underline">
            {name}
          </a>
        </td>
        <td>{size}</td>
        <td>{date}</td>
        <td>{user}</td>
        <td>
          <div className="relative">
            <input
              type="text"
              id={`small_outlined_${index}`}
              value={label}
              onChange={(evnt) => handleChange(index, evnt)}
              name="label"
              className="block px-2.5 outline pb-1.5 pt-3 w-full text-sm text-gray-900 rounded-lg border-1 outline-slate-300 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer focus:outline-none"
              placeholder=" "
            />
            <label
              htmlFor={`small_outlined_${index}`}
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            ></label>
          </div>
        </td>
        <td>
          <button className="btn btn-outline btn-primary">
            <a
              style={{ display: "table-cell" }}
              href="someLink"
              target="_blank"
            >
              {view}
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
