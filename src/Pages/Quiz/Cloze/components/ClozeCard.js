import React from "react";

import ReactCardFlip from "react-card-flip";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Speak from "../../../../Services/tts";


function ClozeCard(props) {
  const [toggleFlip, setToggleFlip] = React.useState(false);
  const [toogleSound, setToggleSound] = React.useState(true);

  return (
    <div class="w-2/3 cursor-pointer shadow hover:shadow-xl  justify-center items-center  ">
      <ReactCardFlip
        flipSpeedBackToFront="0.8"
        flipSpeedFrontToBack="0.8"
        class=""
        isFlipped={toggleFlip}
        flipDirection="vertical"
      >
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
      <p
        onClick={(e) => {
          setToggleSound(!toogleSound);
          if (toogleSound) {
            Speak(true, toggleFlip ? props.answer : props.question);
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


export default ClozeCard;