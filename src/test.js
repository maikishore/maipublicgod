import React from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "./Commons/ErrorAlert";
import Navbar from "./Commons/Navbar/Navbar";
import useAuth from "./GlobalContexts/authcontext";

function Test() {
  return <div>

<Navbar />

<div className="flex flex-col-auto justify-center items-center h-min-screen"><div class="carousel rounded-box">
  <div class="carousel-item">
    <img src="https://picsum.photos/id/500/256/144"/>
  </div> 
  <div class="carousel-item">
    <img src="https://picsum.photos/id/501/256/144"/>
  </div> 
  <div class="carousel-item">
    <img src="https://picsum.photos/id/502/256/144"/>
  </div> 
  <div class="carousel-item">
    <img src="https://picsum.photos/id/503/256/144"/>
  </div> 
  <div class="carousel-item">
    <img src="https://picsum.photos/id/504/256/144"/>
  </div> 
  <div class="carousel-item">
    <img src="https://picsum.photos/id/505/256/144"/>
  </div> 
  <div class="carousel-item">
    <img src="https://picsum.photos/id/506/256/144" />
  </div>
</div>

</div>

  </div>;
}
export default Test;
