import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./PasswordLoginWithFirebase.css";





//* Component Starts from Here
const RegisterAndLogin = () => {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  //* Function to handle the submit action
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/pomodorotimer");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/pomodorotimer");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    }
  };

  return (
    <div className="formContainer">
      <div className="row">
        <button
          className={login === false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
          id="signup"
        >
          Sign Up
        </button>
        <button
          className={login === true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
          id="signin"
        >
          Sign In
        </button>
      </div>
      <div className="indicator">
        <pre>{login ? "Hey, Please Sign-in here" : "Hey, Please Sign-up here  "}</pre>
      </div>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <label htmlFor="email" id="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
        />
        <br />
        <br />
        <label htmlFor="pswd" id="pswd">Password: </label>
        <input
          type="password"
          name="password"
          id="pswd"
          placeholder="Enter your password"
        />
        <br />
        <br />
        <button id="btn" >{login ? "Sign In" : "Sign Up"}</button>
      </form>
    </div>
  );
};

export default RegisterAndLogin;
