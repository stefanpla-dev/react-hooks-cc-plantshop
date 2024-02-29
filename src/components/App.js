import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then(response=>response.json())
    .then(data=>{
      setPlants(data)
      console.log(data)
    })}, 
  []);

  const filteredPlants = plants.filter((plant)=> {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} setPlants={setPlants} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
