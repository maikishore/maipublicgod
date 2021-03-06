import React from "react";
import { useHistory, useParams } from "react-router";
import LoadingQuoteDiv from "../../../Commons/Loadingquote";

import { postDataMB, postDataML } from "../../../Services/post";
import PopUpModal from "../components/popupmodal";


import Rating from "../rating";

import QnACard from "./components/QnACard";

function QnA() {
  const [data, setData] = React.useState([]);

  const [QnAs, setQnAs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [dataloading, setDataLoading] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [track,setTrack]=React.useState([])
  const [total,setTotal]=React.useState()
  const [currentId,setCurrentId]=React.useState()
  const [trackSum,setTrackSum]=React.useState(0)
  const [showModal,setShowModal]=React.useState(false)
  const [level,setLevel]=React.useState(0)
  const [indx, setIndx] = React.useState(0);
  const params = useParams();
  const history=useHistory()

  React.useEffect(() => {
    const f = async() => {
     await postDataMB("getnotes", {
        doc_id: params["id"].toString(),
      }).then((data) => {
        console.log("==>", data["data"]);
        setData(data["data"]);
        setDataLoading(true); // JSON data parsed by `data.json()` call
      });
    };
   
    f()

    return () => {};
  }, []);

  React.useEffect(() => {
   
    const f =async () => {
      await postDataML("getquestions", {
        doc_id: params["id"].toString(),
        notes: data[0]["notes"],
      }).then((data) => {
        setQnAs(data["data"]);
        console.log("QQ==>",data['data'])
        setTotal(data['total']) 
        var z=[]
      for(var each=0;each<=data['total'];each++){
        z.push(0)
      }
      setTrack(z)
      setReady(true);
      setLoading(false);
        // JSON data parsed by `data.json()` call
      });
    };

    
    if (dataloading) {
     
      f();
     
      
  
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
console.log(track)
if(trackSum===total){
 


setTimeout(function () {
  console.log("Hurray !")
  setShowModal(true)
}, 4000);
 
}

return ()=>{}
},[trackSum])



  const QnAcards = ready ? (
    QnAs.map((each, index) => {
      
      return ( <div
        key={index}
          id={"item" + index.toString()}
          className="flex items-center justify-center w-full text-center shadow carousel-item"
        >

 {showModal?<PopUpModal 
 
 rating={<Rating
  indx={indx}
  indexfunc={(e)=>{
    console.log(e.currentTarget.value)
    setIndx(e.currentTarget.value)
  }}
  />}
 libraryfunc={(e)=>{
   history.push("/library")
 }}
 
 submitfunc={(e)=>{
  const f = async() => {
    await postDataMB("updatemaiscore", {
      doc_id: params["id"].toString(),
      quality:indx
    }).then((data) => {
     history.push("/library")
    });
  };
f()
 }}
 />:null}   
          <QnACard question={each["question"]} answer={each["answer"]} 
          speakquestion={each["speak"]}
          
          trackfunc={()=>{
        
         
          setCurrentId(index)
         
       
          }} />
        </div>)
    })
  ) : (
    <></>
  );


  const QnAnavigation = ready ? (
    QnAs.map((each, index) => {
      
      return (   <a
        href={`/qna/${params["id"]}#item${index.toString()}`}
        className={`btn btn-sm btn-circle ${track[index]===1?"bg-green-400":"bg-gray-800"}`}
      >
        {(index + 1).toString()}
      </a>)
    })
  ) : (
    <></>
  );

  /*
  const QnAnavigation = data.map((each, index) => {
    return (
      <a href={`/QnA#item${index.toString()}`} className="btn btn-xs btn-circle">
        {(index + 1).toString()}
      </a>
    );
  })}
*/
  return (
    <div className=" ">

      {loading ? (
        <LoadingQuoteDiv />
      ) : (
        <div>
          <div
            style={{ height: "80vh" }}
            className="w-full   bg-gray-200 text-center carousel"
          >
            {QnAcards}
          </div>
          <div className="flex justify-center w-full my-1 space-x-2">
            {QnAnavigation}
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default QnA;
