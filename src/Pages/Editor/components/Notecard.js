import React from "react";
import Entities from "./Entities";

function Notecard(props) {
  return (
    
    <div className="w-auto bg-white-100 shadow-lg border-2">
      <div className="flex flex-row ">
        <div className="py-2 px-2 flex  w-full ">
          <div className="form-control  w-full">
            {props.input}
          </div>

          <button onClick={props.saveFunc} class="btn w-1/3 btn-success">Add Note</button>
          <button
            onClick={props.closeFunc}
            class="btn my-2  text-center bg-gray-300 mx-1 btn-sm btn-circle"
          >
            X
          </button>
        </div>
      </div>
      <div className="flex flex-wrap  bg-green-100 ">
        <div className="w-full max-h-36 overflow-y-scroll">
          <Entities entityList={props.entityList}  entityFunc={props.entityFunc}  />
        </div>
      </div>

      <div className=" flex justify-between items-center">
        <div class="p-1 card bordered">
          <div className="flex items-center">
            <div class="form-control p-2">
              <label class="cursor-pointer label">
                <span class="label-text px-2">Low </span>
                <input
                  type="radio"
                  name="opt"
                  class="radio radio-secondary"
                  value=""
                />
              </label>
            </div>

            <div class="form-control p-2">
              <label class="cursor-pointer label">
                <span class="label-text px-2 ">High </span>
                <input
                  type="radio"
                  name="opt"
                  class="radio radio-secondary"
                  value=""
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button 
          onClick={props.addEntityFunc}
          
          className="m-2 btn btn-sm btn-ghost ">Add Entity</button>
        </div>
      </div>

      <div className="w-auto text-left px-2 text-md bg-purple-100 max-h-60 overflow-y-scroll">
        {props.text}
      </div>
    </div>
  );
}

export default Notecard;
