import React from "react";
import login_illustration from "./Assets/loginsidegirl.png";

import maibrain_logo from "./Assets/maibrain_logo.png";

const styles = {
  body: "h-screen w-full bg-white-400 ",
  login_container: "grid  md:grid-flow-col  lg:grid-cols-2 h-full",
  login_illustration: "bg-red-400",
  login_body: "bg-green-400",
};

export default function Test() {
  const classes = styles;
  return (
    <div className="">
      <Logo src={maibrain_logo} />

      <LoginForm />
    </div>
  );
}



function LoginForm() {
  return (<div className="flex flex-nowrap my-8 lg:items-center lg:flex-row  sm:flex-col justify-center sm:items-center ">
  <div class="md:w-3/5 sm:w-2/3 ">
    <img alt="" src={login_illustration} />
  </div>
  <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
    <div class="card-body  ">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          class="input input-bordered font-semibold"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          class="input input-bordered font-semibold"
        />
        <label class="label">
          <a href="#" class="label-text-alt font-semibold">
            Forgot password?
          </a>
        </label>
      </div>
      <div class="form-control mt-6">
        <input type="button" value="Login" class="btn btn-primary" />
      </div>
    </div>
  </div>
</div>)

}

function Logo(props) {
  return (
    <div class="flex justify-start">
      <div class=" p-2 avatar">
        <div class="mt-2 w-28 h-28 ">
          <img alt="Maibrain" src={props.src} />
        </div>
      </div>
    </div>
  );
}

/*

     
         
*/
