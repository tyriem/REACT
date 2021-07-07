/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 7 - ARRAY MAP
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

//////////////////
///    JSON    ///
///   OBJECT   ///
//////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///

// JSON OBJECT - SET OF KEYED VALUES WE ACCESS VIA THE KEY AND CAN MANIPULATE
const person = {
  name : "aaron",
  address : "2301 Georgia Ave",
  id : 1
}

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

            <div>
              <div>A JSON OBJECT'S NAME ACCESSED BY KEY: {person.name}</div>
              <div>A JSON OBJECT'S ADDRESS ACCESSED BY KEY: {person.address}</div>
              <div>A JSON OBJECT'S ID ACCESSED BY KEY: {person.id}</div>
       

            </div>
        
      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////