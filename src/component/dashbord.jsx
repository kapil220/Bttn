import Modal from "./design/modal";
import records from "../component/record.js";

function Dashbord() {
  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title">Account Records</div>
        <hr />
        <div className="grid grid-cols-3">
          <div>
            {" "}
            <button className="btn bg-white hidden"></button>
          </div>

          <div className="absolute right-10">
            <Modal />
          </div>
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
                {records && records.length > 0
                  ? records.map((record, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <a href="#" className="text-sky-500 underline">
                              {record.name}
                            </a>
                          </td>
                          <td>{record.size}</td>
                          <td>{record.date}</td>
                          <td>{record.user}</td>
                          <td>
                            <div className="relative">
                              <input
                                type="text"
                                id={`small_outlined_${index}`}
                                className="block px-2.5 outline pb-1.5 pt-3 w-full text-sm text-gray-900 rounded-lg border-1 outline-slate-300 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600 peer focus:outline-none"
                                placeholder=" "
                              />
                              <label
                                htmlFor={`small_outlined_${index}`}
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                              >
                                {record.label}
                              </label>
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-outline btn-primary">
                              <a
                                style={{ display: "table-cell" }}
                                href="someLink"
                                target="_blank"
                              >
                                {record.view}
                              </a>
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => alert(record.id)}
                              className="btn btn-outline btn-error"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : "nothing to write"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
