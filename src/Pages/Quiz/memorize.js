import React from "react";
import { useParams } from "react-router";
import { postData } from "../../Services/post";
/*

function Memorize() {
  const inputRef = React.useRef();
  const params = useParams();
  const [data, setData] = React.useState([]);
  const [clozes, setClozes] = React.useState([]);
  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={async (e) => {
          const k = async () => {
            const response = await fetch(
              process.env.REACT_APP_MB_URL + "/getnotes",
              {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                  doc_id: params["id"].toString(),

              
                }), // body data type must match "Content-Type" header
              }
            );

            return response.json();
          };
          const z = await k();
          setData(z["data"]);
        }}
      >
        Update Maiscore
      </button>








      <h1>Old</h1>
      <p>{JSON.stringify(data[0])}</p>


      <button
        onClick={async (e) => {
          const k = async () => {
            const response = await fetch(
              process.env.REACT_APP_ML_URL + "/cloze",
              {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                  doc_id: params["id"].toString(),
                  notes:data[0]['notes']

              
                }), // body data type must match "Content-Type" header
              }
            );

            return response.json();
          };
          const z = await k();
          console.log(z)
          setClozes(z["data"]);
        }}
      >
        Get Clozes
      </button>
<p>{JSON.stringify(clozes)}</p>

     
    </div>
  );
}

export default Memorize;
*/

export default function Memorize(){
const [indx,setIndx]=React.useState(0)


const ratings=["Bad","Poor","Average","Great","Excellent"].map((each,index)=>{
  return (<li key={index} class={`step ${index<=indx?"step-info":""}`} onClick={(e)=>{
    setIndx(index)
  }}>{each}</li> )
})

  return (
    <div>
      
<ul class="w-full steps">
  {ratings}
  
</ul>
    </div>
  )
}