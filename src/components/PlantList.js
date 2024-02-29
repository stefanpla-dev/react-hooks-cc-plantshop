import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">{/* render PlantCards components in here */
    plants.map((plant)=>
      <PlantCard 
        key={plant.id}
        id={plant.id}
        image={plant.image}
        name={plant.name}
        price={plant.price}
      />
    )}
    </ul>
  );
}

export default PlantList;
