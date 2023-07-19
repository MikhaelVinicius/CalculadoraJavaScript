import React from 'react';
import "./CssComponents.css";
import Button from './Button';

function ButtonBox(props) {
  const { setCurrentValue, currentValue, setExpression, expression } = props;
  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/','C'];

  function handleButtonClick(value) {
    
    if (!isNaN(value) || value === '.') {
    
      setCurrentValue(currentValue + value);
    } else if (value === 'C') {
     
      setCurrentValue('');
      setExpression('');
    } else if (value === '=') {
      
      const result = eval(expression + currentValue);
      setCurrentValue(result.toString());
      setExpression('');
    } else {
      
      setExpression(expression + currentValue + value);
      setCurrentValue('');
    }
  }

  return (
    <div className="button-box">
      {buttons.map(value => (
        <Button
          key={value}
          value={value}
          onClick={() => handleButtonClick(value)}
        />
      ))}
    </div>
  );
}

export default ButtonBox;
