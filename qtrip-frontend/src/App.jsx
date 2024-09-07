import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities";
import Navbar from "./components/Navbar";
import Adventures from "./pages/Adventures";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import "./App.css"
import Reservations from "./pages/Reservations";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Cities />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
