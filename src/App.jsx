import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [startIt, setStartIt] = useState(false);

  useEffect(() => {
    let interval;
    if (startIt) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10); // 10 milliseconds for better precision
    }
    return () => clearInterval(interval);
  }, [startIt]);

  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  const start = () => {
    setStartIt(!startIt);
  };

  const reset = () => {
    setTime(0);
    setStartIt(false);
  };

  return (
    <>
      <div className="stopwatch">
        <p className="stopwatch-time">
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
        <div className="buttons">
          <button className="stopwatch-button" onClick={start}>
            {startIt ? "Stop" : "Start"}
          </button>
          <button className="stopwatch-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
