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

import React, { useEffect, useState } from "react";
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

let dataArray = [];

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
  const [dataArray, setDataArray] = useState<any>([]);

  /// HTTP REQUEST ///
  // FETCH DATA FROM API
  const loadUsers: any = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const o = await response.json();
    setDataArray(o.results);
    console.log(o);
  };

  useEffect((): void => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>DYNAMIC ROUTING</h1>

      <div>
        {/* MAP ARRAY: dataArray WITH KEY AND SET LINK */}
        {dataArray?.map((person) => (
          <div
            key={person.uuid}
            style={{ marginTop: 5, padding: 5, border: "black 1px solid" }}
          >
            <Link to={"/detail-page/" + person.id}>
              <img src={person.picture.large} />
              <br></br>
              <h2>
                {person.name.first} {person.name.last}
              </h2>
              <h2>{person.email}</h2>
              <br></br>
              <br></br>
              <br></br>

              {/* {JSON.stringify(person,null,2)} */}
            </Link>
          </div>
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
