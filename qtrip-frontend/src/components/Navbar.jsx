import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <div className="flex justify-between items-center text-white text-[1.5vmax] font-medium bg-orange-500 p-[.6%]">
      <div className="flex justify-around w-[10%]">
        <button
          className="hover:bg-green-700 p-2 rounded-lg"
          onClick={() => {
            setShow(false);
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
      <div className="flex justify-around items-center w-[30%]">
        <button
          className="hover:bg-green-700 p-2 rounded-lg"
          onClick={() => {
            navigate("/adventures");
            setShow(false);
          }}
        >
          Adventures
        </button>
        {token ? (
          <div>
            <button
              className="hover:bg-green-700 p-2 rounded-lg"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
              User
            </button>
            {show && <DropDown setShow={setShow} />}
          </div>
        ) : (
          <button
            className="hover:bg-green-700 p-2 rounded-lg"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </button>
        )}
        {!token && <button onClick={() => navigate("/signup")}>Sign Up</button>}
      </div>
    </div>
  );
}
