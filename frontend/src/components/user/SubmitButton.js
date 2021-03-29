import React from "react";
import './SubmitButton.css'

const SubmitButton = (props) => {

  const buttonText = props.buttonText;

  return(
    <div className='submit-button-container'>
      <button type='submit' className='submit-button'>{buttonText}</button>
    </div>
  );
}

export default SubmitButton;
