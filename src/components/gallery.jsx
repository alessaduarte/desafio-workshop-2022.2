import { useEffect, useState } from "react";

function Gallery() {
  const [data, setAnimals] = useState("Animals");

  useEffect(() => {
    getAnimals();
    setAnimals(data.slice(0,5))
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
    <div className='card-container'>
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">Latin Name: {data.latin_name}</p>
        <p className="habitat">Habitat: {data.habitat}</p>
        <p className="diet">Diet: {data.diet}</p>
        <p className="localization">Location: {data.geo_range}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">Latin Name: {data.latin_name}</p>
        <p className="habitat">Habitat: {data.habitat}</p>
        <p className="diet">Diet: {data.diet}</p>
        <p className="location">Location: {data.geo_range}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">Latin Name: {data.latin_name}</p>
        <p className="habitat">Habitat: {data.habitat}</p>
        <p className="diet">Diet: {data.diet}</p>
        <p className="location">Location: {data.geo_range}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">Latin Name: {data.latin_name}</p>
        <p className="habitat">Habitat: {data.habitat}</p>
        <p className="diet">Diet: {data.diet}</p>
        <p className="location">Location: {data.geo_range}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">Latin Name: {data.latin_name}</p>
        <p className="habitat">Habitat: {data.habitat}</p>
        <p className="diet">Diet: {data.diet}</p>
        <p className="location">Location: {data.geo_range}</p>
      </card>
    </div>
  );
}

export default Gallery;