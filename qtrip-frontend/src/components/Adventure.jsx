import axios from "axios";
import { ENDPOINT } from "../config/endpoint";
import { toast } from "react-toastify";

export default function Adventure({ adventure }) {
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
        toast.error(err.response.data.message);
      });
  }

  return (
    <div className="flex flex-col justify-between shadow-lg bg-slate-100 text-white text-[1.2vmax] font-[400] m-[5%] p-[1%] h-[29rem] rounded">
      <img className="h-[250px] w-[500px] rounded " src={adventure.image} />
      <div className="bg-green-700 rounded p-[2%]">
        <p>Name : {adventure.name}</p>
        <p>Id : {adventure.id}</p>
        <p>City : {adventure.city}</p>
        <p>Duration : {adventure.duration} days</p>
        <p>Category : {adventure.category}</p>
        <p>Price : {adventure.costPerHead + " " + adventure.currency}/person</p>
      </div>
      <button className="bg-black" onClick={handleCart}>
        Add To Cart
      </button>
    </div>
  );
}
