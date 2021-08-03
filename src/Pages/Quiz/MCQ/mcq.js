import React from 'react'
import Navbar from '../../../Commons/Navbar/Navbar';
import McqCard from './mcqcard';


function Mcqq() {
    const data = [
        {
          question: "What is your 1 name",
          options: ["ashf", "sak;fs", "aksfdj", "askh"],
          correctanswer:1  
        },

        {
            question: "What is your 2 name",
            options: ["ashdsgf", "sak##;fs", "akssfdj", "askh"],
            correctanswer:2  
          },


          {
            question: "What is your 3 name",
            options: ["ashsf", "sasafk;fs", "aks121fdj", "askh"],
            correctanswer:3 
          },

          {
            question: "What is your 4 name",
            options: ["ash##f", "sak;fs", "aks##fdj", "askh"],
            correctanswer:4 
          },
      ];

    return (
        <div>
            <Navbar />
<McqCard data={data}  question={data[0].question}/>

        </div>
    )
}

function Mcq() {
    const data = [
        {
          question: "What is your 1 name",
          options: ["ashf", "sak;fs", "aksfdj", "askh"],
          correctanswer:1  
        },

        {
            question: "What is your 2 name",
            options: ["ashdsgf", "sak##;fs", "akssfdj", "askh"],
            correctanswer:2  
          },


          {
            question: "What is your 3 name",
            options: ["ashsf", "sasafk;fs", "aks121fdj", "askh"],
            correctanswer:3 
          },

          {
            question: "What is your 4 name",
            options: ["ash##f", "sak;fs", "aks##fdj", "askh"],
            correctanswer:4 
          },
      ];

  
    const mcards = data.map((each, index) => {
      return (
        <div
          id={"item" + index.toString()}
          className="flex items-center justify-center w-full text-center shadow carousel-item"
        >
        <McqCard data={each}  question={data[index].question}/>
        </div>
      );
    });
  
    const mnavigation = data.map((each, index) => {
      return (
        <a href={`/mcq#item${index.toString()}`} className="btn btn-xs btn-circle">
          {(index + 1).toString()}
        </a>
      );
    });
  
    return (
      <div className=" ">
        <Navbar />
        <div className="bg-red-400"></div>
        <div
          style={{ height: "80vh" }}
          className="w-full   bg-gray-200 text-center carousel"
        >
          {mcards}
        </div>
  
        <div className="flex justify-center w-full my-1 space-x-2">
          {mnavigation}
        </div>
      </div>
    );
  }
  









export default Mcq;