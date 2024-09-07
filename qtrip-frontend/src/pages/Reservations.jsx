import Reservation from "../components/Reservation";
import { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINT } from "../config/endpoint";
import { toast } from "react-toastify";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  async function fetchReservations() {
    await axios
       .get(ENDPOINT + "/reservations", {
         headers: {
          Authorization:"Bearer "+localStorage.getItem("token")
        }
      })
      .then((result) => {
        setReservations(result.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {reservations.length>0 && reservations.map((reservation, index) => {
        return <Reservation key={index} reservation={reservation} />;
      })}
    </div>
  );
}
