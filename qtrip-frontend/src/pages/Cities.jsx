import { useEffect, useState } from "react";
import { ENDPOINT } from "../config/endpoint";
import City from "../components/City";
import axios from "axios";

export default function Cities() {
  const [cities, setCities] = useState([]);
  async function fetchCities() {
    const result = await axios.get(ENDPOINT + "/cities");
    console.log(result.data);
    setCities(result.data);
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="grid grid-cols-4  ">
      {cities.map((city, index) => {
        return <City key={index} city={city} />;
      })}
    </div>
  );
}
