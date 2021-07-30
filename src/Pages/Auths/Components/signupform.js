import React from "react";
import ErrorAlert from "../../../Commons/ErrorAlert";
import useAuth from "../../../GlobalContexts/authcontext";



function SignUpForm() {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmpasswordRef = React.useRef();

  const { signup } = useAuth();

  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handlSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      setErrorMessage("Opps! Two Passwords Mismatched");
    } else {
      try {
        setErrorMessage("");
        setLoading(true)
        console.log(passwordRef.current.value ,confirmpasswordRef.current.value)

        await signup(
          emailRef.current.value,
          passwordRef.current.value,
         
        );
       
      } catch {
        setErrorMessage("Failed to create an account");
      }
      setLoading(false)
    };
  

    }

    
  return (

    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
     {errorMessage?<ErrorAlert message={errorMessage}/>:""}
      <div class="card-body  ">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            ref={emailRef}
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
            ref={passwordRef}
            type="password"
            placeholder="password"
            class="input input-bordered font-semibold"
          />
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            ref={confirmpasswordRef}
            type="password"
            placeholder="password again"
            class="input input-bordered font-semibold"
          />

         
          <label class="label">
            Already have an acccount ?
            <button class="btn btn-link">Login In</button>
          </label>
        </div>
        <div class="form-control mt-6">
          <input
            onClick={handlSubmit}
            type="button"
            value="Sign Up"
            disabled={loading}
            class="btn btn-primary "
          />
        </div>
      </div>
    </div>
  );
}





export default SignUpForm;
