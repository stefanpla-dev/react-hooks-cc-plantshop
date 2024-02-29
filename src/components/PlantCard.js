import React, { useState } from "react";

function PlantCard({ id, image, name, price }) {
  const [availability, setAvailability] = useState("true")

  function handleClick() {
    setAvailability(!availability)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {availability ? 
      (<button onClick={handleClick} className="primary">In Stock</button>) :
      (<button onClick={handleClick}>Out of Stock</button>)
      }
    </li>
  );
}

export default PlantCard;
