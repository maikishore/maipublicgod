import React from "react";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import ReactPlayer from "react-player";
import { useParams } from "react-router";
import Navbar from "../../Commons/Navbar/Navbar";
import useAuth from "../../GlobalContexts/authcontext";
import { postData } from "../../Services/post";
import Nodes from "../Editor/components/Nodes";
import Notecard from "../Editor/components/Notecard";
import { v4 as uuidv4 } from "uuid";
import AlertDiv from "../../Commons/AlertDiv";
import TimeToReadContent from "../../Commons/TimeToRead";
import LoadingDiv from "../../Commons/LoadingDiv";
import uuid from "react-uuid";

function ReadVideoNote() {
  const [editorWidth, setWidth] = React.useState(true);
  const [showPage, setShowPage] = React.useState(false);

  const [nlist, setNlist] = React.useState(["Topic", "Sub-topic", "Node"]);
  const [nodeCheck, setNodecheck] = React.useState(true);
  const [noteText, setNoteText] = React.useState("");

  const [entityList, setEntityList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [color, setColor] = React.useState(0.0);
  const [play, setPlay] = React.useState(true);
  const [playUrl, setPlayUrl] = React.useState("");
  const [subtitlesText, setSubtitlesText] = React.useState();
  const nodeRef = React.useRef();
  const videoUrlRef = React.useRef();
  // const titleRef=React.useRef()
  const [alertToggle, setAlertToggle] = React.useState(false);

  const [level, setLevel] = React.useState();
  const [data, setData] = React.useState([]);

  const titleRef = React.useRef();
  const NotetitleRef = React.useRef();
  const params = useParams();
  const { currentUser } = useAuth();

  const getSubtitles = async (url) => {
    const response = await fetch(process.env.REACT_APP_ML_URL + "/videonote", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ video_url: url }), // body data type must match "Content-Type" header
    });

    return response.json();
  };


  React.useEffect(()=>{
    const handleVideo = async () => {
      await getData(params['id']).then((data)=>{
     setData(data['data'])
     setLoading(false)
        titleRef.current.value=data['data'][0]['title']
        if (data['data'][0]['source'].includes("https://youtu.be/")) {
          const t = data['data']['source'].replace(
            "https://youtu.be/",
            "https://www.youtube.com/watch?v="
          );
          setPlayUrl(t);
        }else {
          setPlayUrl(data['data'][0]['source'])

        }
      })
  
    }
  
     
    handleVideo()
    
  
  },[])
  


React.useEffect(()=>{
  const f=async()=>{
    if (playUrl.length >= 2) {
      if (playUrl.includes("=")) {
        const x = await getSubtitles(playUrl);
  
        setSubtitlesText(x["captions"]);
        setShowPage(true);
      } else {
        setSubtitlesText([
          { index: "1", text: "Subtitles other than Youtube comming soon!" },
        ]);
        setShowPage(true);
      }
    }
  }

f()
return  ()=>{}
},[playUrl])



