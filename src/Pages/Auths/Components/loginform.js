import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../../../Commons/ErrorAlert";
import useAuth from "../../../GlobalContexts/authcontext";

function LoginForm() {
  const history = useHistory();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { login } = useAuth();

  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErrorMessage("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/profile");
    } catch {
      setErrorMessage("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      {errorMessage ? <ErrorAlert message={errorMessage} /> : ""}
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
            <button
              onClick={() => {
                history.push("/reset");
              }}
              href="#"
              class="label-text-alt font-semibold"
            >
              Forgot password?
            </button>
          </label>
        </div>
        <div class="form-control mt-6">
          <input
            onClick={handleSubmit}
            type="button"
            value="Login"
            class="btn btn-primary"
          />
        </div>

        <button onClick={()=>{
          history.push("/signup")
        }} class="btn btn-link">Need account ? Sign Up</button>
      </div>
    </div>
  );
}

export default LoginForm;
