import React from "react";
import { useHistory } from "react-router";
import logo from "../../Assets/maibrain_logo.png";
import useAuth from "../../GlobalContexts/authcontext";
import testavatar from "../../Assets/testavatar.svg";

import { postDataMB } from "../../Services/post";
import {
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
} from "../../Assets/avatars/avatars";

function Navbar() {
  const avatars = [two, three, four, five, six, seven, eight];
  const { currentUser } = useAuth();
  const history = useHistory();
  const { logout } = useAuth();
  const [avatarIndex, setAvatarIndex] = React.useState(0);
  React.useEffect(() => {
    const f = async () => {
      const k = await postDataMB("/getprofile", { _id: currentUser.uid });

      setAvatarIndex(k["data"][0]["avatar"]);
    };
    f();
  }, []);

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
      <div className="flex-none  lg:flex"></div>
      <div className="flex-1  px-2 py-2 mx-2 lg:flex">
        <div className="flex flex-row items-center gap-4 justify-center">
          <div className="w-20 btn btn-circle rounded-md shadow-lg">
            <img className="  shadow-lg" alt="" src={logo} />
          </div>

          <div className="text-lg font-bold">MAIBRAIN</div>
        </div>
      </div>
      <div className="flex-1  lg:flex-none ">
        <div className="form-control">
          <button
            onClick={() => {
              history.push("/library");
            }}
            className="btn btn-ghost"
          >
            Home
          </button>
        </div>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none btn btn-ghost">
        <div className="dropdown dropdown-end">
          <div tabIndex="0" className="btn btn-ghost rounded-btn">
            {" "}
            <div className="avatar">
              <div className="rounded-full w-10 h-10 m-1">
                <img src={avatars[avatarIndex]} alt="#"/>
              </div>
            </div>
          </div>
          <ul className="shadow menu dropdown-content bg-gray-200 rounded-box w-52">
            <li>
              <button onClick={(e) => {
                history.push("/profile")
              }} className="btn btn-ghost">
                Profile
              </button>
            </li>
           
            <li>
              <button
                onClick={(e) => {
                  logout();
                  history.push("/login");
                }}
                className="btn btn-ghost"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
