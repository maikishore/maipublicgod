import React from "react";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";

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
import MenuBar from "./Menubar";

import "./editor.css";

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  ol: "list-inside",
};
function RawEditor(props) {
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
      className="flex justify-baseline items-center"
      tippyOptions={{
        placement: "bottom",

        // if you want
      }}
      editor={props.editor}
    >
      <button onClick={props.noteFunc} className={styles.icondeactive}>
        Take Note
      </button>

      <button onClick={()=>{
props.editor.chain().focus().toggleHighlight({
  color: 'red'
}).run()
      }} className={styles.icondeactive}>
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
