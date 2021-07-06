/// AUTHOR: TMRM
/// CONTRIBUTORS:   
// PROJECT: Intro to REACT 3 - IF-ELSE 
/// VER: 1.0
/// DATE: 07-XX-2021


///  OBJECTIVE /// 
// LOREM IPSUM
///  OBJECTIVE /// 


// IF-ELSE

const isHappy = true;
let face = "none"

if (isHappy) {
face = "smiling"
} else {
	face = "frowning"
}

ReactDOM.render(
  <h1>Hello World. I am {face}.</h1>,
  document.getElementById('root')
);