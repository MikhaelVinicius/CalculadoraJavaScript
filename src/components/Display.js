import React from 'react';

import "./CssComponents.css";

function Display(props) {
  return (
    <div className="display">
      <span className="expression">{props.expression}</span>
      <span className="current-value">{props.currentValue}</span>
    </div>
  );
}

export default Display;
