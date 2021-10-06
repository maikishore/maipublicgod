import React from "react";
import { useHistory } from "react-router-dom";

import ErrorAlert from "../../Commons/ErrorAlert";
import useAuth from "../../GlobalContexts/authcontext";
import { two ,three,four,five,six,seven,eight} from "../../Assets/avatars/avatars";

import {FaCheckCircle} from "react-icons/fa";
import { postDataMB } from "../../Services/post";
import AlertDiv from "../../Commons/AlertDiv";
import Navbar from "../../Commons/Navbar/Navbar";


const styles = {
  update_profile_container:
    "py-10 flex justify-center w-full  min-h-screen  bg-white-100",
  update_profile_card: "card bordered",
  update_profile_card_body: "",
  profile_avatar: "",
  username: "",
  email_input: "",
  update_button: "",
  logout_button: "",
};





function Profile(props) {
  const classNamees = styles;
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(1);
  
  const [value,setValue] = React.useState();
  const { currentUser, logout,  } = useAuth();
  const history = useHistory();
  const emailRef = React.useRef();
  const nameRef = React.useRef();
  const ageRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [updateCheck, setUpdateCheck] = React.useState(false);
  async function handleLogout() {
    setErrorMessage("");
    setLoading(true);
    try {
      await logout();
      history.push("/login");

    } catch {
      setErrorMessage("Failed to logout ");
     
    }
    setLoading(false);
  }
  
/*
  async function handleUpdate() {
    setErrorMessage("");
    try {
      await updateEmail(emailRef.current.value);
      history.push("/reset");
    } catch {
      setErrorMessage("Failed to update profile ");
    }
  }*/
const x=[two ,three,four,five,six,seven,eight]









React.useEffect(()=>{


const f=async()=>{
  await postDataMB("/updateprofile",

 {"_id":currentUser.uid,"update" :{
    "name":nameRef.current.value,
"age":ageRef.current.value,
"avatar":imageIndex}}
  )

}
 
if(updateCheck){
  f()
  setUpdateCheck(false)
  setErrorMessage(true)

}

return ()=>{}
},[updateCheck])




const avatars=x.map((each,index)=>{
  return (
    <div class="my-6 avatar indicator">
     {imageIndex===index?<div class="indicator-item badge bg-green-400"><FaCheckCircle /></div> :null}
      <div class="w-24 h-24 rounded-btn">
        <img className="btn btn-circle btn-ghost" src={each} alt={each} onClick={(e)=>{
          setImageIndex(index)
        }}/>
      </div>
    </div>
    )
})
  return (
    <div>
  {props.navbar}
      {errorMessage ?   <AlertDiv status="success" message="Sucessfully Updated" closefunc={(e)=>{
    setErrorMessage(false)
  }}/> : null}
    <div className={classNamees.update_profile_container}>
  
   

      <div className="card w-1/2 h-2/3 text-center shadow-2xl">
        <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center">   

{avatars}

</div>
<h1>Pick your avatar</h1>

        </div>
       
  
        <div className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              type="text"
              placeholder={currentUser.email}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              
              className="input input-bordered"
            />
          </div>


      



          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              ref={ageRef}
              type="text"
              
              className="input input-bordered"
            />
          </div>
          <div className="justify-evenly card-actions">
            <button
              disabled={loading}
              onClick={(e)=>{
                setUpdateCheck(true)
              }}
              className="btn btn-outline btn-primary"
            >
              Update
            </button>

            <button
              disabled={loading}
              onClick={(e) => {
             history.push("/library")
              }}
              className="btn btn-outline btn-warning hover:bg-green-300"
            >
              Home
            </button>
            <button
              disabled={loading}
              onClick={() => {
                handleLogout();
              }}
              className="btn btn-outline btn-secondary"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
