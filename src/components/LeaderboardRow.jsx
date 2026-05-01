import React from "react";
import { getPlayerPoints } from "../utils/points";

export default function LeaderboardRow({ player, rank, onClick }) {
  const icons = {
    UHC: "/icons/uhc.png",
    SWORD: "/icons/sword.png",
    AXE: "/icons/axe.png",
    DIAPOT: "/icons/diapot.png",
    NETHPOT: "/icons/nethpot.png",
    MAZO: "/icons/mazo.png",
    CRYSTAL: "/icons/crystal.png",
    SMP: "/icons/smp.png",
  };

  const modeList = [
    "UHC", "SWORD", "AXE", "DIAPOT",
    "NETHPOT", "MAZO", "CRYSTAL", "SMP",
  ];

  const points = getPlayerPoints(player);

  return (
    <div className="lb-row" onClick={onClick}>
      {/* Banner de rank + skin 3D */}
      <div className={`lb-rank-banner rank-${rank}`}>
        <span className="lb-rank-number">{rank}</span>
        <img
          src={`https://render.crafty.gg/3d/bust/${player.name}`}
          alt={player.name}
          className="lb-avatar-3d"
        />
      </div>

      {/* Nombre */}
      <span className="lb-name">{player.name}</span>

      {/* Puntos */}
      <span className="lb-points">{points} pts</span>

      {/* Tiers */}
      <div className="lb-modes">
        {modeList.map((mode) => {
          const tier = player.modes?.[mode] || "";
          const cls = tier ? tier.trim().toLowerCase() : "";

          return (
            <div key={mode} className="lb-mode-item">
              <div className={`lb-icon-circle ${cls}`}>
                <img src={icons[mode]} className="lb-mode-icon" />
              </div>

              <div className={`lb-tier-circle ${cls}`}>
                <span className={`lb-tier-text ${cls}`}>{tier}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
