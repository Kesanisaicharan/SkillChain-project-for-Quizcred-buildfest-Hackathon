import { useState } from "react";
import Cover from "./components/Cover";
import TopicSelect from "./components/TopicSelect";
import Quiz from "./components/Quiz";
import ResultStamp from "./components/ResultStamp";
import Passport from "./components/Passport";

const SCREENS = {
  COVER: "cover",
  TOPICS: "topics",
  QUIZ: "quiz",
  RESULT: "result",
  PASSPORT: "passport",
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.COVER);
  const [name, setName] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);
  const [lastScore, setLastScore] = useState(null);
  const [badges, setBadges] = useState([]);

  function handleStart() {
    setScreen(SCREENS.TOPICS);
  }

  function handlePickTopic(topic) {
    setActiveTopic(topic);
    setScreen(SCREENS.QUIZ);
  }

  function handleQuizComplete(correct, total) {
    setLastScore({ correct, total });
    setScreen(SCREENS.RESULT);
  }

  function handleResultContinue(badge) {
    if (badge) {
      setBadges((prev) => [...prev, badge]);
      setScreen(SCREENS.PASSPORT);
    } else {
      setScreen(SCREENS.TOPICS);
    }
  }

  return (
    <div className="font-body">
      {screen === SCREENS.COVER && (
        <Cover name={name} setName={setName} onStart={handleStart} />
      )}

      {screen === SCREENS.TOPICS && (
        <TopicSelect
          name={name}
          earnedTopicIds={badges.map((b) => b.topic.id)}
          onPick={handlePickTopic}
        />
      )}

      {screen === SCREENS.QUIZ && activeTopic && (
        <Quiz topic={activeTopic} onComplete={handleQuizComplete} />
      )}

      {screen === SCREENS.RESULT && activeTopic && lastScore && (
        <ResultStamp
          topic={activeTopic}
          correct={lastScore.correct}
          total={lastScore.total}
          onContinue={handleResultContinue}
        />
      )}

      {screen === SCREENS.PASSPORT && (
        <Passport
          name={name}
          badges={badges}
          onAddMore={() => setScreen(SCREENS.TOPICS)}
        />
      )}
    </div>
  );
}
