import { useEffect, useState } from "react";

function Animals() {
  const [data, setAnimals] = useState("Animals");

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setAnimals(data);
  };

  return (
    <div className='container'>
      <img src={data.image_link}></img>
      <h1>{data.name}</h1>
      <p className="latinName">Latin name: {data.latin_name}</p>
      <p className="habitat">Habitat: {data.habitat}</p>
      <p className="diet">Diet: {data.diet}</p>
      <p className="location">Location: {data.geo_range}</p>
      <button className="btn" onClick={getAnimals}>Get Another Animal</button>
    </div>
  );
}

export default Animals;