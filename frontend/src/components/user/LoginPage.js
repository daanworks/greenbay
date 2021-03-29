import React from "react";
import UserForm from "./UserForm";
import './UserPage.css'
import Header from "../header/Header";

const LoginPage = () => {
  return(
    <div className='user-page-container'>
      <Header />
      <UserForm type={'Login'} />
    </div>
  );
}

export default LoginPage;
