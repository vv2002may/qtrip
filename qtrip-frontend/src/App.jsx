import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities";
import Navbar from "./components/Navbar";
import Adventures from "./pages/Adventures";
import Signin from "./pages/Signin";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <ToastContainer/> */}
        <Routes>
          <Route path="/" element={<Cities />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}