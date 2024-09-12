import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function DropDown({ setShow }) {
  const navigate = useNavigate();

  return (
    <div
      className=" absolute top-[8%]   right-[1%]   rounded-md "
      onBlur={() => setShow(false)}
    >
      <div className=" p-3 flex flex-col justify-between items-start text-white bg-orange-500 rounded-md m-1">
        <button
          className="hover:bg-green-700 p-2 text-[1.5vmax] rounded-lg"
          onClick={() => {
            navigate("/reservations");
            setTimeout(() => {
              setShow(false);
            }, 100);
          }}
        >
          Reservations
        </button>
        <button
          className="hover:bg-green-700 p-2 text-[1.5vmax] rounded-lg"
          onClick={() => {
            localStorage.clear();
            navigate("/");
            setTimeout(() => {
              setShow(false);
            }, 100);
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
