/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 12 - ARRAY ASSIGNMENT - FILTER
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// CREATE AN ARRAY OF NUMBERS AND GIVE ME ALL NUMBERS LESS THAN 300
///  OBJECTIVE /// 

//////////////////////
///     ARRAY      ///
///   ASSIGNMENT   ///
///     FILTER     ///
///     ARRAYS     ///
//////////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let oldArray = [1, 2, 3, 4, 100, 200, 300, 400, 500]

// A FILTER GOES THROUGH AN ARRAY AND PRINTS ANY ELEMENTS THAT MATCH THE CONDITION SET
let newArray = oldArray.filter((element, index) => {
// HERE WE SET THE CONDITION TO CHECK AGAINST THE FILTER
  const result = element < 300;
  console.log("array entry", oldArray);
  console.log("is " + element + " less than 300 " + result);
  return element < 300;
});



/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
            <div>
              <div>{"AN ARRAY: " + oldArray}</div>
              {/* TO RUN CODE WITHIN AN HTML RENDER WE WRAP IT IN CURLY BRACKETS */}
              {/* WE NEVER DO REAL CODE CHANGES INSIDE OF THE RENDER, ONLY DRAWING */}
              {/* TO RENDER A LIST WE MAP THROUGH AN ARRAY */}
              { newArray.map((element) => {
                return (<div>{element}</div>)
              })}
              </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////