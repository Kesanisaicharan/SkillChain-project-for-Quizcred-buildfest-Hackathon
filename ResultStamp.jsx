import { useEffect, useState } from "react";
import { IconStamp, IconArrowRight } from "./icons";
import { simulateMint } from "../lib/chain";

const STAGES = {
  SCORE: "score",
  MINTING: "minting",
  STAMPED: "stamped",
};

export default function ResultStamp({ topic, correct, total, onContinue }) {
  const [stage, setStage] = useState(STAGES.SCORE);
  const [mint, setMint] = useState(null);
  const passed = correct / total >= 0.6;

  useEffect(() => {
    if (stage === STAGES.MINTING) {
      const t = setTimeout(() => {
        setMint(simulateMint());
        setStage(STAGES.STAMPED);
      }, 1600);
      return () => clearTimeout(t);
    }
  }, [stage]);

  if (stage === STAGES.SCORE) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-paper/50 font-mono text-xs uppercase tracking-[0.2em] mb-4">
          {topic.label} — Results
        </p>
        <div className="font-display text-6xl font-bold text-paper mb-2">
          {correct}<span className="text-paper/30">/{total}</span>
        </div>
        <p className="text-paper/60 mb-10">
          {passed
            ? "Nice work — that's badge-worthy."
            : "Close, but not quite badge-worthy this time."}
        </p>

        {passed ? (
          <button
            onClick={() => setStage(STAGES.MINTING)}
            className="bg-gold text-ink font-display font-semibold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gold/90 transition"
          >
            Mint my badge
            <IconArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => onContinue(null)}
            className="bg-ink-light text-paper font-display font-semibold px-8 py-3 rounded-lg border border-paper/15 hover:bg-ink-light/70 transition"
          >
            Back to topics
          </button>
        )}
      </div>
    );
  }

  if (stage === STAGES.MINTING) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <IconStamp className="w-20 h-20 text-gold/40 animate-bounce" />
        </div>
        <p className="text-paper/50 font-mono text-sm mt-6 tracking-wide">
          Minting credential on-chain…
        </p>
      </div>
    );
  }

  // STAMPED
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-6 animate-[stampIn_0.45s_cubic-bezier(0.34,1.56,0.64,1)]">
        <div className="w-32 h-32 rounded-full border-4 border-gold flex items-center justify-center rotate-[-8deg] shadow-[0_0_40px_rgba(242,183,5,0.25)]">
          <div className="text-center">
            <IconStamp className="w-8 h-8 text-gold mx-auto mb-1" />
            <p className="text-gold font-display font-bold text-[10px] uppercase tracking-wider leading-tight">
              Verified<br />Credential
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-paper">
        {topic.label} badge minted
      </h2>
      <p className="text-paper/50 text-sm mt-2 mb-6">
        Score: {correct}/{total} &middot; Added to your Career Passport
      </p>

      <div className="bg-ink-light/60 border border-paper/10 rounded-xl px-5 py-4 text-left w-full max-w-sm font-mono text-xs space-y-1.5">
        <div className="flex justify-between gap-4">
          <span className="text-paper/40">Network</span>
          <span className="text-paper/80">{mint.network}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-paper/40">Token ID</span>
          <span className="text-paper/80">#{mint.tokenId}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-paper/40">Tx hash</span>
          <span className="text-paper/80 truncate max-w-[180px]" title={mint.txHash}>
            {mint.txHash.slice(0, 14)}…
          </span>
        </div>
      </div>

      <button
        onClick={() => onContinue({ topic, correct, total, mint })}
        className="mt-8 bg-cyan text-ink font-display font-semibold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan/90 transition"
      >
        View Career Passport
        <IconArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
