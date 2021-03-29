import React from "react";
import UserForm from "./UserForm";
import './UserPage.css'
import Header from "../header/Header";

const RegisterPage = () => {
  return(
    <div className='user-page-container'>
      <Header />
      <UserForm type={'Register'} />
    </div>
  )
}

export default RegisterPage;
