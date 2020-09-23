import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello</h2>
      </div>
      <a href="/auth/google">Sign In With Google</a>
    </div>
  );
}

export default App;
