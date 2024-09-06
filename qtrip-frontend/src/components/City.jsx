export default function City({ city }) {
  return (
    <div className="flex flex-col justify-between shadow-lg bg-slate-200 text-white font-extralight m-[5%] p-[1%] h-[20.5rem] rounded">
      <img className="h-[250px] w-[500px] rounded " src={city.image} />
      <div className="bg-green-700 rounded p-[2%]">
        <p>City : {city.city}</p>
        <p>Description : {city.description}</p>
      </div>
    </div>
  );
}
