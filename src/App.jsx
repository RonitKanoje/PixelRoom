import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import PagesCollection from "./pages/PagesCollection";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-amber-50">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/collection" element={<PagesCollection />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
