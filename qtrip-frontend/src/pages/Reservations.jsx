import Reservation from "../components/Reservation";
import { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINT } from "../config/endpoint";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EmptyResult from "../components/EmptyResult";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();
  async function fetchReservations() {
    await axios
      .get(ENDPOINT + "/reservations", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((result) => {
        setReservations(result.data);
      })
      .catch((err) => {
        localStorage.clear();
        navigate("/");
        toast.error(err.response.data.message);
      });
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4">
      {reservations.length > 0 &&
        reservations.map((reservation, index) => {
          return <Reservation key={index} fetchReservations={fetchReservations} reservation={reservation} />;
        })}
      </div>
      {
        reservations.length == 0 && 
        <EmptyResult/>
      }
    </div>
  );
}
