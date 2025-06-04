import { useEffect, useState } from "react";
import { fetchBirdData } from "./services/birdApi";
import BirdCard from "./components/BirdCard";

const birdNames = [
  "Lechuza",
  "Leistes militaris",
  "Agelaius",
  "Golondrina",
  "Cóndor",
  "Tucán",
  "Papagayo",
  "Chincol",
  "Pato Yeco",
  "Huala",
  "Melanerpes erythrocephalus",
];

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const fetchAllBirds = async () => {
      const birdData = await Promise.all(birdNames.map(fetchBirdData));
      setBirds(birdData.filter(Boolean));
    };
    fetchAllBirds();
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.4rem",
          margin: "0.1rem 0 1rem 0",
          color: "#ffffff",
        }}
      >
        <span style={{ color: "goldenrod" }}>Bird</span>Dex
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {birds.map((bird, idx) => (
          <BirdCard key={idx} bird={bird} />
        ))}
      </div>
    </div>
  );
}

export default App;
