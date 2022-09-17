import { useEffect, useState } from "react";

function Animals() {
  const [data, setAnimals] = useState("Animals");

  useEffect(() => {
    getAnimals();
  }, []);

  for(let i = 0; i <= data.length; i++) {

  }

  const getAnimals = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setAnimals(data);
  };

  return (
    <div className='container'>
      <img src="{image_link}"></img>
      <h1>{name}</h1>
      <p className="latinName">{latin_name}</p>
      <p className="habitat">{habitat}</p>
      <p className="diet">{diet}</p>
      <p className="localization">{geo_range}</p>
      <button className="btn" onClick={getAnimals}>Get Another Animal</button>
    </div>
  );
}

export default Animals;