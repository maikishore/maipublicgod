import React from "react";
import { useParams } from "react-router";
import { postData } from "../../Services/post";

function Memorize() {
  const inputRef = React.useRef();
  const params = useParams();
  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={async (e) => {
          await postData("updatemaiscore", {
            doc_id: params["id"].toString(),

          
            quality: inputRef.current.value,
       
          }).then((data) => {
            //console.log(data); // JSON data parsed by `data.json()` call
          });
        }}
      >
        Update Maiscore
      </button>
    </div>
  );
}

export default Memorize;
