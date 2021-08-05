import React from "react";
import Navbar from "./Commons/Navbar/Navbar";

import { IoAddCircleSharp } from "react-icons/io5";

function Nodes(props) {
  const data = ["Science", "Physics", "Title","Physics"];
  const [nlist, setNlist] = React.useState(data);
  const [nodeCheck,setNodecheck]=React.useState(true)

  const nodeRef=React.useRef()

React.useEffect(()=>{

  if(nodeRef.current.value.length !==0){
   
    setNlist(prevstate=>[...prevstate,nodeRef.current.value])
    console.log(nlist)
  }

},[nodeCheck])

  const nlists = nlist.map((each, index) => {
    return (
      <li
        id={index}
        onClick={(e) => {
          setNlist((prevstate) => prevstate.filter((item) => item !== each));
          console.log(nlist);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-2 h-2 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <p className="badge badge-warning cursor-pointer">{each}</p>
      </li>
    );
  });

  return (
    <div className="flex justify-start items-center gap-2 bg-white-400">
      <div className="text-sm breadcrumbs">
        <ul>{nlists}</ul>
      </div>
      <div className="dropdown dropdown-end">
        <div tabindex="0" className="btn btn-sm btn-accent rounded-btn">
          Add Node
        </div>
        <ul
          tabindex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div className="form-control">
              <input
              ref={nodeRef}
                type="text"
                placeholder="Node Title"
                className="mb-1 input input-bordered"
              />
            </div>
            <button onClick={(e)=>{
             
           setNodecheck(!nodeCheck)
            }} className="btn btn-sm">Add</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

<div className="p-2  text-sm breadcrumbs"></div>;

export default function test() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-white-400">
        <div className="grid grid-flow-row grid-rows-8">
          <div className="p-2 text-6xl row-span-1 ">
            <div className="form-control">
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered text-2xl font-bold"
              />
            </div>
          </div>

          <Nodes />
        </div>
      </div>
    </div>
  );
}
