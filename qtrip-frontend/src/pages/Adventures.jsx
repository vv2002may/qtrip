import { useEffect, useState } from "react";
import { ENDPOINT } from "../config/endpoint";
import axios from "axios";
import Adventure from "../components/Adventure";

export default function Adventures() {
  const [adventures, setAdventures] = useState([]);
  async function fetchAdventures() {
    const result = await axios.get(ENDPOINT + "/adventures");
    console.log(result.data);
    setAdventures(result.data);
  }

  useEffect(() => {
    fetchAdventures();
  }, []);

  return (
    <div className="grid grid-cols-4 ">
      {adventures.map((adventure, index) => {
        return <Adventure key={index} adventure={adventure} />;
      })}
    </div>
  );
}
