import React from "react";
import { useHistory } from "react-router-dom";


import { HiAnnotation, HiOutlinePencil, HiPencil, HiPencilAlt, HiQrcode } from "react-icons/hi";
import Navbar from "../../Commons/Navbar/Navbar";




function QuizTypeCard(props) {
  return (
    <div 
    onClick={props.handleClick}
    class="mx-2  flex btn btn-ghost card w-full h-60 lg:w-40 lg:h-1/3  flex-col  flex-auto bg-white  justify-center items-center hover:shadow-xl hover:bg-green-200">
      <div>
        <p class="p-2 text-8xl "> {props.icon} </p>
       
      </div>
      <div class="p-2 text-lg">{props.text}</div>
    </div>
  );
}

function Quiz() {
const data=[
  {icon:<HiAnnotation />,text:"ONE",goto:"/test"},
  {icon:<HiPencil />,text:"two",goto:"/test"},
  {icon:<HiPencilAlt />,text:"three",goto:"/test"},
  {icon:<HiQrcode />,text:"four",goto:"/test"},
  {icon:<HiQrcode />,text:"five",goto:"/test"},
  {icon:<HiQrcode />,text:"six",goto:"/test"},
]

const Qcards=data.map((each)=>{
  return <QuizTypeCard key={each.text} icon={each.icon} text={each.text} handleClick={()=>{
    console.log(each.goto) 
  }}/>
})




  return (
    <div class="bg-gray-600 ">
      <Navbar />
      
      <div class="flex  justify-center bg-gray-600 h-screen ">


 
      <div class="flex  flex-col w-full  lg:flex-row justify-center items-center">  {Qcards} </div>

      </div>
 
    </div>
  );
}
export default Quiz;
