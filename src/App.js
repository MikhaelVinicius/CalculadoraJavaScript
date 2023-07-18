
import "./components/CssComponents.css";
import React, { useState } from 'react';

import ButtonBox from './components/ButtonBox';
import Display from './components/Display';






function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [expression, setExpression] = useState('');

  return (
    <div className="app">
      <Display currentValue={currentValue} expression={expression} />
      <ButtonBox
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        setExpression={setExpression}
        expression={expression}
      />
    </div>
  );
}

export default App;
