import React from 'react';
import './Button.css';

const STYLES = ['butn--primary', 'butn--outline', 'butn--test'];

const SIZES = ['butn--medium', 'butn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    
      <buttons
        className={`butn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </buttons>
   
  );
};
