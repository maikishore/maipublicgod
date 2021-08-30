import React from 'react'

export default function SelectCard(props) {
    return (
        <div onClick={props.clickFunc}>
            <div className=" btn btn-ghost flex w-44 h-44 card shadow-md justify-center items-center ">
        <div className="p-2 text-center text-5xl">
         {props.icon}
        </div>

        <div className="text-center ">
          <p className="stat-value text-lg text-center text-gray-700"> {props.title} </p>
        </div>
      </div>
        </div>
    )
}
