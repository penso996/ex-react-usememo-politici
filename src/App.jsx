import React, { useState, useEffect, useMemo } from "react";

function PoliticianCard({ name, image, position, biography }) {
  console.log("Card");
  return (
    <div className="politician">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <h5>{position}</h5>
      <p>{biography}</p>
    </div>
  )
}

const MemoPoliticianCard = React.memo(PoliticianCard);

function App() {

  const [politicians, setPoliticians] = useState([]);
  const [filter, setFilter] = useState("");

  // function to fetch politicians data
  function fetchData() {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error));
  }

  // useEffect to fetch politician data
  useEffect(() => {
    fetchData();
  }, []);

  // function to handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  // filter politicians
  const filteredPoliticians = useMemo(() => {
    return politicians.filter(politician => {
      const name = politician.name.toLowerCase().includes(filter.toLowerCase());
      const bio = politician.biography.toLowerCase().includes(filter.toLowerCase());
      return name || bio;
    })
  }, [politicians, filter])


  // RENDER
  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />

      {filteredPoliticians.map(politician => (
        <MemoPoliticianCard key={politician.id} {...politician} />
      ))}
    </>
  )
}

export default App