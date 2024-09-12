import { ENDPOINT } from "../config/endpoint";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Reservation({ reservation, fetchReservations }) {
  const navigate = useNavigate();

  async function handleCancel() {
    await axios
      .post(
        ENDPOINT + "/reservations/cancel",
        {
          reservationsId: reservation._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        fetchReservations();
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  async function handleDelete() {
    await axios
      .delete(ENDPOINT + "/reservations/delete", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          reservationsId: reservation._id,
        },
      })
      .then((result) => {
        fetchReservations();
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  async function handlePerson({ addPerson }) {
    await axios
      .post(
        ENDPOINT + "/reservations/add",
        {
          reservationsId: reservation._id,
          addPerson,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        fetchReservations();
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error(
          err.response.data.message + " Please, try again after signin!"
        );
      });
  }

  return (
    <div className="flex flex-col justify-between shadow-lg bg-slate-200 text-white font-extralight m-[5%] p-[1%] h-[97%] rounded">
      <img
        className="h-[250px] w-[500px] rounded "
        src={reservation.adventureId.image}
      />
      <div className="bg-green-700 rounded p-[2%]">
        <p>Name : {reservation.adventureId.name}</p>
        <p>City : {reservation.adventureId.city}</p>
        <p>Duration : {reservation.adventureId.duration} days</p>
        <p>Category : {reservation.adventureId.category}</p>
        <p>
          Price :{" "}
          {reservation.adventureId.costPerHead +
            " " +
            reservation.adventureId.currency}
          /person
        </p>
        <p className="flex justify-start items-center">
          Person :{" "}
          <button
            className=" flex justify-center items-center bg-orange-600 rounded font-bold p-2 m-2 h-7"
            onClick={()=>handlePerson({addPerson:true})}
          >
          ＋
          </button>
          {reservation.person}
          <button
            className=" flex justify-center items-center bg-orange-600 rounded font-bold p-2 m-2 h-7"
            onClick={()=>handlePerson({addPerson:false})}
          >
            －
          </button>
        </p>
        <p>Total price : { reservation.person*reservation.adventureId.costPerHead +" "+
            reservation.adventureId.currency} </p>
        <p className="bg-orange-600 rounded p-1">
          Booking Status : {reservation.isCancelled ? "Cancelled" : "Confirmed"}
        </p>
      </div>
      <button
        className="bg-black p-1 rounded"
        onClick={() => {
          handleCancel();
        }}
      >
        {reservation.isCancelled ? "Book Again" : "Cancel Booking"}
      </button>
      <button
        className="bg-black p-1 rounded"
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
}
