import React from 'react'

 function Test() {
  return (
    <div className=" w-full h-screen">
      <button onClick={()=>{
        console.log(process.env.REACT_APP_API_KEY)
      }}>click</button>
      
    </div>
  )
}

export default Test;