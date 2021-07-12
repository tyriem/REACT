/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 17 - JSON OBJECTS + ARRAYS
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// JSON OBJECTS & ARRAYS
///  OBJECTIVE /// 

//////////////////
///    JSON    ///
///   OBJECT   ///
///      &     ///
///   ARRAYS   ///
//////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///

// JSON OBJECT - SET OF KEYED VALUES WE ACCESS VIA THE KEY AND CAN MANIPULATE
const people = [
  {
    name: "aaron",
    address: {
      street: "2301 georgia ave",
      city: "washington",
    },
id: 1
},
  {
    name: "billy",
    address: {
      street: "100 main ave",
      city: "washington",
    },
id: 2
}
];

console.log(people);

// GET ALL ENTRIES WITH A PARTICULAR VALUE
// EX. VALUE OF 'WASHINGTON' UNDER 'CITY'
const washingtonPeople = people.filter(
  (p) => p.address.city === "washington"
);

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
       <div>
       {people.map((person) => {
          return (
            
              <div key = {person.id}>
                <div>id: {person.id}</div>
                <div>Name: {person.name}</div>
                <div>Address Street: {person.address.street}</div>
                <div>Address City: {person.address.city}</div>

                <br></br>
              </div>
            
            ); })}
       </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////