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
  const [count, setCount] = React.useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;