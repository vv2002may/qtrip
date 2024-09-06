export default function Adventure({ adventure }) {
  return (
    <div className="flex flex-col justify-between shadow-lg bg-slate-200 text-white font-extralight m-[5%] p-[1%] h-[25.5rem] rounded">
      <img className="h-[250px] w-[500px] rounded " src={adventure.image} />
      <div className="bg-green-900 rounded p-[2%]">
        <p>Name : {adventure.name}</p>
        <p>City : {adventure.city}</p>
        <p>Duration : {adventure.duration} days</p>
        <p>Category : {adventure.category}</p>
        <p>Price : {adventure.costPerHead + " " + adventure.currency}/person</p>
      </div>
    </div>
  );
}
