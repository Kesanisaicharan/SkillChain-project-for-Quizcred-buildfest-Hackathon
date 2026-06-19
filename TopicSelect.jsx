import { TOPICS } from "../data/quizzes";
import { TOPIC_ICONS, IconArrowRight, IconCheck } from "./icons";

const accentMap = {
  cyan: { text: "text-cyan", border: "border-cyan/40", bg: "bg-cyan/10" },
  gold: { text: "text-gold", border: "border-gold/40", bg: "bg-gold/10" },
  mint: { text: "text-mint", border: "border-mint/40", bg: "bg-mint/10" },
};

export default function TopicSelect({ name, earnedTopicIds, onPick }) {
  return (
    <div className="min-h-screen px-6 py-12 max-w-2xl mx-auto">
      <div className="mb-10">
        <p className="text-cyan font-mono text-xs uppercase tracking-[0.2em] mb-2">
          Welcome, {name.split(" ")[0]}
        </p>
        <h2 className="font-display text-3xl font-bold text-paper">
          Choose a topic to begin
        </h2>
        <p className="text-paper/50 mt-2 text-sm">
          Each completed quiz earns a verified badge for your Career Passport.
        </p>
      </div>

      <div className="grid gap-4">
        {TOPICS.map((topic) => {
          const Icon = TOPIC_ICONS[topic.icon];
          const accent = accentMap[topic.accent];
          const earned = earnedTopicIds.includes(topic.id);
          return (
            <button
              key={topic.id}
              onClick={() => onPick(topic)}
              className={`group flex items-center gap-4 p-5 rounded-xl border ${accent.border} bg-ink-light/40 hover:bg-ink-light/70 transition text-left`}
            >
              <div className={`w-12 h-12 rounded-lg ${accent.bg} flex items-center justify-center ${accent.text} flex-shrink-0`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-paper">{topic.label}</h3>
                <p className="text-paper/40 text-xs font-mono mt-0.5">
                  {topic.questions.length} questions &middot; ~3 min
                </p>
              </div>
              {earned ? (
                <span className="flex items-center gap-1 text-mint text-xs font-mono">
                  <IconCheck className="w-4 h-4" /> Earned
                </span>
              ) : (
                <IconArrowRight className="w-5 h-5 text-paper/30 group-hover:text-paper/70 group-hover:translate-x-1 transition" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
