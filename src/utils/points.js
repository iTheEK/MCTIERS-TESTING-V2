export function getTierPoints(tier) {
  if (!tier) return 0;

  const t = tier.trim().toUpperCase();

  const table = {
    HT1: 60,
    LT1: 45,
    HT2: 30,
    LT2: 20,
    HT3: 10,
    LT3: 6,
    HT4: 4,
    LT4: 3,
    HT5: 2,
    LT5: 1,

    RHT1: 60,
    RLT1: 45,
    RHT2: 30,
    RLT2: 20
  };

  return table[t] || 0;
}

export function getPlayerPoints(player) {
  let total = 0;

  for (const mode in player.modes) {
    total += getTierPoints(player.modes[mode]);
  }

  return total;
}
