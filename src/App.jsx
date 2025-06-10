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
    </>
  )
}

export default App