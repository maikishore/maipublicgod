import React from 'react'


function OptionCard(props) {

  const [optnum, setOptNum] = React.useState(100);
    return (  <div 
    
    onClick={props.onClick}
    className={`${props.color} flex flex-col-2 btn btn-ghost cursor-pointer hover:bg-blue-200 hover:shadow-xl hover:border-6 border-2 my-2 mx-1 justify-start rounded-box `}>
    <div className="px-4 py-2 bg-gray-200 text-center text-extrabold text-lg rounded-box">
      {props.optionnumber}
    </div>
    <div className="px-2 py-2 text-center ">{props.option}</div>
    </div>)
  
    }

export default OptionCard;