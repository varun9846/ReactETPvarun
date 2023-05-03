import React, { useState } from 'react';

export const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleOperatorClick = (operator) => {
    if (input !== '') {
      setInput(input + operator);
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculateClick = () => {
    setResult(eval(input));
    setInput('');
  };

  return (
    <div className='cal'>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleClearClick()}>C</button>
        <button onClick={() => handleCalculateClick()}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

