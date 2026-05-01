import React from "react";
import LeaderboardRow from "./LeaderboardRow";
import players from "../players.json";
import { getPlayerPoints } from "../utils/points";

export default function Leaderboard({ onSelectPlayer }) {
  const sorted = [...players].sort((a, b) => {
    return getPlayerPoints(b) - getPlayerPoints(a);
  });

  return (
    <div className="lb-container">
      {sorted.map((p, index) => (
        <LeaderboardRow
          key={p.name}
          player={p}
          rank={index + 1}
          onClick={() => onSelectPlayer({
  ...p,
  rank: index + 1,
  points: getPlayerPoints(p)
})}

        />
      ))}
    </div>
  );
}
