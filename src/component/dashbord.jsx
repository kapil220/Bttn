import Dropdown from "./design/dropdown";
import Modal from "./design/modal";

function Dashbord() {
  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title">Account Records</div>
        <hr />
        <div className="grid grid-cols-3 ">
          <div>
            {" "}
            <Dropdown />
          </div>

          <div></div>
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
                {/* row 1 */}
                <tr>
                  <td>LMZ033243434343</td>
                  <td>1.12MB</td>
                  <td>05-22-2024</td>
                  <td>marijab.sandar@gmail.com</td>
                  <td>1.12MB</td>
                  <td>
                    <button>View</button>
                  </td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>LMZ033243434343</td>
                  <td>1.12MB</td>
                  <td>05-22-2024</td>
                  <td>marijab.sandar@gmail.com</td>
                  <td>1.12MB</td>
                  <td>
                    <button>View</button>
                  </td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
