import React, { useState } from "react";
import "./App.css";
import FileManagement from "./component/filemanagement"; // Adjust the import path as necessary
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="grid grid-rows-3 grid-flow-col gap-4 space-y-5 -space-x-5 bg-indigo-100 bg-repeat">
        <div className="row-span-3">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="col-span-10 content-center">
          <FileManagement />
        </div>
      </div>
    </div>
  );
}

export default App;
