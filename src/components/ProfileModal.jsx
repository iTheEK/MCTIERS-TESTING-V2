import React from "react";

export default function ProfileModal({ player, onClose }) {
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

  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-card" onClick={(e) => e.stopPropagation()}>

        {/* AVATAR */}
<img
  src={`https://render.crafty.gg/3d/bust/${player.name}`}
  className="pm-avatar"
/>

        {/* NOMBRE */}
        <h2 className="pm-name">{player.name}</h2>

        {/* POSITION BANNER (ABAJO DEL NOMBRE) */}
        <div className={`pm-rank-banner rank-${player.rank}`}>
          <span className="pm-rank-number">{player.rank}.</span>
          <span className="pm-rank-trophy">🏆</span>
          <span className="pm-rank-text">
            OVERALL ({player.points} points)
          </span>
        </div>

        {/* MODALIDADES */}
        <div className="pm-modes">
          {modeList.map((mode) => {
            const tier = player.modes?.[mode] || "";
            const cls = tier ? tier.trim().toLowerCase() : "";

            return (
              <div key={mode} className="pm-mode-item">

                {/* ICONO */}
                <div className={`pm-icon-circle ${cls}`}>
                  <img src={icons[mode]} className="pm-mode-icon" />
                </div>

                {/* CÍRCULO DEL TIER */}
                <div className={`pm-tier-circle ${cls}`}>
                  <span className={`pm-tier-text ${cls}`}>{tier}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
