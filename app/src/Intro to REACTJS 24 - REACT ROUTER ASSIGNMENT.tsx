/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 23 - REACT ROUTER ASSIGNMENT
/// VER: 1.0
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

import React from "react";
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

import "./style.css";

export default function App() {
  return (
    <Router>
      {/* this means stop as soon as you find a match and */}
      {/* render it */}
      <Switch>
        {/* you might see exact as 'exact={true}', it is */}
        {/*  the same as the code below */}
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

function Home() {
  const [users, setUsers] = useState([]);

  /// HTTP REQUEST - FETCH DATA FROM API
  const dataArray = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  // see documentation - https://reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    dataArray();
  }, []);

  return (
    <div>
      <h1>DYNAMIC ROUTING</h1>

      <div>
        <h2>Showing Dynamic Routes</h2>
        {/* MAP ARRAY: dataArray WITH KEY AND SET LINK */}
        {users.map((i) => (
          <li key={i.id}>
            <Link to={"/detail-page/" + i.id}>
              {i.name} {i.id}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
