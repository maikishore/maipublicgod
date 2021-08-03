import React from 'react'
import Navbar from '../../../Commons/Navbar/Navbar';
import ClozeCard from './components/ClozeCard';


function Cloze() {
  const data = [
    {
      question:
        "This is first questionThis is first questioThis is first question",
      answer: "This is first answer",
    },
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
      <a href={`/cloze#item${index.toString()}`} class="btn btn-xs btn-circle">
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


export default Cloze;