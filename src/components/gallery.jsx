import { useEffect, useState } from "react";

function Gallery() {
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
    <div className='card-container'>
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">{data.latin_name}</p>
        <p className="habitat">{data.habitat}</p>
        <p className="diet">{data.diet}</p>
        <p className="localization">{data.georange}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">{data.latin_name}</p>
        <p className="habitat">{data.habitat}</p>
        <p className="diet">{data.diet}</p>
        <p className="localization">{data.georange}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">{data.latin_name}</p>
        <p className="habitat">{data.habitat}</p>
        <p className="diet">{data.diet}</p>
        <p className="localization">{data.georange}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">{data.latin_name}</p>
        <p className="habitat">{data.habitat}</p>
        <p className="diet">{data.diet}</p>
        <p className="localization">{data.georange}</p>
      </card>
      
      <card>
        <img src={data.image_link}></img>
        <h1>{data.name}</h1>
        <p className="latinName">{data.latin_name}</p>
        <p className="habitat">{data.habitat}</p>
        <p className="diet">{data.diet}</p>
        <p className="localization">{data.georange}</p>
      </card>
    </div>
  );
}

export default Gallery;