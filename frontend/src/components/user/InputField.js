import React from "react";
import './InputField.css'

const InputField = (props) => {

  const placeholder = props.placeholder;
  const inputType = props.inputType;
  const onChangeFunction = props.onChangeFunction;
  const name = props.name;

  return (
    <div className='input-field-container'>
      <input className='input-field' placeholder={placeholder} type={inputType} onChange={onChangeFunction} name={name}/>
    </div>
  )
}

export default InputField;
