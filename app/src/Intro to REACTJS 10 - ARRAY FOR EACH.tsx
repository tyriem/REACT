/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 7 - ARRAY MAP
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

///////////////////////
///    FOR EACH     ///
///     ARRAYS     ///
//////////////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
const anArray = [1, 2, 3, 4]


// FOR EACH IS IDENTICAL TO FOREACH BUT DOES NOT CREATE A NEW ARRAY IN THE PROCESS
anArray.forEach((element) => {
  console.log("array entry", element);
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