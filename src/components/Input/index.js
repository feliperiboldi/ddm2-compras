import React from 'react';

import './style.css';

export default function Input(props) {
  return(
    <input 
      id={props.id}
      type={props.type} 
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
