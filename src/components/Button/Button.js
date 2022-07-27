import React from 'react';
import './Button.css'
const Button = ({ className, value, onclick }) => {
    return (
        <button className={className} onclick={onclick}>
            {value}
        </button>
    );
};

export default Button;