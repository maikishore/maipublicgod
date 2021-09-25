import React from 'react'
import ReactLoading from 'react-loading';


export default function LoadingDiv() {
  const z=[1,2,3].map((e,index)=>{
    return(<AnimatedDivs key={index} />)
         })
    return (
     <div className="flex flex-row gap-4 justify-center items-center">
       {z}

     </div>
   
    )
}

function AnimatedDivs(){
  return (  <div className="h-96 w-96 ">
  <div className="border  border-blue-300 shadow rounded-md p-4   mx-auto">
<div className="animate-pulse flex space-x-4">

<div className="flex-1 space-y-4 py-1">
<div className="flex-1 space-y-4 py-1">
<div className="h-40 w-full bg-blue-300 " ></div>

</div>
<div className="h-4 bg-blue-400 rounded w-3/4"></div>
<div className="space-y-2">
<div className="h-4 bg-blue-400 rounded"></div>
<div className="h-4 bg-blue-400 rounded w-5/6"></div>
</div>
</div>
</div>
</div>
</div>)
}