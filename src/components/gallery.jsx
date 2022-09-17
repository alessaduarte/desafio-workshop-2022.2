import { useEffect, useState } from "react";

function Gallery() {
  const [animal, setAnimal] = useState("Animals");

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setAnimal(data.animal);
  };

  return (
    <div className='container'>
      <h1></h1>
      <p className="animal">{animal}</p>
      <img src="image_link"></img>
      <button className="btn" onClick={getAnimal}>Get Another Animal</button>
    </div>
  );
}

export default Gallery;