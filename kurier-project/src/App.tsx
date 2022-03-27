import * as React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import UserAuth from './UserAuth';
import './App.css';

function App() {
  const [emailInput, setMail] = React.useState("");
  function handleClick (e: React.ChangeEvent<any>) {
    e.preventDefault();
    console.log(emailInput);
  }
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setMail(e.target.value);
  }
  return (
    <div>
      <input  onChange={handleChange} placeholder="Username"></input>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;