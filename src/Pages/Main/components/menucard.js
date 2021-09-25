import React from "react";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Truncate } from "../../../Commons/Truncate";
import note from "../../../Assets/note.svg";

export default function MenuCard(props) {
  return (
    <div className="m-2 flex card h-96 w-96 shadow-md hover:shadow-xl hover:border-gray-100">
      <div className="h-1/3 bg-hero-pattern bg-cover bg-opacity-100 ">
        <img
          alt=""
          className={`h-full w-full     ${
            props.type === "WEB" ? "object-contain" : "object-cover"
          } `}
          src={props.imgsrc.length <= 1 ? note : props.imgsrc}
        />
      </div>
      <div className="my-1 flex flex-row items-baseline justify-end">
        <FaRegClock />
        <div className="px-1 stat-title">{props.timetoread}</div>
      </div>

      <div className="m-1  max-h-12  overflow-hidden flex gap-1 flex-wrap ">
        {props.nodes.map((each, index) => {
          return (
            <div key={index} className="badge bg-gray-600">
              {Truncate(each, 12)}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap flex-row justify-between items-baseline">
        <p className="p-2 overflow-y-hidden h-24 w-full font-bold text-4xl text-left">
          {props.title}
        </p>
      </div>

      <div className="mt-4 w-full flex items-baseline justify-between">
        <div className="m-2 card rounded flex-row items-baseline justify-center">
          <p className="font-bold">Maiscore</p>

          <div className="badge ml-2 badge-outline">{props.maiscore}</div>
        </div>

        <div className="flex items-center justify-center ">
          <button
            onClick={props.deleteClick}
            className="btn btn-outline btn-sm "
          >
            <AiOutlineDelete className="text-xl " />
          </button>

          <button onClick={props.openClick} className="btn btn-sm mx-1 ">
            Open
          </button>
          <button
            onClick={props.memorizeClick}
            className="btn btn-sm mx-1 btn-info"
          >
            Memorize
          </button>
        </div>
      </div>
    </div>
  );
}
