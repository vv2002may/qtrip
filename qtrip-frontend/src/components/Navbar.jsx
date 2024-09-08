import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import DropdownRender from "./DropdownRender";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="flex justify-between items-center text-white text-[1.5vmax] font-medium bg-orange-500 p-[.6%]">
      <div className="flex justify-around w-[10%]">
        <button
          className="hover:bg-green-700 p-2 rounded-lg"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
      <div className="flex justify-around items-center w-[30%]">
        <button
          className="hover:bg-green-700 p-2 rounded-lg"
          onClick={() => navigate("/adventures")}
        >
          Adventures
        </button>
        {token ? (
          <DropDown />
        ) : (
          <button
            className="hover:bg-green-700 p-2 rounded-lg"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        )}
        {!token && <button onClick={() => navigate("/signup")}>Sign Up</button>}
      </div>
    </div>
  );
}
