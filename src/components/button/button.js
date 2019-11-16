import React from 'react';
import './button.css';

const Button = (props) => {
return <div data-testid="button"
      className="buttonGray">
      {props.label}
    </div>;
};

export default Button;