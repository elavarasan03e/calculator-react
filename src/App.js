import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const addToDisplay = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  }

  const clearDisplay = () => {
    setDisplay('');
    setResult(null);
  }

  const calculate = () => {
    try {
      const calculatedResult = eval(display);
      if (isNaN(calculatedResult)) {
        setResult('NaN');
      } else if (calculatedResult === Infinity) {
        setResult('Infinity');
      } else {
        setResult(calculatedResult.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  }
  
  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={display} readOnly />
      <div className="result">{result}</div>
      <div>
        <button onClick={() => addToDisplay('7')}>7</button>
        <button onClick={() => addToDisplay('8')}>8</button>
        <button onClick={() => addToDisplay('9')}>9</button>
        <button onClick={() => addToDisplay('+')}>+</button>
      </div>
      <div>
        <button onClick={() => addToDisplay('4')}>4</button>
        <button onClick={() => addToDisplay('5')}>5</button>
        <button onClick={() => addToDisplay('6')}>6</button>
        <button onClick={() => addToDisplay('-')}>-</button>
      </div>
      <div>
        <button onClick={() => addToDisplay('1')}>1</button>
        <button onClick={() => addToDisplay('2')}>2</button>
        <button onClick={() => addToDisplay('3')}>3</button>
        <button onClick={() => addToDisplay('*')}>*</button>
      </div>
      <div>
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => addToDisplay('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => addToDisplay('/')}>/</button>
        
      </div>
    </div>
  );
}

export default App;
