import React from "react";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { FaBold, FaItalic, FaCode } from "react-icons/fa";
import { MdStrikethroughS } from "react-icons/md";
import Subscript from "@tiptap/extension-subscript";

import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

import {BiFontColor} from "react-icons/bi"
import "./editor.css";
import MenuBar from "./Menubar";

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-500 shadow btn btn-ghost hover:bg-gray-100",
  icondeactive: "mx-1 px-2 py-2 bg-gray-200 shadow btn btn-ghost hover:bg-gray-100",
  bubbleiconactive: "  mx-1   bg-gray-500 shadow btn btn-sm",
  bubbleicondeactive: "mx-1 bg-gray-500 shadow btn btn-sm",
  colorbutton: "w-8 h-2 mx-1   shadow btn btn-sm btn-circle  ",

  ol: "list-inside",
};


function RawEditor(props) {

  const [textColor, setTextColor] = React.useState("black");


const colorFunc=(e) => {


  switch (e.currentTarget.value.toString()) {
    case "red":
      setTextColor("red");
      break;
    case "blue":
      setTextColor("blue");
      break;
    case "green":
      setTextColor("green");
      break;
    case "gray":
      setTextColor("gray");
      break;

    case "white":
      setTextColor("white");
      break;

    default:
      setTextColor("black");
  }


}



const textcolormenu=(<div class="dropdown">
<div tabindex="0" class={styles.iconactive}><BiFontColor class={`text-lg text-${textColor}-800`}/></div> 
<ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
  <li  >
  <div class="flex justify-start items-baseline">
  <button
        value="red"
        onClick={colorFunc}
        className={styles.colorbutton + "bg-red-800 hover:bg-red-800"}
      ></button>
      <button
        value="green"
        onClick={colorFunc}
        className={styles.colorbutton + "bg-green-800 hover:bg-green-800"}
      ></button>
      <button
        value="blue"
        onClick={colorFunc}
        className={styles.colorbutton + "bg-blue-800 hover:bg-blue-800"}
      ></button>
      <button
        value="gray"
        onClick={colorFunc}
        className={styles.colorbutton + "bg-gray-800 hover:bg-gray-800"}
      ></button>

      <button
        value="white"
        onClick={colorFunc}
        className={styles.colorbutton + "bg-white hover:bg-white"}
      ></button>

      <button
        value="blue"
        onClick={colorFunc}
        className={styles.colorbutton}
      ></button>
</div>
  </li>
</ul>
</div>
  
)



  return (
    <div className="w-full">
      {props.editor && (
        <BubbleMenus
          editor={props.editor}
        
          noteFunc={props.noteFunc}
        />
      )}
      <div className="m-1 h-auto p-1 shadow-xxl bg-gray-200">
        <MenuBar editor={props.editor} textcolormenu={textcolormenu} />
      </div>

      <div className="m-1 shadow-md border-2 border-gray-700 ">
        <EditorContent editor={props.editor} className={`text-${textColor}-800`} />
      </div>
    </div>
  );
}

function BubbleMenus(props) {
  return (
    <BubbleMenu
      className="bg-gray-200 p-1 flex justify-baseline items-center"
      tippyOptions={{
        placement: "bottom",

        // if you want
      }}
      editor={props.editor}
    >
      <button onClick={props.noteFunc} className={styles.bubbleicondeactive}>
        Take Note
      </button>
   
     
      <button
        onClick={() => {
          props.editor
            .chain()
            .focus()
            .unsetHighlight()
            .run();
        }}
        className={styles.bubbleicondeactive}
      >
        Unhighlight
      </button>
 
    </BubbleMenu>
  );
}

export default RawEditor;
