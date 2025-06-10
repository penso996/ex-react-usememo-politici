import { useState, useEffect } from "react";

function App() {

  const [politician, setPoliticians] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3333/politicians');
      const data = await response.json();
      setPoliticians(data);
      console.log('Dati ricevuti:', data);
    } catch (error) {
      console.error('Errore:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  // RENDER
  return (
    <>
      {politician.map(politician => {
        return (
          <div className="politician" key={politician.id}>
            <h3>{politician.name}</h3>
            <img src={politician.image} alt={politician.name} />
            <h5>{politician.position}</h5>
            <p>{politician.biography}</p>
          </div>
        )
      })}
    </>
  )
}

export default App