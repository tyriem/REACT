/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 7 - ARRAY MAP
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

/////////////////////////
///    STARTS WITH    ///
///     ARRAYS        ///
/////////////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
let oldArray = ["aaron", "brian", "carey"]

// A STARTS WITH GOES THROUGH AN ARRAY AND PRINTS ANY ELEMENTS THAT START WITH THE CONDITION SET
let newArray = oldArray.filter((element, index) => {
// HERE WE SET THE CONDITION TO CHECK AGAINST THE FILTER
return element.startsWith('a');
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
              <div>{"An Array: " + oldArray}</div>
              <div>{"An Array Of Elements that Start With 'A': " + newArray}</div>
            </div>
          

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////