import React from "react";
import Navbar from "../../../Commons/Navbar/Navbar";
import McqCard from "./mcqcard";

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
console.log(arr1,arr2,"called")
  var s=0
  for(var i=0;i<arr1.length;i++){
    if(arr1[i].toString()===arr2[i].toString()){
      s=s+1
    } 
  }
  console.log("sum",s)
  return s
}



function Mcq() {
  const [qnumber,setQNumber]=React.useState([])
  const [cnumber,setCNumber]=React.useState([])

 
  const [currentIndex,setCurrentIndex]=React.useState(0)
 
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
    console.log("cca",correctanswers)
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

 
React.useEffect(()=>{

return ()=>{}
},[currentIndex])




  const mcards = data.map((each, index) => {
    return (
      <div
        id={"item" + index.toString()}
        className="flex items-center justify-center w-full text-center shadow carousel-item"
      >
        <McqCard data={each} question={
          data[index].question} func={(e)=>{
         console.log(e)
            /*
            let x=qnumber
    
            x[index]=100
            setQNumber(prevState=>x)

            let y=cnumber
        
            y[index]=e.currentTarget
            setCNumber(prevState=>y)




          
            if(parseInt(qnumber.reduce((a, b) => a + b, 0))===parseInt(data.length*100)){
              console.log("Hurruy!")
             
              console.log("correcty",correct(correctanswers,cnumber))
            }*/
     
         }
      } />
     
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
