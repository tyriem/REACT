/// AUTHOR: TMRM
/// CONTRIBUTORS:
/// PROJECT: Intro to REACT 23 - REACT ROUTER ASSIGNMENT
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

function App() {
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }, []);

    return { data, loading };
  };

  const [count, setCount] = useState(0);
  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
      </div>
    </div>
  );
}

export default App;
