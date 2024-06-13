import logo from "../assets/logo.webp";
function Navbar() {
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300 bg-blue-950">
            <img src={logo} alt="bttn" />
            <div className="flex-1 px-2 mx-2 text-white font-bold text-5xl">
              bttn
            </div>
          </div>
          {/* Page content here */}
          <div className="grid grid-cols-1 gap-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
