/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 7 - ARRAY MAP
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

//////////////////////
///    MAPPING     ///
///     ARRAYS     ///
//////////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let oldArray = [1, 2, 3, 4]


let newArray = oldArray.map((element, index) => {
// WE CAN MANIPULATE THE NEWLY MAPPED ARRAY WHILE DECLARING IT
  return element + 5;
});

// HERE WE SEE A FUNCTION DECLARED AND WORKING ON THE MAP
oldArray.map(function changeElement(element) {
  console.log(element);
});

console.log(oldArray);
console.log(newArray);




/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
            <div>
              <div>An Array: {oldArray}</div>
              <div>An Array: {newArray}</div>

            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////