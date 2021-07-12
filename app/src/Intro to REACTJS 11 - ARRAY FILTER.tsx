/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 11 - ARRAY FILTER
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// FILTERING ARRAYS
///  OBJECTIVE /// 

//////////////////////
///    FILTER      ///
///     ARRAYS     ///
//////////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let oldArray = [1, 2, 3, 4]

// A FILTER GOES THROUGH AN ARRAY AND PRINTS ANY ELEMENTS THAT MATCH THE CONDITION SET
let newArray = oldArray.filter((element, index) => {
// HERE WE SET THE CONDITION TO CHECK AGAINST THE FILTER
  return element === 1;
});

let newNewArray = oldArray.filter((element, index) => {
  // HERE WE SET THE CONDITION TO CHECK AGAINST THE FILTER
    return element !== 1;
  });

console.log(oldArray);
console.log(newArray);
console.log(newNewArray);




/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
            <div>
              <div>An Array: {oldArray}</div>
              <div>An Array Filtered for the number 1: {newArray}</div>
              <div>An Array Filtered for anything but the number 1: {newNewArray}</div>

            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////