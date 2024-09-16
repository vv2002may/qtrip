import { useEffect, useState } from "react";
import { ENDPOINT } from "../config/endpoint";
import axios from "axios";
import Adventure from "../components/Adventure";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Adventures() {
  const [adventures, setAdventures] = useState([]);
  const { register, handleSubmit } = useForm();
  

  async function fetchAdventures(formData) {
    await axios
      .get(
        ENDPOINT +
          `/adventures?q=${formData.adventure ? formData.adventure : ""}`
      )
      .then((result) => {
        setAdventures(result.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    fetchAdventures({});
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit(fetchAdventures)}>
        <input
          {...register("adventure")}
          className=" border-none outline-double  rounded-md mt-3 mr-2 p-2 w-60"
          type="text"
          placeholder="Enter a adventure"
        />
        <button className=" text-lg outline-none" type="submit">
          Search
        </button>
      </form>
      <div className="grid grid-cols-4 ">
        {adventures.map((adventure, index) => {
          return <Adventure key={index} adventure={adventure} />;
        })}
      </div>
    </div>
  );
}
