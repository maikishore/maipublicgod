import React from "react";
import Navbar from "./Commons/Navbar/Navbar";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import "./test.css";
import { FaBold, FaItalic, FaCode } from "react-icons/fa";
import { MdStrikethroughS } from "react-icons/md";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Subscript from "@tiptap/extension-subscript";

import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import TextAlign from "@tiptap/extension-text-align";
import Notecard from "./Pages/Editor/components/Notecard";
import Nodes from "./Pages/Editor/components/Nodes";
import MenuBar from "./Pages/Editor/components/Menubar";

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  ol: "list-inside",
};


function Editors(props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      Document,
      Paragraph,
      Text,
      OrderedList,
      ListItem,
      Superscript,
      Subscript,
      Image,

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

  return (
    <div className="w-full">
      {editor && (
        <BubbleMenu
          className="flex justify-baseline items-center"
          tippyOptions={{
            placement: "bottom",

            // if you want
          }}
          editor={editor}
        >
          <button onClick={props.widthFunc} className={styles.icondeactive}>
            Take Note
          </button>
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            italic
          </button>
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            strike
          </button>
        </BubbleMenu>
      )}
      <div className="m-1 h-auto p-1 shadow-xxl bg-gray-200">
        <MenuBar editor={editor} />
      </div>

      <div className="m-1 shadow-md border-2 border-gray-700 ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

function Test() {
  const [editorWidth, setWidth] = React.useState(true);
  const [notecardWidth, setnoteCardWidth] = React.useState(false);

  const [nlist, setNlist] = React.useState(["A", "b", "C"]);
  const [nodeCheck, setNodecheck] = React.useState(true);

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
              <Editors
                editorWidth={editorWidth}
                widthFunc={() => {
                  setWidth(!editorWidth);
                  console.log(editorWidth);
                }}
              />
            </div>

            <div className={`${editorWidth ? "hidden" : "visible w-1/3 "}`}>
              <Notecard text="Heoo" entities={["a", "b", "c"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
