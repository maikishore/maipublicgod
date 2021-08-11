import React from "react";
import Navbar from "../../Commons/Navbar/Navbar";


import Nodes from "./components/Nodes";
import Notecard from "./components/Notecard";
import RawEditor from "./components/RawEditor";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent, 
  BubbleMenu,
  } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { FaBold, FaItalic, FaCode } from "react-icons/fa";
import { MdStrikethroughS } from "react-icons/md";
import Subscript from "@tiptap/extension-subscript";

import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from '@tiptap/extension-highlight'



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

      TextAlign.configure({
        types: ["heading", "paragraph", "image", "img"],
      }),
     
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
    const [entityList, setEntityList] = React.useState(["a", "b"]);
    const [highlightColor, setHighlightColor] = React.useState(true);

  
    const nodeRef = React.useRef();
  

   







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
  




    return (
      <div className="">
        <Navbar />
        <div className="w-full h-screen bg-white-400">
          <div className="flex flex-col  ">
            <div className="p-2 text-6xl row-span-1 ">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered text-2xl font-bold"
                />
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
                <button onClick={(e) => {}} className="btn  btn-sm btn-circle">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-center items-baseline">
              <div className={`${editorWidth ? "m-4 w-full" : "w-2/3"} `}>
                <RawEditor
                  editorWidth={editorWidth}
                  editor={editor}
                  noteFunc={() => {
                    setHighlightColor(true)
                    var hcolor="#FFEFD5"
                    
                    editor.chain().focus().toggleHighlight({
                      color: highlightColor? hcolor:"red"
                    }).run()
                  
                    

                   
                    setWidth(false);
                
                    setNoteText(window.getSelection().toString());
                  
                  }}
                />
              </div>
  
              <div className={`${editorWidth ? "hidden" : "visible w-1/3 "}`}>
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
                    setEntityList([
                      ...entityList,
                      window.getSelection().toString(),
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
  
  export default Editors;