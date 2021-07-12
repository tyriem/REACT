/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 6 - ARRAYS
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// DATASTRUCTURES IN REACT
///  OBJECTIVE /// 

//////////////////
///   ARRAYS   ///
//////////////////

import React from 'react';
import logo from './logo.svg';
import './App.css';

/// LOGIC ///
//TO SET OUR ARRAY AS PERMANENT WE SET IT AS CONST, TO SET IT AS FUNGIBLE WE SET IT WITH A LET
let anArray = ['a', 'b', 'c', 'd']

//WE CAN ADD ELEMENTS TO THE END OF AN ARRAY USING PUSH
anArray.unshift('1');
//WE CAN ADD ELEMENTS TO THE END OF AN ARRAY USING PUSH
anArray.push('5');

const index = 0;

//console.log spits out the value of what you put in it
console.log(anArray)

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
          <div>
            <div>An Array: {anArray}</div>
            <div>An Array Element: {anArray[0]}</div>
            <div>An Array Element: {anArray[index]}</div>
          </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////