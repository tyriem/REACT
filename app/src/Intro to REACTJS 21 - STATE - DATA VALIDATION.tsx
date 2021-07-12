/// AUTHOR: TMRM
/// CONTRIBUTORS:   
/// PROJECT: Intro to REACT 21 - STATE: DATA VALIDATION
/// VER: 1.0
/// DATE: 07-XX-2021

///  OBJECTIVE /// 
// STATE WITH DATA VALIDATION
///  OBJECTIVE /// 



////////////////////
///    STATE     ///
///     DATA     ///
///  VALIDATION  ///  
////////////////////

/// IMPORT ///

import React from 'react';
import { useForm } from 'react-hook-form';
import logo from './logo.svg';
import './App.css';


/// LOGIC + RENDER ///

function App() {

const {register, handleSubmit, watch, formState: {errors} } = useForm();
const onSubmit = data => console.log(data);
  
console.log(watch("example"));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <div><h1>VALIDATED FORM: </h1></div>
          <form onSubmit={handleSubmit(onSubmit)}>
          
            <div><h3>FIELD WITH DEFAULT VALUE: </h3></div>
            <input defaultValue="test" {...register("example")} />

            <div><h3>FIELD WITH REQUIRED VALUE: </h3></div>
            <input {...register("exampleRequired", {required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <div><h3>FIELD WITH MAXIMUM LENGTH: </h3></div>
            <input {...register("exampleMax", {maxLength: 20})} />
            {errors.exampleMax && <span>This field has a maximum input size of 20 Characters</span>}
            
            <div><h3>FIELD WITH REQUIRED PATTERN [ALPHABET]: </h3></div>
            <input {...register("examplePattern", { pattern: /^[A-Za-z]+$/i })} />

            <div><h3>FIELD WITH REQUIRED PATTERN [NUMBERS 5-99]: </h3></div>
            <input placeholder="age (5-99) " type="number"  {...register("exampleAge", {min: 5, max: 99})}/>

            <p></p>

            <input type="SUBMIT" />
            


          </form>
          
        </div>
      </header>
    </div>
  );
}

export default App;
