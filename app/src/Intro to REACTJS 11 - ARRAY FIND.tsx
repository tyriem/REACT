/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 7 - ARRAY MAP
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

///////////////////
///    FIND    ///
///     ARRAYS ///
//////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let oldArray = ["aaron", "brian", "carey"]

// FIND SEARCHES FOR THE FIRST ELEMENT THAT MEETS THE CONDITION AND STOP
// IT ALSO DOESN'T OUTPUT AS AN ARRAY, JUST A SINGLE VALUE
let newArray = oldArray.find((element, index) => {
// HERE WE SET THE CONDITION TO CHECK AGAINST THE FILTER
return element > 10;
});

console.log(found);




/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          
            <div>
              <div>{"An Array: " + oldArray}</div>
              <div>{"An Array Of Elements that Start With 'A': " + newArray}</div>
            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////