/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 8 - ARRAY MAP
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// MAPPING AN ARRAY
///  OBJECTIVE /// 

//////////////////////
///    MAPPING     ///
///     ARRAYS     ///
//////////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///
const anArray = ["aaron", "brian", "carey"]
var index = 0

// A MAP LOOPS THROUGH AND ARRAY AND DUMPS OUT ITS ELEMENTS
// NB: THIS CREATES A NEW ARRAY IN THE PROCESS
anArray.map((element) => {
  console.log("array entry", element);
});

// A MAP CAN ALSO DUMP OUT OTHER THINGS SUCH AS THE INDEX ATTACHED TO THE ELEMENTS
anArray.map((element, index) => {
  console.log("array entry and index", element + " " + index);
});

// YOU CAN DECLARE AND MAP AN ARRAY SIMULTANEOUSLY
['a', 'b', 'c', 'd'].map((element, index) => {
  console.log("array entry and index", element + " " + index);
});



/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
            <div>
              <div>An Array: {anArray}</div>
            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////