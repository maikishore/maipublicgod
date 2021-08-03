import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "./Commons/ErrorAlert";
import Navbar from "./Commons/Navbar/Navbar";
import useAuth from "./GlobalContexts/authcontext";
import ReactCardFlip from "react-card-flip";
import {
  FaVolumeUp,
  FaVolumeMute
} from "react-icons/fa";
import Speak from "./Services/tts";





function ClozeCard(props) {
  const [toggleFlip, setToggleFlip] = React.useState(false);
  const [toogleSound, setToggleSound] = React.useState(true);

  return (
    <div class="w-2/3 cursor-pointer shadow hover:shadow-xl  justify-center items-center  ">
      <ReactCardFlip flipSpeedBackToFront="0.8" flipSpeedFrontToBack="0.8" class="" isFlipped={toggleFlip} flipDirection="vertical">
        <div
          onClick={() => {
            setToggleFlip(!toggleFlip);
          }}
          class="py-40  bg-white"
        >
          <div class="flex flex-col justify-center items-center">  
           <p class="break-words text-center text-lg font-bold">
            {props.question}

          </p> 
         
          
          </div>
         

          
         
        </div>

        <div
          onClick={() => {
            setToggleFlip(!toggleFlip);
          }}
          class="py-40 bg-white"
        >
          <p class="break-words text-center text-lg font-bold">
            {props.answer}
          </p>
        </div>
      </ReactCardFlip>
      <p onClick={(e)=>{
        setToggleSound(!toogleSound)
        if(toogleSound) {

          Speak(true,toggleFlip?props.answer:props.question)
          
        }
        else {
          window.speechSynthesis.cancel()
        
          
        }
        
      }} className="btn  btn-ghost mt-2 p-2 text-xl text-blue-800"> 
      
    {toogleSound?<FaVolumeUp />:<FaVolumeMute />}
      
      </p>

    </div>
  );
}

function Test() {
  const data = [
    { question: "This is first questionThis is first questioThis is first question", answer: "This is first answer" },
    { question: "This is second question", answer: "This is first answer" },
    { question: "This is third question", answer: "This is first answer" },
    { question: "This is fourth question", answer: "This is first answer" },
  ];




  
  const clozecards = data.map((each, index) => {
    return (
      <div
        id={"item" + index.toString()}
        class="flex items-center justify-center w-full text-center shadow carousel-item"
      >
        <ClozeCard question={each.question} answer={each.answer} />
      </div>
    );
  });

  const clozenavigation = data.map((each, index) => {
    return (
      <a href={`/test#item${index.toString()}`} class="btn btn-xs btn-circle">
        {(index + 1).toString()}
      </a>
    );
  });

  return (
    <div class=" ">
      <Navbar />
      <div
        style={{ height: "80vh" }}
        class="w-full   bg-gray-200 text-center carousel"
      >
        {clozecards}

       
      </div>
  
      <div class="flex justify-center w-full my-1 space-x-2">
        {clozenavigation}
      </div>
    </div>
  );
}






export default Test;
