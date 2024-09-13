import { useEffect, useState } from "react";
import { ENDPOINT } from "../config/endpoint";
import City from "../components/City";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const { register, handleSubmit } = useForm();

  async function fetchCities(formData) {
    await axios
      .get(ENDPOINT + `/cities?q=${formData.city ? formData.city:""}`)
      .then((result) => {
        setCities(result.data);
      })
      .catch((err) => {toast.error(err.response.data.message)});
  }
  

  useEffect(() => {
    fetchCities({});
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit(fetchCities)}>
        <input
          {...register("city")}
          className=" border-none outline-double  rounded-md mt-3 mr-2 p-2 w-60"
          type="text"
          placeholder="Enter a city"
        />
        <button className=" text-lg outline-none" type="submit">
          Search
        </button>
      </form>
      <div className="grid grid-cols-4  ">
        {cities.map((city, index) => {
          return <City key={index} city={city} />;
        })}
      </div>
    </div>
  );
}
