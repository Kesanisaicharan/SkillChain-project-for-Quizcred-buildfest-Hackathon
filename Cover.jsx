import { IconArrowRight, IconStamp } from "./icons";

export default function Cover({ name, setName, onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient corner stamps — quiet decoration, not the signature moment */}
      <div className="absolute top-10 left-10 text-cyan/10 rotate-[-12deg]">
        <IconStamp className="w-24 h-24" />
      </div>
      <div className="absolute bottom-10 right-10 text-gold/10 rotate-[10deg]">
        <IconStamp className="w-32 h-32" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Career Passport Issuer
          </div>
          <h1 className="font-display text-5xl font-bold text-paper leading-tight">
            Skill<span className="text-cyan">Chain</span>
          </h1>
          <p className="text-paper/60 mt-3 font-body text-sm tracking-wide">
            Learn &middot; Earn &middot; Verify &middot; Shine
          </p>
        </div>

        <div className="bg-ink-light/60 border border-paper/10 rounded-2xl p-6 backdrop-blur-sm">
          <label className="block text-xs uppercase tracking-wider text-paper/50 font-mono mb-2">
            Passport holder name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Bhumika Nayal"
            className="w-full bg-ink border border-paper/15 rounded-lg px-4 py-3 text-paper placeholder:text-paper/30 font-body focus:outline-none focus:ring-2 focus:ring-cyan/60 focus:border-cyan/60 transition"
          />

          <button
            onClick={onStart}
            disabled={!name.trim()}
            className="mt-5 w-full bg-cyan text-ink font-display font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan/90 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Open my passport
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-paper/30 text-xs mt-6 font-mono">
          Demo build — blockchain minting simulated
        </p>
      </div>
    </div>
  );
}
