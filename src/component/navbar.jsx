import React from "react";
import logo from "../assets/logo.webp";

function Navbar() {
  return (
    <div className="w-full navbar bg-base-300 bg-blue-950">
      {/* Page content here */}

      <label
        htmlFor="my-drawer-2"
        className="btn btn-circle btn-outline text-white drawer-button lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>

      <img src={logo} alt="Logo" className="h-10" />
      <div className="flex-1 px-2 mx-2 text-white font-bold text-5xl">bttn</div>
    </div>
  );
}

export default Navbar;
