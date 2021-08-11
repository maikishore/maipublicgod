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

import "./editor.css";
import MenuBar from "./Menubar";

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  bubbleiconactive: "  mx-1   bg-gray-700 shadow btn btn-sm",
  bubbleicondeactive: " mx-1 bg-gray-900 shadow btn btn-sm",
  colorbutton: "w-8 h-2 mx-1  bg-red-700 shadow btn btn-sm btn-square",

  ol: "list-inside",
};
function RawEditor(props) {
  const editor = props.editor;

  return (
    <div className="w-full">
      {editor && <BubbleMenus editor={editor} noteFunc={props.noteFunc} />}
      <div className="m-1 h-auto p-1 shadow-xxl bg-gray-200">
        <MenuBar editor={editor} />
      </div>

      <div className="m-1 shadow-md border-2 border-gray-700 ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}






function BubbleMenus(props) {
  return (
    <BubbleMenu
      className="bg-gray-100 p-1 flex justify-baseline items-center"
      tippyOptions={{
        placement: "bottom",

        // if you want
      }}
      editor={props.editor}
    >
      <button onClick={props.noteFunc} className={styles.bubbleicondeactive}>
       M
      </button>

      <button onClick={props.noteFunc} className={styles.colorbutton}>
       
      </button>
      <button onClick={props.noteFunc} className={styles.colorbutton}>
       
      </button>



      <button
        onClick={() => {
          props.editor
            .chain()
            .focus()
            .unsetHighlight()
            .run();
        }}
        className={styles.icondeactive}
      >
        Highlight
      </button>
      <button
        onClick={() =>
          props.editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={props.editor.isActive("italic") ? "is-active" : ""}
      >
        italic
      </button>
      <button
        onClick={() =>
          props.editor
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={props.editor.isActive("strike") ? "is-active" : ""}
      >
        strike
      </button>
    </BubbleMenu>
  );
}

export default RawEditor;
