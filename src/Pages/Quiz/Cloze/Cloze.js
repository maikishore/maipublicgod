import React from "react";
import { useParams } from "react-router";
import LoadingDiv from "../../../Commons/LoadingDiv";
import Navbar from "../../../Commons/Navbar/Navbar";
import { postDataMB, postDataML } from "../../../Services/post";
import ClozeCard from "./components/ClozeCard";

function Cloze() {
  const [data, setData] = React.useState([]);

  const [clozes, setClozes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [dataloading, setDataLoading] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [track,setTrack]=React.useState([])
  const [total,setTotal]=React.useState()
  const [currentId,setCurrentId]=React.useState()
  const [trackSum,setTrackSum]=React.useState()
  const params = useParams();

  React.useEffect(() => {
    const f = () => {
      postDataMB("getnotes", {
        doc_id: params["id"].toString(),
      }).then((data) => {
        console.log("==>", data["data"]);
        setData(data["data"]);
        setDataLoading(true); // JSON data parsed by `data.json()` call
      });
    };

    f();
   

    return () => {};
  }, []);

  React.useEffect(() => {
   
    const f = () => {
      postDataML("cloze", {
        doc_id: params["id"].toString(),
        notes: data[0]["notes"],
      }).then((data) => {
        setClozes(data["data"]);
        setTotal(data['total']) // JSON data parsed by `data.json()` call
      });
    };
    if (dataloading) {
      f();
      setReady(true);
      setLoading(false);
    
    
    }

    return () => {};
  }, [dataloading]);

React.useEffect(()=>{
 

if(ready){
 
  let newstate=[...track]
  newstate[currentId]=1
  setTrack(newstate)
  setTrackSum(track.reduce((a, b) => a + b, 1))
  
}




return ()=>{}

},[currentId])

React.useEffect(()=>{
console.log(trackSum,total)
if(trackSum===total){
  setTrackSum(0)
  console.log("Hurray !")
}

return ()=>{}
},[trackSum])



  const datas = [
    {
      question:
        "This is first questionThis is first questioThis is first question",
      answer: "This is first answer",
    },
    { question: "This is second question", answer: "This is first answer" },
    { question: "This is third question", answer: "This is first answer" },
    { question: "This is fourth question", answer: "This is first answer" },
  ];

  const clozecards = ready ? (
    clozes.map((each, index) => {
      
      return ( <div
        key={index}
          id={"item" + index.toString()}
          className="flex items-center justify-center w-full text-center shadow carousel-item"
        >
          <ClozeCard question={each["question"]} answer={each["answer"]} 
          speakquestion={each["speak"]}
          
          trackfunc={()=>{
        
         
          setCurrentId(index)
         
       
          }} />
        </div>)
    })
  ) : (
    <></>
  );


  const clozenavigation = ready ? (
    clozes.map((each, index) => {
      
      return (   <a
        href={`/cloze/${params["id"]}#item${index.toString()}`}
        className="btn btn-xs btn-circle"
      >
        {(index + 1).toString()}
      </a>)
    })
  ) : (
    <></>
  );

  /*
  const clozenavigation = data.map((each, index) => {
    return (
      <a href={`/cloze#item${index.toString()}`} className="btn btn-xs btn-circle">
        {(index + 1).toString()}
      </a>
    );
  })}
*/
  return (
    <div className=" ">
      <Navbar />
      {loading ? (
        <LoadingDiv />
      ) : (
        <div>
          <div
            style={{ height: "80vh" }}
            className="w-full   bg-gray-200 text-center carousel"
          >
            {clozecards}
          </div>
          <div className="flex justify-center w-full my-1 space-x-2">
            {clozenavigation}
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default Cloze;
