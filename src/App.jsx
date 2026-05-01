import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Leaderboard from "./components/Leaderboard";
import ProfileModal from "./components/ProfileModal";
import players from "./players.json";
import { getPlayerPoints } from "./utils/points";

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

function handleSearch(name) {
  if (!name) return;

  const found = players.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (found) {
    // ORDENAR EL LEADERBOARD PARA CALCULAR LA POSICIÓN REAL
    const sorted = [...players].sort(
      (a, b) => getPlayerPoints(b) - getPlayerPoints(a)
    );

    const rank = sorted.findIndex(p => p.name === found.name) + 1;

    setSelectedPlayer({
      ...found,
      rank,
      points: getPlayerPoints(found)
    });

  } else {
    alert("Jugador no encontrado");
  }
}

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />

      <Leaderboard onSelectPlayer={setSelectedPlayer} />

      {selectedPlayer && (
        <ProfileModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
}
