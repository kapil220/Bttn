import "./App.css";
import Dashbord from "./component/dashbord";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div class="grid grid-rows-3 grid-flow-col gap-4 space-y-5 -space-x-5  bg-indigo-100">
        <div className="row-span-3">
          <Sidebar />
        </div>

        <div class="col-span-10 content-center">
          <Dashbord />
        </div>
      </div>
    </div>
  );
}

export default App;
