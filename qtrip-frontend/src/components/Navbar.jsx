import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center text-white text-lg font-light bg-orange-500 p-[1%]">
      <div className="flex justify-around w-[10%]">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <div className="flex justify-around w-[40%]">
        <button onClick={() => navigate("/adventures")}>Adventures</button>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
}
