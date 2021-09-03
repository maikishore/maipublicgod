import React from "react";
import Navbar from "../../Commons/Navbar/Navbar";

import Nodes from "./components/Nodes";
import Notecard from "./components/Notecard";
import RawEditor from "./components/RawEditor";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { v4 as uuidv4 } from "uuid";
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

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  ol: "list-inside",
};

function Editors() {
  const editor = useEditor({
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
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl border-none bg-white overflow-y-auto   ",
      },
    },
  });

  const [editorWidth, setWidth] = React.useState(true);

  const [nlist, setNlist] = React.useState(["A", "b", "C"]);
  const [nodeCheck, setNodecheck] = React.useState(true);
  const [noteText, setNoteText] = React.useState("");
  const [entityList, setEntityList] = React.useState([]);
  const [highlightColor, setHighlightColor] = React.useState(true);
  const [speakToggle, setSpeakToggle] = React.useState(false);
  const [alertToggle, setAlertToggle] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const nodeRef = React.useRef();
  const titleRef = React.useRef();
  const NotetitleRef = React.useRef();
  const params = useParams();
  const { currentUser } = useAuth();
  
  React.useEffect(() => {
  
   if(loading) {
    postData("create", {
      doc_id: params["id"].toString(),
      user_id: currentUser.uid.toString(),
    }).then((data) => {
      console.log({
        _id: params["id"].toString(),
        user_id: currentUser.uid.toString(),
      });
      setLoading(false)
      //console.log(data); // JSON data parsed by `data.json()` call
    });
   }
   
    return ()=>{
setLoading(false)
    }
  }, []);
  React.useEffect(() => {
    if (nodeRef.current.value.length !== 0) {
      setNlist((prevstate) => [...prevstate, nodeRef.current.value]);
      console.log(nlist);
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

      <div className="w-full h-screen bg-white-400">
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
                  onClick={(e) => {
                    postData("updatedoc", {
                      doc_id: params["id"].toString(),
                      user_id: currentUser.uid.toString(),
                      update: {
                        title: titleRef.current.value,
                        content: getTextFromEditor(editor.getJSON()),
                        type: "NOTE",
                        nodes: nlist,
                        source: "",
                        notes: [],
                        maiscore: 5,
                        html: editor.getHTML().toString(),
                        updates: [],
                        public: false,
                        mentions: [],
                      },
                    }).then((data) => {
                      console.log({
                        _id: params["id"].toString(),
                        user_id: currentUser.uid.toString(),
                      });
                      //console.log(data); // JSON data parsed by `data.json()` call
                    });
                  }}
                  className="ml-3 px-6 btn btn-primary "
                >
                  Save
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

            <div class="m-2 flex items-start justify-center ">
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
                /* { "note_id":data["note_id"],"note_title":data["note_title"],
        
        "enities":data["entities"],"level":data["level"],"content":data["data"] }
   */

                input={
                  <input
                    ref={NotetitleRef}
                    type="text"
                    placeholder="Note Title"
                    class="input input-md input-bordered w-5/6"
                  />
                }
                saveFunc={async (e) => {
                  await postData("savenotes", {
                    doc_id: params["id"].toString(),
                    note_id: uuidv4(),
                    user_id: currentUser.uid.toString(),
                    note_title: NotetitleRef.current.value,
                    entities: entityList,
                    level: 0,
                    content: noteText,
                  }).then((data) => {
                    setAlertToggle(true);
                    console.log({doc_id: params["id"].toString(),
                    note_id: uuidv4(),
                    user_id: currentUser.uid.toString(),
                    note_title: NotetitleRef.current.value,
                    entities: entityList,
                    level: 0,
                    content: noteText,})
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
      </div>
    </div>
  );
}

function getTextFromEditor(jsonText) {
  console.log(jsonText);
  let s = "";

  for (var i = 0; i < jsonText["content"].length; i++) {
    if (
      jsonText["content"][i]["type"] === "paragraph" ||
      jsonText["content"][i]["type"] === "heading"
    ) {
      s = s + jsonText["content"][i]["content"][0]["text"] + "";
    }
  }
  return s;
}

function AlertDiv(props) {
  if (props.status === "success") {
    return (
      <div class="alert alert-success">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
          <label>{props.message}</label>
        </div>
        <div class="flex-none">
          <button
            onClick={props.closefunc}
            className="btn btn-sm btn-circle mr-2"
          >
            X
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div class="alert alert-error">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <label>{props.message}</label>
          <div class="flex-none">
            <button
              onClick={props.closefunc}
              className="btn btn-sm btn-circle mr-2"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Editors;
