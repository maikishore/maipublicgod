import React from "react";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import ReactPlayer from "react-player";
import Navbar from "../../Commons/Navbar/Navbar";
import Nodes from "../Editor/components/Nodes";
import Notecard from "../Editor/components/Notecard";

function VideoNote() {
  const [editorWidth, setWidth] = React.useState(true);
  const [showPage, setShowPage] = React.useState(false);

  const [nlist, setNlist] = React.useState(["A", "b", "C"]);
  const [nodeCheck, setNodecheck] = React.useState(true);
  const [noteText, setNoteText] = React.useState("");
  const [entityList, setEntityList] = React.useState([]);

  const [color, setColor] = React.useState(0.0);
  const [play, setPlay] = React.useState(true);
  const [playUrl, setPlayUrl] = React.useState("");
  const [subtitlesText, setSubtitlesText] = React.useState();
  const nodeRef = React.useRef();
  const videoUrlRef = React.useRef();
  // const titleRef=React.useRef()

  const handleVideo = async (e) => {
    const getSubtitles = async (url) => {
      const response = await fetch(
        process.env.REACT_APP_ML_URL + "/videonote",
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
          body: JSON.stringify({ video_url: url }), // body data type must match "Content-Type" header
        }
      );

      return response.json();
    };
    setPlayUrl(videoUrlRef.current.value)
    
    if(videoUrlRef.current.value.includes("https://youtu.be/")){
     
      const t=videoUrlRef.current.value.replace("https://youtu.be/","https://www.youtube.com/watch?v=")
      setPlayUrl(t)
  
 
    }
  
   
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
  };

  const subtitles = showPage ? (
    subtitlesText.map((each, index) => {
      return (
        <p
          key={index}
          onClick={(e) => {}}
          class={`mx-1 leading-6 text-lg font-medium my-1 ${
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
            <input
              id="k"
              type="text"
              placeholder={"Your Title Here"}
              className="input input-bordered text-2xl font-bold"
            />
          </div>
        </div>
        <div class="mx-4  flex justify-between items-baseline">
          <Nodes
            nlists={nlists}
            nodeRef={nodeRef}
            nodeCheckFunc={(e) => {
              setNodecheck(!nodeCheck);
            }}
          />
        </div>

        <div className="my-2  flex  justify-center items-center">
          <div class="m-2 flex items-start justify-center "></div>
          <div className="flex justify-center items-start">
            <div className={`${editorWidth ? "m-4 w-full" : "w-2/3"} `}>
              <div class=" flex justify-center items-center">
                <div class="flex  gap-4 w-full justify-center items-start ">
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

              <div class="my-2 flex justify-end items-end ">
                <div></div>

                <div
                  class="mx-2 btn  text-lg"
                  onClick={(e) => {
                    setPlay(!play);
                  }}
                >
                  {play ? <FaPauseCircle /> : <FaPlayCircle />}
                </div>
                <div
                  class="btn btn-primary"
                  onClick={async(e) => {
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
                  ADD
                </div>
              </div>
              

              <div class="p-2 text-left h-96 overflow-y-auto">{subtitles}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      <Navbar />

      {showPage ? (
        page
      ) : (
        <div class="flex h-1/2 my-40 justify-center items center">
          <div class="card shadow-2xl lg:card-side bg-blue-400 text-primary-content">
            <div class="card-body">
              <input
                id="kk"
                ref={videoUrlRef}
                type="text"
                placeholder="Video Url"
                class="input input-bordered text-black"
              />

              <div class="justify-end ">
                <button onClick={handleVideo} class="btn btn-primary">
                  Go
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 ml-2 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoNote;
