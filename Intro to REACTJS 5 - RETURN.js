/// AUTHOR: TMRM
/// CONTRIBUTORS:   
// PROJECT: Intro to REACT 5 - RETURN
/// VER: 1.0
/// DATE: 06-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 


//RETURN

class App extends React.Component {

 


  render() {
    
    const isHappy = true;
    let face = "none"

  //NB: IN JS YOU DON"T HAVE TO DECLARE THE CHECK FOR TRUE OR FALSE
  //EX: You can use: if (isHappy === true;) or if (isHappy)
    if ( isHappy ) {
      face = "smiling"
    } else {
      face = "frowning"
    }
    
    return (
      <div>
      <div>My Face is {face}</div>
      </div>
    );
  }
  
}

React.render(<App />, document.getElementById('app'));