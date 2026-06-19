import { TOPIC_ICONS, IconQR, IconCheck } from "./icons";
import { simulateVerifyCode } from "../lib/chain";

const accentMap = {
  cyan: { text: "text-cyan", border: "border-cyan/40", bg: "bg-cyan/10" },
  gold: { text: "text-gold", border: "border-gold/40", bg: "bg-gold/10" },
  mint: { text: "text-mint", border: "border-mint/40", bg: "bg-mint/10" },
};

export default function Passport({ name, badges, onAddMore }) {
  const verifyCode = simulateVerifyCode(name, badges.map((b) => b.mint.tokenId));

  return (
    <div className="min-h-screen px-6 py-12 max-w-2xl mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-cyan font-mono text-xs uppercase tracking-[0.2em] mb-1">
            Career Passport
          </p>
          <h2 className="font-display text-3xl font-bold text-paper">{name}</h2>
          <p className="text-paper/40 text-xs font-mono mt-1">
            {badges.length} verified credential{badges.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="w-14 h-14 bg-paper text-ink rounded-lg flex items-center justify-center mb-1 ml-auto">
            <IconQR className="w-9 h-9" />
          </div>
          <p className="text-paper/30 text-[10px] font-mono">{verifyCode}</p>
        </div>
      </div>

      {badges.length === 0 ? (
        <div className="border border-dashed border-paper/15 rounded-xl p-10 text-center text-paper/40">
          No badges yet — complete a quiz to earn your first stamp.
        </div>
      ) : (
        <div className="grid gap-3 mb-8">
          {badges.map((b, i) => {
            const Icon = TOPIC_ICONS[b.topic.icon];
            const accent = accentMap[b.topic.accent];
            return (
              <div
                key={i}
                className={`flex items-center gap-4 p-4 rounded-xl border ${accent.border} bg-ink-light/40`}
              >
                <div className={`w-11 h-11 rounded-lg ${accent.bg} flex items-center justify-center ${accent.text} flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-paper text-sm">
                    {b.topic.label}
                  </h3>
                  <p className="text-paper/40 text-xs font-mono mt-0.5">
                    Score {b.correct}/{b.total} &middot; Token #{b.mint.tokenId} &middot; {b.mint.network}
                  </p>
                </div>
                <span className="flex items-center gap-1 text-mint text-xs font-mono flex-shrink-0">
                  <IconCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onAddMore}
          className="flex-1 bg-cyan text-ink font-display font-semibold py-3 rounded-lg hover:bg-cyan/90 transition"
        >
          Earn another badge
        </button>
        <button
          disabled
          title="Demo build — sharing disabled"
          className="px-5 py-3 rounded-lg border border-paper/15 text-paper/40 font-display text-sm cursor-not-allowed"
        >
          Share to LinkedIn
        </button>
      </div>
    </div>
  );
}
