/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 15 - ARRAY ASSIGNMENT - MAP OUTPUT
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// CREATE AN ARRAY OF NUMBERS AND GIVE ME ALL NUMBERS LESS THAN 300
///  OBJECTIVE /// 

//////////////////////
///     ARRAY      ///
///   ASSIGNMENT   ///
///      MAP       ///
///     OUTPUT     ///
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
              
              <div>{"AN ARRAY FILTERED FOR ELEMENTS LESS THAN 300: " + newArray}</div>
              
            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////