import React from 'react'
import { signOut } from 'firebase/auth'
import { database } from "./FirebaseConfig"; 
import { useNavigate } from "react-router-dom";



const HomeScreen = () => {
    const history = useNavigate();

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "Value")
            history('/')
        })
    }
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={handleClick}>Sign out</button>
    </div>
  )
}

export default HomeScreen