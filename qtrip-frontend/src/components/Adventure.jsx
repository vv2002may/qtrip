import axios from "axios";
import { ENDPOINT } from "../config/endpoint";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRef, useEffect } from "react";


export default function Adventure({ adventure}) {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);

  async function handleCart() {
    await axios
      .post(
        ENDPOINT + "/reservations/new",
        {
          adventureId: adventure.id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message + " Please, try again after signin!");
      });
  }

  return (
    <div className="flex flex-col justify-between shadow-lg bg-slate-100 text-white text-[1.2vmax] font-[400] m-[5%] p-[1%] h-[23.5rem] rounded">
      {show && (
        <div
          className="fixed top-[10%] left-[17%] right-[19%] h-[70vh] backdrop-blur-lg rounded-md overflow-auto p-2"
          tabIndex={0}
          ref={modalRef}
          onBlur={() => setShow(false)}
        >
          <div className="flex justify-between items-center bg-slate-300 rounded-md text-black m-1">
            <p className="ml-7 text-[1.7vmax]">Adventure : {" "+ adventure.name}</p>
            <button
              className="text-[2vmax] font-extrabold mr-5"
              onClick={() => {
                setShow(false);
              }}
            >
              ⤫
            </button>
          </div>
          <div className="grid grid-cols-2 gap-9 m-10">
            <img
              className="h-[350px] w-[500px] rounded"
              src={adventure.image}
            />
            <div className="bg-green-300 text-black flex flex-col justify-between w-[100%] rounded p-[2%] text-[1.5vmax]">
              <p>Name : {adventure.name}</p>
              <p>Id : {adventure.id}</p>
              <p>City : {adventure.city}</p>
              <p>Duration : {adventure.duration} days</p>
              <p>Category : {adventure.category}</p>
              <p>
                Price : {adventure.costPerHead + " " + adventure.currency}
                /person
              </p>
              <button
                className="bg-black text-white rounded p-1"
                onClick={handleCart}
              >
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      )}
      <img
        className="h-[250px] w-[500px] rounded "
        src={adventure.image}
        onClick={() => {
          setShow(true);
        }}
      />
      <div className="bg-green-700 rounded p-[2%]">
        <p>Name : {adventure.name}</p>
        {/* <p>Id : {adventure.id}</p> */}
        {/* <p>City : {adventure.city}</p> */}
        {/* <p>Duration : {adventure.duration} days</p> */}
        {/* <p>Category : {adventure.category}</p> */}
        <p>Price : {adventure.costPerHead + " " + adventure.currency}/person</p>
      </div>
      <button className="bg-black rounded p-1" onClick={handleCart}>
        Make Reservation
      </button>
    </div>
  );
}
