export default function Reservation({ reservation }) {
  return (
    <div className="flex flex-col justify-between shadow-lg bg-slate-200 text-white font-extralight m-[5%] p-[1%] h-[30.5rem] rounded">
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
        <p>Person : {reservation.person}</p>
        <p>isCancelled : {reservation.isCancelled ? "True" : "False"}</p>
      </div>
      <button className="bg-black p-1">Delete</button>
    </div>
  );
}
