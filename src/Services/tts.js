import React from "react";
function Speak(play = false, text = "") {
  let speech = new SpeechSynthesisUtterance();
  var syth = window.speechSynthesis.getVoices();
  
  speech.text = text;
  speech.pitch = 0.7;
  speech.voice = syth[1];
  if (play) {
    window.speechSynthesis.speak(speech);
  } else {
    window.speechSynthesis.cancel();
  }
}


export default Speak;
