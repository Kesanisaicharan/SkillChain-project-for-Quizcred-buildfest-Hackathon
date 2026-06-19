// Simulated blockchain layer for demo purposes.
// Real implementation would call Solidity smart contracts on Polygon (see PPT slide 6/7).
// This generates a believable, deterministic-looking hash so the demo flow
// can show the "Blockchain Mint" step without a live chain dependency.

function randomHex(length) {
  const chars = "0123456789abcdef";
  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

export function simulateMint() {
  return {
    txHash: "0x" + randomHex(64),
    tokenId: Math.floor(Math.random() * 900000 + 100000),
    network: "Polygon (Simulated)",
    timestamp: new Date().toISOString(),
  };
}

export function simulateVerifyCode(learnerName, badgeIds) {
  const seed = (learnerName || "guest") + badgeIds.join("-");
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return "SKC-" + hash.toString(36).toUpperCase().slice(0, 8);
}
