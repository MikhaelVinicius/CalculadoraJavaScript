import React from 'react';
import "./CssComponents.css";

function Button(props) {
  return (
    <button className="calculator-button" onClick={props.onClick}>
      {props.value}
    </button>
  
    
  );
}

export default Button;
