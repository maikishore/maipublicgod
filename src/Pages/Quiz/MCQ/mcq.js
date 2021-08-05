import React from "react";
import Navbar from "../../../Commons/Navbar/Navbar";
import OptionCard from "./components/optioncard";
import McqCard from "./mcqcard";

import { useRef, useEffect } from 'react';

export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};



function Mcqq() {
  const data = [
    {
      question: "What is your 1 name",
      options: ["ashf", "sak;fs", "aksfdj", "askh"],
      correctanswer: 1,
    },

    {
      question: "What is your 2 name",
      options: ["ashdsgf", "sak##;fs", "akssfdj", "askh"],
      correctanswer: 2,
    },

    {
      question: "What is your 3 name",
      options: ["ashsf", "sasafk;fs", "aks121fdj", "askh"],
      correctanswer: 3,
    },

    {
      question: "What is your 4 name",
      options: ["ash##f", "sak;fs", "aks##fdj", "askh"],
      correctanswer: 4,
    },
  ];

  return (
    <div>
      <Navbar />
      <McqCard data={data} question={data[0].question} />
    </div>
  );
}

function correct(arr1,arr2) {

  var s=0
  for(var i=0;i<arr1.length;i++){
    if(arr1[i].toString()===arr2[i].toString()){
      s=s+1
    } 
  }

  
  return s
}



function Mcq() {
  const [qnumber,setQNumber]=React.useState([])
  const [cnumber,setCNumber]=React.useState([])
  const [optnum, setOptNum] = React.useState(100);
 const [check,setCheck]=React.useState(0)
  const [inputAnswers,setinputAnswers]=React.useState([])
 
 const [currentqNumber,setCurrentqNumber]=React.useState()
 const didMountRef = React.useRef(false);

  var correctanswers=[]





 const data = [
    {
      question: "What is your 1 name",
      options: ["ashf", "sak;fs", "aksfdj", "askh"],
      correctanswer: 0,
    },

    {
      question: "What is your 2 name",
      options: ["ashdsgf", "sak##;fs", "akssfdj", "askh"],
      correctanswer: 1,
    },

    {
      question: "What is your 3 name",
      options: ["ashsf", "sasafk;fs", "aks121fdj", "askh"],
      correctanswer: 2,
    },

    {
      question: "What is your 4 name",
      options: ["ash##f", "sak;fs", "aks##fdj", "askh"],
      correctanswer: 3,
    },
  ];


  for(var i=0;i<data.length;i++) {
   
    correctanswers.push(data[i].correctanswer)

    
  }



React.useEffect(()=>{
  let qnum=[]
  for(var i=0;i<data.length;i++) {
    qnum.push(500)
    correctanswers.push(data[i].correctanswer)
  }
  //console.log("correctanswers",correctanswers)
  setQNumber([...qnum])
  setCNumber([...qnum])
 ////console.log("-->",qnumber)



},[])


const isMount = useIsMount();
useEffect(() => {
  if (isMount) {
    
  } else {
    let x=inputAnswers.slice()
    x[currentqNumber]=optnum
    setinputAnswers(prevstate=> {return x})
    console.log("inputanswers",inputAnswers);
  }
},[check]);
 





  const mcards = data.map((each, index) => {
    return (
      <div
        id={"item" + index.toString()}
        className="flex items-center justify-center w-full text-center shadow carousel-item"
      >
     

     <div className="w-full  ">
      <div className="w-full -mt-2 h-screen bg-gray-300">
        <div className="flex flex-row justify-center items-start">
          <div className="m-6 mt-40 w-1/2 h-96 shadow-md bg-white rounded-box ">
            <div className="card m-1 text-lg text-bold text-left p-4  border-2 shadow border-gray-100 bg-white-400  rounded-box">
              {data[index].question}
            </div>

            {data[index].options.map((e, i) => {
    return (
      <OptionCard
        key={i}
        value={i}
       
        onClick={(e) => {
          
          setOptNum(i);
         setCurrentqNumber(index)
         setCheck(check+1)
          
        }}
        
        color={i === optnum ? "bg-blue-500" : "bg-white"}
        optionnumber={String.fromCharCode(65+i)}
        option={e}
      />
    );
  })}
          </div>
        </div>
      </div>
    </div>
     
     
      </div>
    );
  });

  const mnavigation = data.map((each, index) => {
    return (
      <a
        href={`/mcq#item${index.toString()}`}
        className="btn btn-xs btn-circle"
      >
        {(index + 1).toString()}
      </a>
    );
  });


  return (
    <div className=" ">
      <Navbar />
      <div className=""></div>
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
