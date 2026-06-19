import { useState } from "react";
import { IconCheck, IconX, IconArrowRight } from "./icons";

export default function Quiz({ topic, onComplete }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const question = topic.questions[index];
  const isLast = index === topic.questions.length - 1;

  function handleSelect(optionIdx) {
    if (revealed) return;
    setSelected(optionIdx);
    setRevealed(true);
    if (optionIdx === question.answer) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      const finalCorrect = correctCount; // already includes this question via handleSelect
      onComplete(finalCorrect, topic.questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  return (
    <div className="min-h-screen px-6 py-12 max-w-xl mx-auto flex flex-col">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-mono text-paper/40 mb-2">
          <span>{topic.label}</span>
          <span>{index + 1} / {topic.questions.length}</span>
        </div>
        <div className="h-1.5 bg-ink-light rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan rounded-full transition-all duration-500"
            style={{ width: `${((index + (revealed ? 1 : 0)) / topic.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="font-display text-2xl font-semibold text-paper mb-6 leading-snug">
          {question.q}
        </h2>

        <div className="grid gap-3">
          {question.options.map((opt, i) => {
            let stateClasses = "border-paper/15 bg-ink-light/40 hover:bg-ink-light/70";
            let icon = null;

            if (revealed) {
              if (i === question.answer) {
                stateClasses = "border-mint/60 bg-mint/10";
                icon = <IconCheck className="w-4 h-4 text-mint" />;
              } else if (i === selected) {
                stateClasses = "border-red-400/50 bg-red-400/10";
                icon = <IconX className="w-4 h-4 text-red-400" />;
              } else {
                stateClasses = "border-paper/10 bg-ink-light/20 opacity-50";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={revealed}
                className={`flex items-center justify-between gap-3 text-left px-5 py-4 rounded-xl border transition ${stateClasses}`}
              >
                <span className="text-paper/90 font-body text-sm">{opt}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      {revealed && (
        <button
          onClick={handleNext}
          className="mt-8 w-full bg-cyan text-ink font-display font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan/90 transition"
        >
          {isLast ? "See my results" : "Next question"}
          <IconArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
