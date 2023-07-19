
export function evaluateExpression(expression) {
    try {
      
      return Function(`'use strict'; return (${expression});`)();
    } catch (error) {
      return 'Error';
    }
  }

  