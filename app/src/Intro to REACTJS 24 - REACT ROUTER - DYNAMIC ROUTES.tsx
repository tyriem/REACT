/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 24 - REACT ROUTER - DYNAMIC ROUTES
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE ///
/// ROUTE BETWEEN PAGES IN REACT
///  OBJECTIVE ///

////////////////////
///   DYNAMIC   ///
///    ROUTER    ///
////////////////////

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

const data = {
  results: [
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Wendy",
        last: "Evans",
      },
      location: {
        street: {
          number: 7793,
          name: "Hogan St",
        },
        city: "Costa Mesa",
        state: "Georgia",
        country: "United States",
        postcode: 71878,
        coordinates: {
          latitude: "80.1735",
          longitude: "111.4643",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "wendy.evans@example.com",
      login: {
        uuid: "f34dc632-bf75-42cd-8bf4-250dc4106c73",
        username: "crazycat385",
        password: "whiteout",
        salt: "7BwlWZVQ",
        md5: "d22cd004f3a1e04a45f370a1f1211d35",
        sha1: "554bffc0c7c383c2167ffbb38f31fabb65a65243",
        sha256:
          "b2eba2d174968b95b04a581f448bd5c7aa0d9ceaadfd1a126d94d96f517b52d5",
      },
      dob: {
        date: "1946-03-20T15:52:02.464Z",
        age: 75,
      },
      registered: {
        date: "2017-02-03T23:38:14.321Z",
        age: 4,
      },
      phone: "(210)-474-2849",
      cell: "(727)-081-1995",
      id: {
        name: "SSN",
        value: "504-35-9861",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/73.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Tonya",
        last: "Garcia",
      },
      location: {
        street: {
          number: 9190,
          name: "Bruce St",
        },
        city: "Princeton",
        state: "Kansas",
        country: "United States",
        postcode: 24322,
        coordinates: {
          latitude: "58.4516",
          longitude: "-33.0623",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "tonya.garcia@example.com",
      login: {
        uuid: "fb3c0d22-fe98-4176-8fcb-1f9f448e1b52",
        username: "smallmouse876",
        password: "mahler",
        salt: "s2RvIT0K",
        md5: "cc5e8d67d036cedc5091ae6a6b4db73a",
        sha1: "7b3b1d711be4a04943d29fe5862bf806619421f9",
        sha256:
          "ca1d1690c6040d22e95ab5a7579ede4968d2f2ba5e1170aace49ae800ffbf9aa",
      },
      dob: {
        date: "1948-05-18T23:49:30.066Z",
        age: 73,
      },
      registered: {
        date: "2017-09-20T04:48:04.787Z",
        age: 4,
      },
      phone: "(655)-037-2685",
      cell: "(437)-875-7394",
      id: {
        name: "SSN",
        value: "439-05-8578",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
      },
      nat: "US",
    },
  ],
  info: {
    seed: "6c2a05b71ee02a66",
    results: 2,
    page: 1,
    version: "1.3",
  },
};

// react component starts here
export default function App() {
  return (
    <Router>
      <Switch>
        {/* routes go here, as children */}
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:index" component={Detail} />
      </Switch>
    </Router>
  );
}
// App component ends here...

///
// NEW COMPONENT - Home
function Home() {
  return (
    <>
      <p>THIS IS HOME COMPONENT</p>
      {data.results.map((e, index) => {
        return (
          <li>
            <Link to={"/detail/" + index}>
              Link {e.name.first} {e.name.last}
            </Link>
          </li>
        );
      })}
    </>
  );
}

///
// NEW COMPONENT - Detail
function Detail() {
  const { index } = useParams();
  const person = data.results[index];

  return (
    <>
      <p>THIS IS DETAIL COMPONENT - {index}</p>
      <p />
      <p>
        {person.location.street.number} {person.location.street.name}
      </p>
      <p>
        {person.location.city} {person.location.state}{" "}
        {person.location.postcode}
      </p>
      <p>{person.email}</p>
      <Link to="/home">Home</Link>
    </>
  );
}
