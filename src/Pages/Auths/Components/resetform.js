import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../../../Commons/ErrorAlert";
import useAuth from "../../../GlobalContexts/authcontext";
import Reset from "../Reset";

function ResetForm() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [sucess, setSucess] = React.useState(false);

  const { resetPassword } = useAuth();
  const emailRef = React.useRef();
  const history = useHistory();
  async function handleResetPassword(e) {
    e.preventDefault();
    try {
      setErrorMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setSucess(true);
    } catch (error) {
      setErrorMessage("Failed to reset password");
    }
    setLoading(false);
  }

  return sucess ? (
    <ResetSucess />
  ) : (
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

        <div className="form-control mt-6">
          <input
            disabled={loading}
            onClick={handleResetPassword}
            type="button"
            value="Password Reset"
            className="btn btn-base-100"
          />
        </div>

        <div className="form-control mt-6">
          <input
            onClick={() => {
              history.push("/login");
            }}
            disabled={loading}
            type="button"
            value="Login"
            className="btn btn-primary"
          />
        </div>

        <button onClick={() => {}} className="btn btn-link">
          Need account ? Sign Up
        </button>
      </div>
    </div>
  );
}

function ResetSucess() {
  const history = useHistory();
  return (
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <div className="card-body  ">
        <h1 classNameName="font-bold text-lg text-center">
          Please check your email to reset your password.
        </h1>
        <input
          onClick={() => {
            history.push("/login");
          }}
          type="button"
          value="Login"
          className="mt-4 btn btn-primary"
        />
      </div>
    </div>
  );
}

export default ResetForm;
