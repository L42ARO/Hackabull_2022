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
  const [currentScreen, setCurrentScreen] = React.useState(['d-flex flex-wrap mx-auto','d-none','d-none','d-none','d-none','d-none']);
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
            setCurrentScreen(['d-none','d-flex d-wrap mx-5','d-none','d-none','d-none','d-none']);
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
          sign in
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
          <div className={currentScreen[5]}>
          <h3>SUBWAY ORDER</h3> 
          <p>Sajdwich</p>
          </div>
          <div className="task-choice">
          <h3>TITLE</h3> 
          <p>Description</p>
          </div> 
      </div>
    );
  }
  function NewTask() {
    const [title, setTitle] = React.useState("");
    const [currBid, setCurrBid] = React.useState(0);

    function addTask(){
      // const scoreEntry = {
      //     UserId: currentUser?.id,
      //     currBid: currBid,
      //     title: title,
      // }

      // fetch("/.netlify/functions/addScore",
      //     {
      //         headers: {
      //             'Accept': 'application/json',
      //             'Content-Type': 'application/json'
      //         },
      //         method: "POST",
      //         body: JSON.stringify(scoreEntry)
      //     })
      setCurrentScreen(['d-none','d-flex flex-wrap','d-none','d-none','d-none','d-flex']);
    }
    function handleOnChangeTitle (e: React.ChangeEvent<HTMLInputElement>) {
      setTitle(e.target.value);
    }
    function handleOnChangeCurrBid (e: React.ChangeEvent<HTMLInputElement>) {
      setCurrBid(Number(e.target.value));
    }
    return(
      <div className={currentScreen[2]}>
        <p className='d-none'>{title+currBid}</p>
        <h1>TASK REQUEST</h1>
        <p>{currentUser?.firstname}</p>
        <h3>Task</h3>
            <input type="text" onChange={handleOnChangeTitle} placeholder='Name of the task'></input>
        <h3>Description</h3>
        <textarea placeholder='Description of the task'>
        </textarea>
        <h3>Price</h3>
        <select name="Types" id="Types">
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
          <option value="Type 4">Type 4</option>
        </select>
        <input onChange={handleOnChangeCurrBid} type="number" min="0.00" max="10000.00" step="0.01" />
        <button onClick={addTask}></button>
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