import { useState } from "react";
import "./App.css";


var adjustInterval = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setstarted] = useState(false);
  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
 
    }, 1000);
    setstarted(true);
  };
  function stopWatch() {
    clearInterval(adjustInterval);
    setstarted(false);
  }
  function resetWatch() {
    clearInterval(adjustInterval);
    setstarted(false);
    setWatch(0);
  }
  return (
    <div className="App">
      <div className="container">
      <h1>Start Stop Watch</h1>
      <h2>{watch}</h2>
      <button className="start" disabled={started} onClick={startWatch}>Start</button>
      <button className="stop" onClick={stopWatch}>Stop</button>
      <button className="reset" onClick={resetWatch}>Reset</button>
      </div>
    </div>
  );
}

export default App;
