import React from "react";

import "./LoginBase.css";

const LoginBox = () => {
  return (
    <div className="Login">
      <div className="Box">
        <p className="slogan">
          Enrich<br></br>Energy
          <br></br>Effeciently wrt <br></br>Time
        </p>
        <div className="login-box">
          <div className="Credential">
            <p className="login-text">Login</p>
            <input type={"text"} name="Username" placeholder="Username"></input>
            <input type={"text"} name="password" placeholder="password"></input>
            <button>Login</button>
            <hr></hr>
            <div className="Other-login">
              <button>Google</button>
              <button>github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