React.useEffect(()=>{
  if(!loading){
      console.log(data[0]['jsons'])
   
      titleRef.current.value=data[0]['title']
      setNlist(data[0]['nodes'])
      setLoading(false)
  }

},[loading])





  const subtitles = showPage ? (
    subtitlesText.map((each, index) => {
      return (
        <p
          key={index}
          onClick={(e) => {}}
          className={`mx-1 leading-6 text-lg font-medium my-1 ${
            color < each.start ? "bg-white" : "bg-gray-300 shadow-lg"
          } inline`}
        >
          {each.text + " "}
        </p>
      );
    })
  ) : (
    <div></div>
  );

  React.useEffect(() => {
    if (showPage) {
      if (nodeRef.current.value.length !== 0) {
        setNlist((prevstate) => [...prevstate, nodeRef.current.value]);
      }
    }
  }, [nodeCheck]);

  const nlists = nlist.map((each, index) => {
    return (
      <li
        key={index}
        id={index}
        onClick={(e) => {
          setNlist((prevstate) => prevstate.filter((item) => item !== each));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-2 h-2 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <p className="badge badge-warning cursor-pointer">{each}</p>
      </li>
    );
  });

  const page = (
    <div className="w-full h-screen bg-white-400">
      <div className="flex flex-col  ">
        <div className="p-2 text-6xl row-span-1 ">
          <div id="kkk" className="form-control">
            <div className="flex">
              <input
                ref={titleRef}
                id="k"
                type="text"
                placeholder={"Your Title Here"}
                className="w-11/12 input input-bordered text-2xl font-bold"
              />

              <button
                className="ml-3 px-6 btn btn-primary "
                onClick={async () => {
                  if(titleRef.current.value.length<=1){
                    nlist.push(uuid())
                  }else {
                    nlist.push(titleRef.current.value)
                  }
                    await postData("updatedoc", {
                      doc_id: params["id"].toString(),
                      user_id: currentUser.uid.toString(),
                      update: {
                        title: titleRef.current.value,
                        content: subtitlesText,
                        timetoread: TimeToReadContent(subtitlesText),
                        type: "VIDEO",
                        nodes: nlist,
                      
                      
                      
                      
                        updates: [],
                        public: false,
                        mentions: [],
                      },
                    }).then((data) => {
                      //console.log(data); // JSON data parsed by `data.json()` call
                    });
                  } }
              
              >
                Update
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="mx-4  flex justify-between items-baseline">
          <Nodes
            nlists={nlists}
            nodeRef={nodeRef}
            nodeCheckFunc={(e) => {
              setNodecheck(!nodeCheck);
            }}
          />
        </div>

        <div className="my-2  flex  justify-center items-center">
          <div className="m-2 flex items-start justify-center "></div>
          <div className="flex justify-center items-start">
            <div className={`${editorWidth ? "m-4 w-full" : "w-2/3"} `}>
              <div className=" flex justify-center items-center">
                <div className="flex  gap-4 w-full justify-center items-start ">
                  <ReactPlayer
                    progressInterval={1000}
                    playing={play}
                    controls={true}
                    onProgress={(played) => {
                      setColor(played.playedSeconds);
                    }}
                    url={playUrl}
                    config={{
                      file: {
                        tracks: [
                          {
                            kind: "subtitles",
                            src: "./videovtt.vtt",
                            srcLang: "en",
                            default: true,
                          },
                        ],
                      },
                    }}
                  />

                  <div
                    className={`${editorWidth ? "hidden" : "visible w-1/3"} `}
                  >
                    <Notecard
                      leveldiv={
                        <div className="p-1 card bordered">
                          <div className="flex items-center">
                            <div className="form-control p-2">
                              <label className="cursor-pointer label">
                                <span className="label-text px-2">Low </span>
                                <input
                                  onClick={(e) => {
                                    setLevel(1);
                                  }}
                                  type="radio"
                                  name="opt"
                                  className="radio radio-secondary"
                                  value=""
                                />
                              </label>
                            </div>

                            <div className="form-control p-2">
                              <label className="cursor-pointer label">
                                <span className="label-text px-2 ">High </span>
                                <input
                                  onClick={(e) => {
                                    setLevel(2);
                                  }}
                                  type="radio"
                                  name="opt"
                                  className="radio radio-secondary"
                                  value=""
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      }
                      input={
                        <input
                          ref={NotetitleRef}
                          type="text"
                          placeholder="Note Title"
                          className="input input-md input-bordered w-5/6"
                        />
                      }
                      saveFunc={async (e) => {
                        await postData("savenotes", {
                          doc_id: params["id"].toString(),
                          note_id: uuidv4(),
                          user_id: currentUser.uid.toString(),
                          note_title: NotetitleRef.current.value,
                          entities: entityList,
                          level: level,
                          content: noteText,
                        }).then((data) => {
                          setAlertToggle(true);

                          //console.log(data); // JSON data parsed by `data.json()` call
                        });
                      }}
                      entityList={entityList}
                      entityFunc={(e) => {
                        const id = e.currentTarget.getAttribute("id");
                        setEntityList(
                          entityList.filter(
                            (item, index) => index.toString() !== id.toString()
                          )
                        );
                        console.log(id);
                      }}
                      closeFunc={(e) => {
                        setWidth(true);
                      }}
                      addEntityFunc={(e) => {
                        console.log(window.getSelection().toString());

                        setEntityList([
                          ...entityList,
                          { label: window.getSelection().toString() },
                        ]);
                      }}
                      text={noteText}
                    />
                  </div>
                </div>
                <div></div>
              </div>

              <div className="my-2 flex justify-end items-end ">
                <div></div>

                <div
                  className="mx-2 btn  text-lg"
                  onClick={(e) => {
                    setPlay(!play);
                  }}
                >
                  {play ? <FaPauseCircle /> : <FaPlayCircle />}
                </div>
                <div
                  className="btn btn-primary"
                  onClick={async (e) => {
                    setPlay(false);
                    setNoteText(window.getSelection().toString());
                    setWidth(false);

                    const getEntities = async (notedata) => {
                      const response = await fetch(
                        process.env.REACT_APP_ML_URL + "/entities",
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
                          body: JSON.stringify({ note: notedata }), // body data type must match "Content-Type" header
                        }
                      );

                      return response.json();
                    };

                    try {
                      const x = await getEntities(
                        window.getSelection().toString()
                      );

                      setEntityList(x["entities"]);
                    } catch {
                      setEntityList([]);
                    }
                  }}
                >
                  ADD NOTE
                </div>
              </div>

              <div className="p-2 text-left h-96 overflow-y-auto">{subtitles}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      <Navbar />
      {alertToggle ? (
        <AlertDiv
          status="success"
          message="Note Saved"
          closefunc={(e) => {
            setAlertToggle(false);
          }}
        />
      ) : (
        <></>
      )}
      {loading ? 
          <LoadingDiv />
        :page }
  
    </div>
  );
}

export default ReadVideoNote;




const getData = async (doc_id) => {
    const response = await fetch(process.env.REACT_APP_MB_URL + "/readnote", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ doc_id: doc_id }), // body data type must match "Content-Type" header
    });
  
    return response.json();
  };
  