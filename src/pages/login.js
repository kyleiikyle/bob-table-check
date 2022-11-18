import React, { useState } from "react";

import './login.css';




const Login = () => {


  return (
   
<div class="login-box">
  <h2>Pin Code</h2>
  <form>
    <div class="user-box">
      <input id='pin' type="text" pattern="\d*" name="" required=""></input>
      
      
    </div>

    <a href="/overview">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
  );
};

export default Login;
