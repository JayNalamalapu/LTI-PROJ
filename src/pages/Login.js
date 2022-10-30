import React from "react";
import "./Login.css";
import profile from "C:/Users/reddy/Desktop/full-stack/lti-proj/src/image/a.png";
import pass from "C:/Users/reddy/Desktop/full-stack/lti-proj/src/image/pass.png";
import email from "C:/Users/reddy/Desktop/full-stack/lti-proj/src/image/email.jpg";
import { BrowserRouter as Router, Switch, Route, Link, useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
  return (
    <div className="main">
         <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button onClick={() => {
            navigate("/Home");
          }}>Login</button>
          </div>
           
            <p className="link">
              <a href="#" onClick={() => navigate("/Register")}>Sign Up</a>
            </p>  
            
         </div>
       </div>
     </div>
    </div>
  );
}

export default Login;