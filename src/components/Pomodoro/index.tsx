import { useState, useRef } from "react";
import UseTasks from "../../hooks/UseTasks";
import { FaPlay, FaPause } from "react-icons/fa";
import "./style.scss";

const Pomodoro: React.FC = () => {
  const { state, changeCompletedTask } = UseTasks();

  const [timer, setTimer] = useState<number>(25);
  const [currentTimer, setCurrentTimer] = useState<string>("focus");
  const intervalRef = useRef<number | null>(null);
  const timerRef = useRef<number>(25);

  const showTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const changeContext = (context: string) => {
    let timer = 25;
    switch (context) {
      case "focus":
        timer = 25;
        setCurrentTimer("focus");
        break;
      case "short":
        timer = 5;
        setCurrentTimer("short");
        break;
      case "long":
        timer = 15;
        setCurrentTimer("long");
        break;
      default:
        return;
    }
    timerRef.current = timer;
    setTimer(timer);
  };

  const countdown = () => {
    if (timerRef.current <= 0) {
      zerar();
      if (currentTimer === "focus") {
        if (state.selectedTask && state.selectedTask.completed === false) {
          changeCompletedTask(state.selectedTask);
        }

        const event = new CustomEvent(" ", {
          detail: {
            message: "A tarefa foi concluída com sucesso!",
            time: new Date(),
          },
          bubbles: true,
          cancelable: true,
        });

        document.dispatchEvent(event);
      }

      changeContext(currentTimer);
      return;
    }

    timerRef.current -= 1;
    setTimer(timerRef.current);
  };

  const onStartPause = () => {
    if (intervalRef.current) {
      zerar();
      return;
    }

    intervalRef.current = setInterval(countdown, 1000);
  };

  const zerar = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="app__section-card-container">
      <div className="app__card">
        <ul className="app__card-list">
          <li>
            <button
              data-context="focus"
              className={`app__card-button app__card-button--focus ${
                currentTimer === "focus" ? "active" : ""
              }`}
              onClick={() => changeContext("focus")}
            >
              Foco
            </button>
          </li>
          <li>
            <button
              data-context="short"
              className={`app__card-button app__card-button--short ${
                currentTimer === "short" ? "active" : ""
              }`}
              onClick={() => changeContext("short")}
            >
              Pausa curta
            </button>
          </li>
          <li>
            <button
              data-context="long"
              className={`app__card-button app__card-button--long ${
                currentTimer === "long" ? "active" : ""
              }`}
              onClick={() => changeContext("long")}
            >
              Pausa longa
            </button>
          </li>
        </ul>
        <div id="timer" className="app__card-timer">
          {showTimer()}
        </div>
        <div className="app__card-buttonStartPause-wrapper">
          <button
            id="start-pause"
            className="app__card-button"
            onClick={onStartPause}
          >
            {intervalRef.current ? <FaPause /> : <FaPlay />}
            <span>{intervalRef.current ? "Pausar" : "Começar"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pomodoro;
