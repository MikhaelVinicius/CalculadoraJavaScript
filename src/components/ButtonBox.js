import React from 'react';

import Button from './Button';
import "./CssComponents.css";

function ButtonBox(props) {
  const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];

  function handleButtonClick(value) {
  
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
