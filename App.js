import { useState } from 'react';
import './calculator.css';
import Keypad from './keypad.js';
function App(){
  let [input,setInput]=useState("");
  
function handleClick(value) {
  const operators = ['+', '-', '*', '/', '%'];
  const lastChar = input[input.length - 1];

  if (operators.includes(value)) {
    if (input === '') return; 

    if (operators.includes(lastChar)) {
      setInput(input.slice(0, -1) + value);
      return;
    }
  }

  if (value === '.') {
    const parts = input.split(/[+\-*%]/);
    const currentPart = parts[parts.length - 1];
    if (currentPart.includes('.')) {
      return;
    }
  } 
  
  setInput(input + value);
}


  function handleClear(){
    setInput("");
  }

  function resultCal(){
    setInput(eval(input));
  }

  function backspace(){
    setInput(input.slice(0, -1));
  }

  function handleSquare(){
    setInput(input*input);
  }

  return(
    <div className="container">
        <h1>&nbsp;&nbsp;Calculator Application</h1>
        <br></br>
        <div className="box">
            <input type="text" className='output' value={input} readOnly/>
            <Keypad handleClick={handleClick} handleClear={handleClear} resultCal={resultCal} backspace={backspace} handleSquare={handleSquare}/>
        </div>
    </div>
  )
}

export default App;
