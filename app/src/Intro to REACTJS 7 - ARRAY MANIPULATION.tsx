/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 7 - MANIPULATING ARRAYs
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

//////////////////////
///  MANIPULATING  ///
///     ARRAYS     ///
//////////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
//TO SET OUR ARRAY AS PERMANENT WE SET IT AS CONST, TO SET IT AS FUNGIBLE WE SET IT WITH A LET
let anArray = [1, 2, 3, 4, 5]

// NB: WE CAN EITHER SET AN ARRAY INDEX VALUE AS A CONSTANT AND CALL IT FROM THERE OR JUST SET A NEW VALUE BASED ON THE ARRAY USING INDEX
// EX: varX = anArray[0]; varY = anArray[4]; const aSumVar = (varX + varY) 
// OR const firstIndex = 0; const lastIndex = 4; const total = anArray[firstIndex] + anArray[lastIndex]
var varX = anArray[0];

var varY = anArray[4];


const aSumVar = (varX + varY);

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
              <div>The sum of {anArray[0]} and {anArray[4]} is: {aSumVar} </div>
            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////