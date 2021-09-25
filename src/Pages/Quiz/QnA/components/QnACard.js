import React from "react";

import ReactCardFlip from "react-card-flip";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Speak from "../../../../Services/tts";


function QnACard(props) {
  const [toggleFlip, setToggleFlip] = React.useState(false);
  const [toogleSound, setToggleSound] = React.useState(true);

  return (
    <div className="w-2/3 cursor-pointer shadow hover:shadow-xl  justify-center items-center  ">
      <ReactCardFlip
        flipSpeedBackToFront="0.8"
        flipSpeedFrontToBack="0.8"
        className=""
        isFlipped={toggleFlip}
        flipDirection="vertical"
      >
        <div
          onClick={() => {
            props.trackfunc()
            

            setToggleFlip(!toggleFlip);
          }}
          className="py-40  bg-white"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="break-words text-center text-lg font-bold">
              {props.question}
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            
            setToggleFlip(!toggleFlip);
            
          }}
          className="py-40 bg-white"
        >
          <p className="break-words text-center text-lg font-bold">
            {props.answer}
          </p>
        </div>
      </ReactCardFlip>
      <p
        onClick={(e) => {
          setToggleSound(!toogleSound);
          if (toogleSound) {
            Speak(true, toggleFlip ? props.answer.replace(/_/g*props.answer, "dash") : props.speakquestion);
          } else {
            window.speechSynthesis.cancel();
          }
        }}
        className="btn  btn-ghost mt-2 p-2 text-xl text-blue-800"
      >
        {toogleSound ? <FaVolumeUp /> : <FaVolumeMute />}
      </p>
    </div>
  );
}


export default QnACard;