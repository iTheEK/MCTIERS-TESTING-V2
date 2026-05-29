<div className={`lb-row rank-${rank}`} onClick={onClick}>
  
  <div className={`lb-rank-banner rank-${rank}`}>
    <span className="lb-rank-number">{rank}</span>

    <img
      src={`https://render.crafty.gg/3d/bust/${player.name}`}
      alt={player.name}
      className="lb-avatar-3d"
    />
  </div>

  <span className="lb-name">{player.name}</span>

  <span className="lb-points">{points} pts</span>

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
