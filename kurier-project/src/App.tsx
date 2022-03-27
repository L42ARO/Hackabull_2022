import * as React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import UserAuth from './UserAuth';
import './App.css';

interface User {
  id: number,
  firstname: string,
  lastname: string,
  email: string
  password: string
}

function App() {
  //USERS DATA FETCH----------------------------------------------------------------------------
  const [logedIN, setLogedIN] = React.useState(false);
  const [users, setUsers] = React.useState([] as User[]);
  React.useEffect(() => {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json() as Promise<User[]>)
        .then(data => setUsers(data));
  }, []);
  // EMAIL AND PASSWORD AUTHENTICATION----------------------------------------------------------
  const [emailInput, setMail] = React.useState("");
  const [pwdInput, setPwd] = React.useState("");
  const [logInVis, setLogInVis] = React.useState("d-flex");
  const [warning, setWarning] = React.useState("");
  function handleClick (e: React.ChangeEvent<any>) {
    e.preventDefault();
    if(emailInput !== "" && pwdInput !== ""){
      users.forEach(user => {
        if(user.email === emailInput && user.password === pwdInput){
          setWarning("Welcome, you're logged in!");
          setLogedIN(true);
          setLogInVis("d-none");
        }
      });
      if(!logedIN){
        setWarning("Wrong credentials");
      }
    }else{
      setWarning("No credentials");
    }
    
  }
  function handleChangeEmail (e: React.ChangeEvent<HTMLInputElement>) {
    setMail(e.target.value);
  }
  function handleChangePassword (e: React.ChangeEvent<HTMLInputElement>) {
    setPwd(e.target.value);
  }
  return (
    <div className={logInVis}>
      <input  onChange={handleChangeEmail} placeholder="Username"></input>
      <input type="text" onChange={handleChangePassword} placeholder="Password"></input>
      <button onClick={handleClick}>
        Click me
      </button>
      <div>{warning}</div>
    </div>
  );
}

export default App;