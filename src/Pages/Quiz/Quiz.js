import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { FaQuestion, FaList, FaPuzzlePiece } from "react-icons/fa";
import { BiBracket } from "react-icons/bi";



function QuizTypeCard(props) {
  return (
    <div
      onClick={props.handleClick}
      class="flex flex-col items-center justify-center btn btn-lg btn-ghost w-40  h-40 bordered hover-bordered hover:bg-green-100 "
    >
      <div>
        <p class="p-2 text-5xl "> {props.icon} </p>
      </div>
      <div class="p-2 text-lg">{props.text}</div>
      {props.text === "MCQ" || props.text === "Matchings" ? (
        <div class=" text-xs">Comming Soon</div>
      ) : (
        <div class="stat-desc"> </div>
      )}
    </div>
  );
}

function Quiz() {
  const params = useParams();
  const history = useHistory();

  const data = [
    {
      icon: <BiBracket className="text-green-400" />,
      text: "Clozes",
      goto: `/cloze/${params["id"]}`,
    },
    {
      icon: <FaQuestion className="text-blue-400" />,
      text: "Q&A's",
      goto: `/qna/${params["id"]}`,
    },
    {
      icon: <FaList className="text-red-400" />,
      text: "MCQ",
      goto: `/quiz/${params["id"]}`,
    },
    {
      icon: <FaPuzzlePiece className="text-yellow-400" />,
      text: "Matchings",
      goto: `/quiz/${params["id"]}`,
    },
  ];

  const Qcards = data.map((each) => {
    return (
      <QuizTypeCard
        key={each.text}
        icon={each.icon}
        text={each.text}
        handleClick={() => {
          history.push(each["goto"]);
        }}
      />
    );
  });

  return (
    <div class="bg-gray-200 h-screen">
  

      <div class="bg-white w-1/2 m-auto my-40 shadow-lg rounded-box text-center flex flex-col gap-4 items-center justify-center  ">
        <div class="stat-value py-2 ">Choose your quiz type</div>

        <div class="py-2 flex  flex-col w-full  lg:flex-row justify-center items-center gap-3">
          {Qcards}{" "}
        </div>
      </div>
    </div>
  );
}
export default Quiz;
