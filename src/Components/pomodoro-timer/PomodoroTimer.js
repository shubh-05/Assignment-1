import React, { useState, useEffect } from "react";
import "./PomodoroTimer.css";
import { useNavigate } from "react-router-dom";

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerInterval);
          // Start the 5-minute break timer
          setMinutes(5);
          setSeconds(0);
          setIsRunning(false);
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  const routeToHome = useNavigate();
  const navigateToHome = () => {
    routeToHome('/');
  }

  return (
    <div>
      <div className="mainContainer">
        <div className="heading">
          <h1>Pomodoro Timer App</h1>
        </div>
        <div className="pomodoro-container">
          <div className="timer">
            <p id="timeText">Time</p>
            <p id="timerEle">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
          <div>
            {!isRunning ? (
              <button onClick={startTimer}>Start</button>
            ) : (
              <button onClick={pauseTimer}>Pause</button>
            )}
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
      <div className="homeContainer">
        <button onClick={navigateToHome}>Home</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
