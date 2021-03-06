import React from "react";
import login_illustration from "../../Assets/loginsidegirl.png";
import logo from "../../Assets/maibrain_logo.png";
import Logo from "../../Commons/Logos";
import LoginForm from "./Components/loginform";


function Login() {
  return (
    <div>
      <Logo src={logo} />
      <div className="flex flex-nowrap my-8 lg:items-center lg:flex-row  sm:flex-col justify-center sm:items-center ">
        <div className="md:w-3/5 sm:w-2/3 ">
          <img alt="" src={login_illustration} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
