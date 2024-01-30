// components/Button.js
import React from 'react';

const Button = ({ name, id, className, onClick , color }) => {
  return (
    <button
      type="button"
      id={id}
      className={`bg-${color} text-white font-semibold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
