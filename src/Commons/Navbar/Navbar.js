import React from "react";
import logo from "../../Assets/maibrain_logo.png";

function Navbar() {
  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
      <div class="flex-none  lg:flex"></div>
      <div class="flex-1  px-2 py-2 mx-2 lg:flex">
        <div class="flex flex-row items-center gap-4 justify-center">
          <div class="w-20 btn btn-circle rounded-md shadow-lg">
            <img class="  shadow-lg" alt="" src={logo} />
          </div>

          <div class="text-lg font-bold">MAIBRAIN</div>
        </div>
      </div>
      <div class="flex-1  lg:flex-none ">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-ghost" />
        </div>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-none btn btn-ghost">
        <div class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-ghost rounded-btn">
            {" "}
            <div class="avatar">
              <div class="rounded-full w-10 h-10 m-1">
                <img src="https://i.pravatar.cc/500?img=32" />
              </div>
            </div>
          </div>
          <ul class="shadow hover :bg-gray-100 menu dropdown-content bg-gray-700 rounded-box w-52">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
