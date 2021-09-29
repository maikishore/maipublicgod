import React from "react";
import Navbar from "../../Commons/Navbar/Navbar";

import Nodes from "./components/Nodes";
import Notecard from "./components/Notecard";
import RawEditor from "./components/RawEditor";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Prompt } from "react-router";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

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

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  ol: "list-inside",
};

function Editors() {
  const editor = useEditor({
    content: "Write Something Awesome here ....",
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
  const [autosaveStatus, setAutoSaveStatus] = React.useState(false);
  const [level, setLevel] = React.useState();
  const MINUTE_MS =180000 ;
  const nodeRef = React.useRef();
  const titleRef = React.useRef();
  const NotetitleRef = React.useRef();
  const params = useParams();
  const { currentUser } = useAuth();

  React.useEffect(() => {
    const f = () => {
      postData("create", {
        doc_id: params["id"].toString(),
        user_id: currentUser.uid.toString(),

        title: titleRef.current.value,
        content: "",
        type: "NOTES",
        nodes: ["No Nodes"],
        source: "",
        notes: [],

        html: "",
        updates: [],
        public: false,
        mentions: [],
        thumbnailimage: [""],
        timetoread: "~ 1 min",
      }).then((data) => {
        setAutoSaveStatus(true);
        ////console.log(data); // JSON data parsed by `data.json()` call
      });
    };

    f();
    return () => {};
  }, []);

  React.useEffect(() => {
    const f = async () => {
      await postData("updatedoc", {
        doc_id: params["id"].toString(),
        user_id: currentUser.uid.toString(),
        update: {
          title: titleRef.current.value,
          content: getTextFromEditor(editor.getJSON()),
          timetoread: TimeToReadContent(getTextFromEditor(editor.getJSON())),
          type: "NOTES",
          nodes: [...new Set(nlist)],
          source: "",
          notes: [],
          html: editor.getHTML().toString(),
          updates: [],
          public: false,
          mentions: [],
          jsons: editor.getJSON(),
          thumbnailimage: [getImage(editor.getJSON())],
        },
      }).then((data) => {
        //console.log("Doc Updated without errors")
        ////console.log(data); // JSON data parsed by `data.json()` call
      });
    };
    const interval = setInterval(() => {
      if (autosaveStatus) {
        f();
      }
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [autosaveStatus]);

  React.useEffect(() => {
    if (nodeRef.current.value.length !== 0) {
      setNlist((prevstate) => [...prevstate, nodeRef.current.value]);
      //console.log(nlist);
    }
  }, [nodeCheck]);

  const nlists = nlist.map((each, index) => {
    return (
      <li
      key={index}
        id={index}
        onClick={(e) => {
          setNlist((prevstate) => prevstate.filter((item) => item !== each));
          //console.log(nlist);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-2 h-2 mr-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
      <Prompt message="You have unsaved changes, are you sure you want to leave?" />
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
                  onClick={async (e) => {
                    if (titleRef.current.value.length <= 1) {
                      nlist.push(uuid());
                    } else {
                      nlist.push(titleRef.current.value);
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
                        nodes: [...new Set(nlist)],
                        source: "",
                        notes: [],
                        html: editor.getHTML().toString(),
                        updates: [],
                        public: false,
                        mentions: [],
                        jsons: editor.getJSON(),
                        thumbnailimage: [getImage(editor.getJSON())],
                      },
                    }).then((data) => {
                      setSaveInfo(true);
                      setSaveStatus(true);

                      ////console.log(data); // JSON data parsed by `data.json()` call
                    });
                  }}
                  className="ml-3 px-6 btn btn-primary "
                >
                  {saveStatus ? "Update" : "Save"}
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
                  //console.log(speakToggle);
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
                  if (!saveStatus) {
                    await postData("updatedoc", {
                      doc_id: params["id"].toString(),
                      user_id: currentUser.uid.toString(),
                      update: {
                        title: titleRef.current.value,
                        content: getTextFromEditor(editor.getJSON()),
                        timetoread: TimeToReadContent(editor.getJSON()),
                        type: "NOTES",
                        nodes: nlist,
                        source: "",
                        notes: [],

                        html: editor.getHTML().toString(),
                        updates: [],
                        public: false,
                        mentions: [],
                        jsons: editor.getJSON(),
                      },
                    }).then((data) => {
                      ////console.log(data); // JSON data parsed by `data.json()` call
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
                    nodes: nlist,
                  }).then((data) => {
                    setAlertToggle(true);

                    ////console.log(data); // JSON data parsed by `data.json()` call
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
                  //console.log(id);
                }}
                closeFunc={(e) => {
                  setWidth(true);
                }}
                addEntityFunc={(e) => {
                  //console.log(window.getSelection().toString());

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
  let s = "";

  for (var i = 0; i < jsonText["content"].length; i++) {
    if (
      jsonText["content"][i]["type"] === "paragraph" ||
      jsonText["content"][i]["type"] === "heading"
    ) {
      try {
        s = s + jsonText["content"][i]["content"][0]["text"] + "";
      } catch {
        s = s + " ";
      }
    }
  }
  //console.log("hvjk", s);
  return s;
}

function getImage(jsondoc) {
  var s = "";
  if (jsondoc["content"].length <= 2) {
    return "";
  }

  for (var each = 0; each < jsondoc["content"].length; each++) {
    if (each >= 30) {
      s = "";
      break;
    } else {
      if (jsondoc["content"][each]["type"] === "image") {
        s = jsondoc["content"][each]["attrs"]["src"];
        break;
      }
    }
  }
  //console.log("SS>",s)
  return s;
}

export default Editors;
