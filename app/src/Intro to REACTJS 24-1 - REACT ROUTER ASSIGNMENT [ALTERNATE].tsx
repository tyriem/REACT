/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 24-1 - REACT ROUTER ASSIGNMENT [ALT]
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

/// HTTP REQUEST ///
// FETCH DATA FROM API
const dataArray: any = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function Home() {
  return (
    <div>
      <h1>DYNAMIC ROUTING</h1>

      <div>
        <h2>Showing Dynamic Routes</h2>
        {/* MAP ARRAY: dataArray WITH KEY AND SET LINK */}
        {dataArray.map((i) => (
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

// this is the about component
function DetailPage() {
  const { userId } = useParams();

  // ALTERATE ASSIGNMENT OF params & userId:
  // const params = useParams()
  // const userId = params.userId;

  console.log(userId);

  const user = dataArray[userId];

  return (
    <>
      <h2>
        Details for {user.name} {user.id}
      </h2>
      <Link to="/home">BACK</Link>
    </>
  );
}
