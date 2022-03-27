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
  //USERS DATA FETCH----------------------------------------------------------------------------
  interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string
    password: string
  }
  const [logedIN, setLogedIN] = React.useState(false);
  const [users, setUsers] = React.useState([] as User[]);
  React.useEffect(() => {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json() as Promise<User[]>)
        .then(data => setUsers(data));
  }, []);
  const [currentUser, setCurrentUser] = React.useState(null as User | null);
  const [currentScreen, setCurrentScreen] = React.useState(['d-flex','d-none','d-none','d-none','d-none','d-none']);
  // EMAIL AND PASSWORD AUTHENTICATION----------------------------------------------------------
  function UserAuth() {
    const [emailInput, setMail] = React.useState("");
    const [pwdInput, setPwd] = React.useState("");    
    const [warning, setWarning] = React.useState("");
    function handleClick (e: React.ChangeEvent<any>) {
      e.preventDefault();
      if(emailInput !== "" && pwdInput !== ""){
        users.forEach(user => {
          if(user.email === emailInput && user.password === pwdInput){
            setWarning("Welcome, you're logged in!");
            setLogedIN(true);
            setCurrentUser(user);
            setCurrentScreen(['d-none','d-flex','d-none','d-none','d-none','d-none']);
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
      <div className={currentScreen[0]}>
        <input  onChange={handleChangeEmail} placeholder="Username"></input>
        <input type="text" onChange={handleChangePassword} placeholder="Password"></input>
        <button onClick={handleClick}>
          Click me
        </button>
        <div>{warning}</div>
      </div>
    );
  }
  function PostedTasks() {
    function handleNewTaskButton(e: React.ChangeEvent<any>){
      e.preventDefault();
      setCurrentScreen(['d-none','d-none','d-flex flex-wrap','d-none','d-none','d-none']);
    }
    return (
      <div className={currentScreen[1]}>
          <h2 >POSTED TASKS</h2>
          <button onClick={handleNewTaskButton}>
            +
          </button>
          <div className="task-choice">
          <h3>TITLE</h3> 
          <p>Description</p>
          </div>
          <div className="task-choice">
          <h3>TITLE</h3> 
          <p>Description</p>
          </div> 
      </div>
    );
  }
  function NewTask() {
    return(
      <div className={currentScreen[2]}>
        <h1>TASK REQUEST</h1>
        <p>{currentUser?.firstname}</p>
        <h3>Task</h3>
            <input type="text" placeholder='Name of the task'></input>
        <h3>Description</h3>
        <textarea placeholder='Description of the task'>
        </textarea>
        <h3>Type</h3>
        <select name="Types" id="Types">
          <option value="Food Run">Type 1</option>
          <option value="Store Run">Type 2</option>
          <option value="Lost and Found">Type 3</option>
          <option value="Academic">Type 4</option>
          <option value="Other">Type 4</option>
        </select>
        <h3>Price</h3>
        <input type="number" min="0.00" max="10000.00" step="0.01" />
      </div>
    );
  }
  return(
    <div>
       <UserAuth />
       <PostedTasks />
       <NewTask />
    </div>
  )
}


export default App;