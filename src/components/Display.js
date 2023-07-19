import React from 'react';

import "./Display.css";

function Display(props) {
    return (
      <div className="display">
        <span className="expression">
          {props.memoryValue !== 0 && 'M '}
          {props.expression}
        </span>
        <span className="current-value">{props.currentValue}</span>
      </div>
    );
  }

export default Display;
