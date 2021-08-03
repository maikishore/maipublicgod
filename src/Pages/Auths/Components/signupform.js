import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../../../Commons/ErrorAlert";
import useAuth from "../../../GlobalContexts/authcontext";

function SignUpForm() {
  const history = useHistory();
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
        setLoading(true);

        await signup(emailRef.current.value, passwordRef.current.value);
        history.push("/login");
      } catch {
        setErrorMessage("Failed to create an account");
      }
      setLoading(false);
    }
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      {errorMessage ? <ErrorAlert message={errorMessage} /> : ""}
      <div className="card-body  ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="email"
            className="input input-bordered font-semibold"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
            className="input input-bordered font-semibold"
          />
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            ref={confirmpasswordRef}
            type="password"
            placeholder="password again"
            className="input input-bordered font-semibold"
          />

          <label className="label">
            Already have an acccount ?
            <button
              onClick={() => {
                history.push("/signin");
              }}
              className="btn btn-link"
            >
              Login In
            </button>
          </label>
        </div>
        <div className="form-control mt-6">
          <input
            onClick={handlSubmit}
            type="button"
            value="Sign Up"
            disabled={loading}
            className="btn btn-primary "
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
