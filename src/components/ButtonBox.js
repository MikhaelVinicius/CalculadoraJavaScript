import React from 'react';
import "./CssComponents.css";
import Button from './Button';

function ButtonBox(props) {
  const { setCurrentValue, currentValue, setExpression, expression } = props;
  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];

  function handleButtonClick(value) {
    // Verifique se o valor é um número ou um ponto decimal
    if (!isNaN(value) || value === '.') {
      // Se for um número ou um ponto decimal, adicione-o ao final do valor atual
      setCurrentValue(currentValue + value);
    } else if (value === 'C') {
      // Se for o botão "C", limpe o valor atual e a expressão
      setCurrentValue('');
      setExpression('');
    } else if (value === '=') {
      // Se for o botão "=", avalie a expressão e defina o resultado como o valor atual
      const result = eval(expression + currentValue);
      setCurrentValue(result.toString());
      setExpression('');
    } else {
      // Caso contrário, adicione o valor atual e o operador à expressão
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
