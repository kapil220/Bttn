import catalogs from "../assets/catalogs.png";
import shoppingslist from "../assets/shoppingslist.png";
import bulkuploads from "../assets/bulkuploads.png";
import accountsrecords from "../assets/accountsrecords.png";
import salessummary from "../assets/salessummary.png";
import backorder from "../assets/backorder.png";
import cart from "../assets/cart.png";
import marginexception from "../assets/marginexception.png";
import orders from "../assets/orders.png";
import salesdetails from "../assets/salesdetails.png";
import logout from "../assets/logout.png";

function Sidebar() {
  const navbarHeight = 60;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        </div>
        <div className="drawer-side" style={{ zIndex: "1050" }}>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-200 text-blue-950 font-medium text-xg">
            {/* Sidebar content here */}
            <div className="flex flex-col space-y-4">
              <li>
                <div>
                  <img src={catalogs} className="h-6 w-6 text-blue-950" />
                  <a>Catalogs</a>
                </div>
              </li>
              <li>
                <div>
                  <img src={shoppingslist} className="h-6 w-6 text-blue-950" />
                  <a>Shopping Lists</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={bulkuploads}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Bulk Uploads</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={salessummary}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>sales summary</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={salesdetails}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Sales Details</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={marginexception}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Margin Exception</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={orders}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Orders</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={backorder}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Back Orders</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src={accountsrecords}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Account Records</a>
                </div>
              </li>
              <li>
                <div>
                  <img src={cart} className="h-6 w-6 text-blue-950" alt="kk" />
                  <a>Carts</a>
                </div>
              </li>
              <li className="absolute insert-x-0 bottom-20">
                <div>
                  <img
                    src={logout}
                    className="h-6 w-6 text-blue-950"
                    alt="kk"
                  />
                  <a>Logout</a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
