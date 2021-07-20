/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 24 - REACT ROUTER ASSIGNMENT
/// VER: 2.0
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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    pictures: [],
  };

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let pictures = data.results.map((person) => {
          return (
            <div key={person.login.uuid}>
              <Router>
                <div>
                  <Link to={"/detail-page/" + person.id}>
                    <p>
                      <img src={person.picture.large} />
                      <br></br>
                      {person.name.first} {person.name.last}
                      <br></br>
                      {person.email}
                    </p>
                  </Link>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </Router>
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log(this.state.pictures);
      });
  }

  render() {
    return (
      <div className="App">
        {/* HEADER */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DYNAMIC ROUTES</h2>
          {/* COMPONENTS */}

          {this.state.pictures}
        </header>
      </div>
    );
  }
}

export default App;
