import React from "react";
import Navbar from "../../Commons/Navbar/Navbar";

import Nodes from "./components/Nodes";
import Notecard from "./components/Notecard";
import RawEditor from "./components/RawEditor";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { v4 as uuidv4 } from "uuid";
import { Prompt } from "react-router";
import {
  FaBold,
  FaItalic,
  FaCode,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { MdStrikethroughS } from "react-icons/md";
import Subscript from "@tiptap/extension-subscript";

import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import Speak from "../../Services/tts";
import { useParams } from "react-router";
import { postData } from "../../Services/post";
import useAuth from "../../GlobalContexts/authcontext";
import AlertDiv from "../../Commons/AlertDiv";
import InfoAlert from "../../Commons/InfoAlert";
import uuid from "react-uuid";
import TimeToReadContent from "../../Commons/TimeToRead";
import LoadingDiv from "../../Commons/LoadingDiv";

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  ol: "list-inside",
};

function ReadEditor() {
  

  const [editorWidth, setWidth] = React.useState(true);

  const [nlist, setNlist] = React.useState(["Topic", "Sub-topic", "Node"]);
  const [nodeCheck, setNodecheck] = React.useState(true);
  const [noteText, setNoteText] = React.useState("");
  const [entityList, setEntityList] = React.useState([]);
  const [highlightColor, setHighlightColor] = React.useState(true);
  const [speakToggle, setSpeakToggle] = React.useState(false);
  const [alertToggle, setAlertToggle] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [saveInfo, setSaveInfo] = React.useState(false);
  const [saveStatus, setSaveStatus] = React.useState(false);
  const [level, setLevel] = React.useState();
  const [content, setContent] = React.useState();
  const [data, setData] = React.useState([]);
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const [loads, setLoads] = React.useState(false);
  const MINUTE_MS = 10000;
  const nodeRef = React.useRef();
  const titleRef = React.useRef();
  const NotetitleRef = React.useRef();
  const params = useParams();
  const { currentUser } = useAuth();

  React.useEffect(() => {
    
    const f = async () => {
        await getData(params['id']).then(data=>{
            setData(data['data'])
            setLoads(true)
            setLoading(false)

        });
        
        
        
      };

  
      f();
     

   
  return ()=>{}
       
  }, []);


React.useEffect(()=>{
    if(!loading){
        console.log(data[0]['jsons'])
        editor.commands.insertContent(data[0]['html'])
        titleRef.current.value=data[0]['title']
        setNlist(data[0]['nodes'])
        setLoading(false)
    }

},[loading])



  const editor = useEditor({
    content: content,
    extensions: [
      StarterKit,

      Superscript,
      Subscript,
      Image,

      Highlight.configure({ multicolor: true }),
      TextStyle,
      FontFamily,
      TextAlign.configure({
        types: ["heading", "paragraph", "image", "img"],
      }),
      /*
      CustomDocument,
      TaskList,
      CustomTaskItem*/
    ],
    editorProps: {
      attributes: {
        className:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl border-none bg-white overflow-y-auto   ",
      },
    },
  });


  
  /*
React.useEffect(() => {

  const f=async() => {
    await  postData("updatedoc", {
       doc_id: params["id"].toString(),
       user_id: currentUser.uid.toString(),
       update:{
         title: titleRef.current.value,
         content: editor.getText(),
         type: "NOTES",
         nodes: nlist,
         source: "",
         notes: [],
         maiscore: 5,
         html: editor.getHTML().toString(),
         updates: [],
         public: false,
         mentions: [],}
       
     }).then((data) => {

       //console.log(data); // JSON data parsed by `data.json()` call
     });
   }
  const interval = setInterval(() => {
    

    // f()


     console.log("called ",editor.getText())
  }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])
*/

  React.useEffect(() => {

    if(!loading){
        if (nodeRef.current.value.length !== 0) {
            setNlist((prevstate) => [...prevstate, nodeRef.current.value]);
            console.log(nlist);
          }
    }
   
  }, [nodeCheck]);

  const nlists = nlist.map((each, index) => {
    return (
      <li
        id={index}
        onClick={(e) => {
          setNlist((prevstate) => prevstate.filter((item) => item !== each));
          console.log(nlist);
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

  React.useEffect(() => {
    if (speakToggle) {
      Speak(true, getTextFromEditor(editor.getJSON()));
    } else {
      window.speechSynthesis.cancel();
    }
  }, [speakToggle]);

  return (
    <div className="">
      <Prompt
        when={"shouldBlockNavigation"}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      <Navbar />
      {saveInfo ? (
        <InfoAlert
          message="Your Document Saved and Auto Saved Every 3 mins "
          closefunc={(e) => {
            setSaveInfo(false);
          }}
        />
      ) : (
        <></>
      )}

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
 {loading?<LoadingDiv />: <div className="w-full h-screen bg-white-400">
        <div className="flex flex-col  ">
          <div className="p-2 text-6xl row-span-1 ">
            <div className="form-control">
              <div className="flex ">
                <input
                  ref={titleRef}
                  type="text"
                  placeholder="Title"
                  className="w-11/12 input input-bordered text-2xl font-bold"
                />
                <button
                  onClick={async (e) => {
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
                        content: getTextFromEditor(editor.getJSON()),
                        timetoread: TimeToReadContent(
                          getTextFromEditor(editor.getJSON())
                        ),
                        type: "NOTES",
                        nodes: nlist,
                        source: "",
                        notes: [],
                    
                        html: editor.getHTML().toString(),
                        updates: [],
                        public: false,
                        mentions: [],
                      },
                    }).then((data) => {
                      setSaveInfo(true);
                      setSaveStatus(true)
                      //console.log(data); // JSON data parsed by `data.json()` call
                    });
                  }}
                  className="ml-3 px-6 btn btn-primary "
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 justify-between items-center">
            <Nodes
              nlists={nlists}
              nodeRef={nodeRef}
              nodeCheckFunc={(e) => {
                setNodecheck(!nodeCheck);
              }}
            />

            <div className="m-2 flex items-start justify-center ">
              <button
                onClick={(e) => {
                  console.log(speakToggle);
                  setSpeakToggle(!speakToggle);
                }}
                className="btn  btn-sm btn-circle"
              >
                {speakToggle ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-baseline">
            <div className={`${editorWidth ? "m-4 w-full" : "w-2/3"} `}>
              <RawEditor
                editorWidth={editorWidth}
                editor={editor}
                noteFunc={async () => {
                  if(!saveStatus){
                    await postData("updatedoc", {
                      doc_id: params["id"].toString(),
                      user_id: currentUser.uid.toString(),
                      update: {
                        title: titleRef.current.value,
                        content: getTextFromEditor(editor.getJSON()),
                        timetoread: TimeToReadContent(editor.getJSON()),
                        type: "NOTES",
                        nodes: nlist,
                      
                      
                      
                        html: editor.getHTML().toString(),
                        updates: [],
                        public: false,
                        mentions: [],
                      },
                    }).then((data) => {
                      //console.log(data); // JSON data parsed by `data.json()` call
                    });
                  }
                
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

                  setNoteText(window.getSelection().toString());
                  try {
                    const x = await getEntities(
                      window.getSelection().toString()
                    );

                    setEntityList(x["entities"]);
                  } catch {
                    setEntityList([]);
                  }

                  setHighlightColor(true);
                  var hcolor = "#FFEFD5";

                  editor
                    .chain()
                    .focus()
                    .toggleHighlight({
                      color: highlightColor ? hcolor : "red",
                    })
                    .run();

                  setWidth(false);
                }}
              />
            </div>

            <div className={`${editorWidth ? "hidden" : "visible w-1/3 "}`}>
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
                    user_id: currentUser.uid.toString(),
                    note_id: uuid(),
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
        </div>
      </div>}
    </div>
  );
}















function getTextFromEditor(jsonText) {

  let s = "";

  for (var i = 0; i < jsonText["content"].length; i++) {
    if (
      jsonText["content"][i]["type"] === "paragraph" ||
      jsonText["content"][i]["type"] === "heading"
    ) {
        try{
            s = s + jsonText["content"][i]["content"][0]["text"] + "";
        }catch {
            s = s + " ";
        }
      
    }
  }
  console.log("hvjk", s);
  return s;
}




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
  
export default ReadEditor;
