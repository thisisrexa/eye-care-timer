import { useState, useEffect, useRef } from "react";
import Ding from "./components/Ding";
import "./App.css";
import getTimeRemaining from "./utils/getTimeRemaining";

function App() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:20:00");
  const [show, setShow] = useState(false);

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:20:00");

    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      startTimer(e);
    }, 1000);

    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    // 20min = 1200s
    // Get the current minutes of time
    deadline.setSeconds(deadline.getSeconds() + 1200);
    return deadline;
  };

  useEffect(() => {
    // clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const onClickShow = () => {
    setShow(true);
    clearTimer(getDeadTime());
  };

  return (
    <div className="App">
      <Ding
        endOfTime={timer === "00:00:00" ? true : false}
        timer={timer}
        reset={onClickReset}
        show={show}
      />
      {show === false ? <button onClick={onClickShow}>Start</button> : null}
        <p>Pls allow sound & notifications permissons to your browser. Tnx!</p>
        <p>Coded by <a href="https://github.com/r3x4w" target={"_blank"}>
          @r3x4w</a></p>
    </div>
  );
}

export default App;
