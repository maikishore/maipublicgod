import React from 'react'
import login_illustration from "../../Assets/loginsidegirl.png"
import ResetForm from './Components/resetform';
import logo from "../../Assets/maibrain_logo.png"
import Logo from '../../Commons/Logos';





  

function Reset() {
    
    return (
        <div><Logo src={logo} />
        <div className="flex flex-nowrap my-8 lg:items-center lg:flex-row  sm:flex-col justify-center sm:items-center ">
        <div class="md:w-3/5 sm:w-2/3 ">
          <img alt="" src={login_illustration} />
        </div>
   <ResetForm />
        </div>
        </div>
    )
}



export default Reset;


