import "./App.css";
import Dashbord from "./component/dashbord";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-5 gap-4">
        <div>
          <Sidebar />
        </div>

        <div class="col-span-4 ">
          <Dashbord />
        </div>
      </div>
    </div>
  );
}

export default App;
