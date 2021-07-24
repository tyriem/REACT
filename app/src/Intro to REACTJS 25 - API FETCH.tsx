/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 25 - APIs FETCH
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE ///
/// GRAB DATA FROM AN API
///  OBJECTIVE ///

///////////////////
///     API     ///
///    FETCH    ///
///////////////////

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello World!</p>
      </header>
    </div>
  );
}

export default App;
