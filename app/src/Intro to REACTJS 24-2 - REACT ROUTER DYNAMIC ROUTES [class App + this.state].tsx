/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 24 - REACT ROUTER ASSIGNMENT
/// VER: 1.5
/// DATE: 07-XX-2021

///  OBJECTIVE ///
/// USE RESULT FROM API: randomuser.me TO GENERATE A LIST
/// RENDER IT PROGRAMMATICALLY AS ROUTES
/// FIRST ROUTE (HOME) RENDER: ENTRIES
/// SECOND ROUTE (DETAILS) RENDER: - first, last, email, address
///  OBJECTIVE ///

//////////////////
///    REACT   ///
///    ROUTER  ///
/// ASSIGNMENT ///
//////////////////

import * as React from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    pictures: [],
  };

  // FETCH
  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let pictures = data.results.map((person) => {
          return (
            <div key={person.login.uuid}>
              <img src={person.picture.large} />
              <p>{person.email}</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log(this.state.pictures);
      });
  }

  // RETURN
  render() {
    return (
      <div className="App">
        {/* HEADER */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>RANDOM PEOPLE</h1>

          {/* COMPONENTS */}

          {this.state.pictures}
        </header>
      </div>
    );
  }
}

export default App;
