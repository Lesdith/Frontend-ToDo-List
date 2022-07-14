import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";



function App() {
  return (
    <div  className="todo-app">
      <TodoList />
      <br></br>
      <div className="container">
        <div className="row">
          <p className="col-sm">
            &copy;  {new Date().getFullYear()} ToDo List | All rights reserved | Lesdith
          </p>
          <h2 align="center">Connect with me:</h2>
          <p align="center">
            <a href="https://github.com/Lesdith" target="blank"><img align="center" src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="lesdith" height="40" width="40" /></a>
            <a href="https://www.linkedin.com/in/lesdith-terrasandoval/" target="blank"><img align="center" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="lesdith" height="40" width="40" /></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
