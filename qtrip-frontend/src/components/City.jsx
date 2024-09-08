import axios from "axios";
import { ENDPOINT } from "../config/endpoint";
import { toast } from "react-toastify";
import { useState } from "react";
import Adventure from "./Adventure";
import EmptyResult from "../components/EmptyResult";

export default function City({ city }) {
  const [cityAdventures, setCityAdventures] = useState([]);
  const [show, setShow] = useState(false);

  async function fetchCityAdventures() {
    await axios
      .get(ENDPOINT + `/adventures?city=${city.city}`)
      .then((result) => {
        console.log(result.data);
        setCityAdventures(result.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    setShow(true);
  }

  return (
    <div className="flex flex-col justify-between shadow-lg  bg-slate-100 text-[1.2vmax] text-white font-[400] m-[5%] p-[1%] h-[20.5rem] rounded ">
      {show && cityAdventures.length > 0 && (
        <div className={" fixed top-2 right-1 left-1 h-[98vh] backdrop-blur-lg rounded-md overflow-auto p-2"}>
          <div className="flex justify-between items-center bg-slate-300 rounded-md text-black m-1">
            <p className="ml-7 text-[1.7vmax]">Adventures for {city.city}</p>
            <button
              className="text-[2vmax] font-extrabold mr-5"
              onClick={() => {
                setShow(false);
              }}
            >
              ⤫
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {cityAdventures.map((adventure, index) => {
              return <Adventure key={index} adventure={adventure} />;
            })}
          </div>
        </div>
      )}
      <img
        className="h-[250px] w-[500px] rounded cursor-pointer "
        onClick={fetchCityAdventures}
        src={city.image}
      />
      <div className="bg-green-700 rounded p-[2%]">
        <p>City : {city.city}</p>
        <p>Description : {city.description}</p>
      </div>
    </div>
  );
}
