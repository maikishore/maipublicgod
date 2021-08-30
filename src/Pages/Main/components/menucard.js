import React from "react";
import { FaBeer, FaRegClock } from "react-icons/fa";

export default function MenuCard(props) {
  return (
    <div className="m-2 flex card h-96 w-96 shadow-md hover:shadow-xl hover:border-gray-100">
      <div className="h-1/3 bg-red-400 object-contain">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={props.imgsrc}
        />
      </div>
      <div className="my-1 flex flex-row items-baseline justify-end">
        <FaRegClock />
        <div className="px-1 stat-title">{props.timetoread}</div>
      </div>

      <div className="m-2 p-1 flex gap-2 flex-wrap ">
      {props.nodes.map((each,index)=>{
          return (  <div class="badge badge-secondary">{each}</div>
)
      })}
      </div>

      <div className="flex flex-wrap flex-row justify-between items-baseline===">
        <p className="p-2 overflow-y-hidden h-24 w-full font-bold text-4xl text-left">
        {props.title}
        </p>
      </div>

      <div className="mt-4 w-full flex items-baseline justify-between">
        <div class="m-2 card rounded flex-row items-baseline justify-center">
          <p className="font-bold">Maiscore</p>

          <div class="badge ml-2 badge-outline">{props.maiscore}</div>
        </div>

        <div>
          <button onClick={props.openClick} class="btn btn-sm mx-1 ">Open</button>
          <button onClick={props.memorizeClick} class="btn btn-sm mx-1 btn-info">Memorize</button>
        </div>
      </div>
    </div>
  );
}
