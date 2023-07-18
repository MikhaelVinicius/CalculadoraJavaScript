import React from 'react';

import Button from './Button';

function ButtonBox(props) {
  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];

  function handleButtonClick(value) {
    // implementação da função para lidar com o clique do botão
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
