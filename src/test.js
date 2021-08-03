import React from "react";

import Countdown from "react-countdown";
import Navbar from "./Commons/Navbar/Navbar";

const Completionist = () => (
  <span className="bg-red-800">You are good to go!</span>
);

// Renderer callback with condition
const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className="p-2 bg-gray-300  text-extrabold text-center text-lg">
        {minutes}:{seconds}
      </span>
    );
  }
};

//  <Countdown date={Date.now() + 60000} renderer={renderer} />

function OptionCard(props) {


return (  <div 

onClick={props.onClick}
className={`${props.color} flex flex-col-2 btn btn-ghost cursor-pointer hover:bg-blue-200 hover:shadow-xl hover:border-6 border-2 my-2 mx-1 justify-start rounded-box `}>
<div className="px-4 py-2 bg-gray-200 text-center text-extrabold text-lg rounded-box">
  {props.optionnumber}
</div>
<div className="px-2 py-2 text-center ">{props.option}</div>
</div>)

}

function Test() {


  const [optnum ,setOptNum]=React.useState(100)
  const data = [
    {
      question: "What is your name",
      options: ["ashf", "sak;fs", "aksfdj", "askh"],
    },
  ];

  const options=data.map((each)=>{
  return each.options.map((e,index)=>{
     return (<OptionCard 
      key={index}
     onClick={()=>{
       console.log(index)
       setOptNum(index)
     }}
     color={index===optnum?"bg-blue-500":"bg-white"}
      optionnumber={index} option={e} />)
   })
  })






  return (
    <div>
      <Navbar />
      <div className="w-full -mt-2 h-screen bg-gray-300">
        <div className="flex flex-row justify-center items-start">
        
        <div className="m-6  shadow-md bg-white rounded-box ">
    Title
    </div>
        
          <div className="m-6 w-1/2 h-96 shadow-md bg-white rounded-box ">
            <div className="card m-1 text-lg text-bold text-left p-4  border-2 shadow border-gray-100 bg-white-400  rounded-box">
              This is demo question This is demo Option This is demo Option This
              is demo Option This is demo Option
            </div>

     {options}

          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
