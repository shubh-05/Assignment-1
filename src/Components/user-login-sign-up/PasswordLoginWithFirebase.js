import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import PomodoroTimer from "../pomodoro-timer/PomodoroTimer"
import "./PasswordLoginWithFirebase.css"


const PasswordLoginWithFirebase = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            
            <Route path="/" element={<RegisterAndLogin/>} />
            <Route path="/home" element={<RegisterAndLogin/>} />
            <Route path="/pomodorotimer" element={<PomodoroTimer/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default PasswordLoginWithFirebase;
