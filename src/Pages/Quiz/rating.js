import React from "react";
import { useParams } from "react-router";


export default function Rating(props) {


  const ratings = ["Bad", "Poor", "Average", "Great", "Excellent"].map(
    (each, index) => {
      return (
        <li
          key={index}
          value={index}
          className={`step ${index <= props.indx ? "step-info" : ""}`}
          onClick={props.indexfunc}
        >
          {each}
        </li>
      );
    }
  );

  return (
    <div>
      <ul class="w-full steps">{ratings}</ul>
    </div>
  );
}
