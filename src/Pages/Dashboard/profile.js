import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../../Commons/ErrorAlert";
import useAuth from "../../GlobalContexts/authcontext";

const styles = {
  update_profile_container:
    "py-10 flex justify-center w-full  min-h-screen  bg-white-100",
  update_profile_card: "card bordered",
  update_profile_card_body: "",
  profile_avatar: "",
  username: "",
  email_input: "",
  update_button: "",
  logout_button: "",
};

function Profile() {
  const classes = styles;
  const [errorMessage, setErrorMessage] = React.useState("");
  const { currentUser, logout, updateEmail } = useAuth();
  const history = useHistory();
  const emailRef = React.useRef();
  const [loading, setLoading] = React.useState(false);

  async function handleLogout() {
    setErrorMessage("");
    setLoading(true)
    try {
      await logout();
      history.push("/login");
      console.log("logged out");
    } catch {
      setErrorMessage("Failed to logout ");
      console.log("not logged out");
    }
    setLoading(false)
  }

  async function handleUpdate() {
    setErrorMessage("");
    try {
      await updateEmail(emailRef.current.value);
      history.push("/reset");
    } catch {
      setErrorMessage("Failed to update profile ");
    }
  }

  return (
    <div className={classes.update_profile_container}>
      {errorMessage ? <ErrorAlert message={errorMessage} /> : ""}

      <div class="card w-1/3 h-2/3 text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              type="text"
              placeholder={currentUser.email}
              class="input input-bordered"
            />
          </div>

          <div class="justify-evenly card-actions">
            <button disabled={loading} onClick={handleUpdate} class="btn btn-outline btn-primary">
              Update
            </button>
            <button
            disabled={loading}
              onClick={() => {
                handleLogout();
              }}
              class="btn btn-outline btn-secondary"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;