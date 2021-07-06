/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 4 - RETURN
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 

//////////////
/// RETURN ///
//////////////

import logo from './logo.svg';
import './App.css';

/// LOGIC ///
const isHappy = true;
    let face = "none"

  //NB: IN JS YOU DON"T HAVE TO DECLARE THE CHECK FOR TRUE OR FALSE
  //EX: You can use: if (isHappy === true;) or if (isHappy)
    if ( isHappy ) {
      face = "smiling"
    } else {
      face = "frowning"
    }
    
    
console.log;

/// RENDER ///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          return (
            <div>
              <div>My Face is {face}</div>
            </div>
          );

      </header>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////