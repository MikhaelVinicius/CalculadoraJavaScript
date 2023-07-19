import React from 'react';
import Button from './Button';
import { evaluateExpression } from './mathUtils';
import "./CssComponents.css";

function ButtonBox(props) {
  const { setCurrentValue, currentValue, setExpression, expression, memoryValue, setMemoryValue } = props;
  const buttons = ['MC', 'MR', 'M+', 'M-', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/','C'];

  function handleButtonClick(value) {
    if (!isNaN(value) || value === '.') {
      setCurrentValue(currentValue + value);
    } else if (value === 'C') {
      setCurrentValue('');
      setExpression('');
    } else if (value === '=') {
      const result = evaluateExpression(expression + currentValue);
      setCurrentValue(result.toString());
      setExpression('');
    } else if (value === 'M+') {
      setMemoryValue(memoryValue + parseFloat(currentValue));
      setCurrentValue('');
    } else if (value === 'M-') {
      setMemoryValue(memoryValue - parseFloat(currentValue));
      setCurrentValue('');
    } else if (value === 'MR') {
      setCurrentValue(memoryValue.toString());
    } else if (value === 'MC') {
      setMemoryValue(0);
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
