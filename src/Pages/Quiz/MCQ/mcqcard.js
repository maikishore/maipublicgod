import React from "react";
import OptionCard from "./components/optioncard";

function McqCard(props) {
  const [optnum, setOptNum] = React.useState(100);
  const func=props.func
  const options = props.data.options.map((e, index) => {
    return (
      <OptionCard
        key={index}
        value={index}
        onClick={(e) => {
          func()
          setOptNum(index);
          
        }}
        
        color={index === optnum ? "bg-blue-500" : "bg-white"}
        optionnumber={String.fromCharCode(65+index)}
        option={e}
      />
    );
  });

  return (
    <div className="w-full  ">
      <div className="w-full -mt-2 h-screen bg-gray-300">
        <div className="flex flex-row justify-center items-start">
          <div className="m-6 mt-40 w-1/2 h-96 shadow-md bg-white rounded-box ">
            <div className="card m-1 text-lg text-bold text-left p-4  border-2 shadow border-gray-100 bg-white-400  rounded-box">
              {props.question}
            </div>

            {options}
          </div>
        </div>
      </div>
    </div>
  );
}
export default McqCard;
