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
  const [users, setUsers] = React.useState([] as User[]);
  React.useEffect(() => {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json() as Promise<User[]>)
        .then(data => setUsers(data));
}, []);
  const [emailInput, setMail] = React.useState("");
  const [pwdInput, setPwd] = React.useState("");
  function handleClick (e: React.ChangeEvent<any>) {
    e.preventDefault();
    if(emailInput != "" && pwdInput != ""){
      users.forEach(user => {
        if(user.email === emailInput && user.password === pwdInput){
          console.log("Logged in");
        }else{
          console.log("Wrong credentials");
        }
      });
    }else{
      console.log("No credentials");
    }
    
  }
  function handleChangeEmail (e: React.ChangeEvent<HTMLInputElement>) {
    setMail(e.target.value);
  }
  function handleChangePassword (e: React.ChangeEvent<HTMLInputElement>) {
    setPwd(e.target.value);
  }
  return (
    <div>
      <input  onChange={handleChangeEmail} placeholder="Username"></input>
      <input type="text" onChange={handleChangePassword} placeholder="Password"></input>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;