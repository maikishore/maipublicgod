import React from "react";
import Navbar from "./Commons/Navbar/Navbar";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent,BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { defaultExtensions } from "@tiptap/starter-kit";
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

const styles = {
  iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
  icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
  ol: "list-inside",
};

function Nodes(props) {
  const data = ["Science", "Physics", "Title", "Physics"];
  const [nlist, setNlist] = React.useState(data);
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
    <div className="flex justify-start items-center gap-2 bg-white-400">
      <div className="text-sm breadcrumbs">
        <ul>{nlists}</ul>
      </div>
      <div className="dropdown dropdown-right">
        <div tabindex="0" className="btn btn-sm btn-accent rounded-btn">
          Add Node
        </div>
        <ul
          tabindex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div className="form-control">
              <input
                ref={nodeRef}
                type="text"
                placeholder="Node Title"
                className="mb-1 input input-bordered"
              />
            </div>
            <button
              onClick={(e) => {
                setNodecheck(!nodeCheck);
              }}
              className="btn btn-sm"
            >
              Add
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

const MenuBar = ({ editor }) => {
  const classes = styles;

  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-1 items-baseline flex-wrap">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={
          editor.isActive("bold") ? classes.iconactive : classes.icondeactive
        }
      >
        <FaBold />
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={
          editor.isActive("italic") ? classes.iconactive : classes.icondeactive
        }
      >
        <FaItalic />
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={
          editor.isActive("strike") ? classes.iconactive : classes.icondeactive
        }
      >
        <MdStrikethroughS />
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleSuperscript()
            .run()
        }
        className={
          editor.isActive("superscript")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        Superscript
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleSubscript()
            .run()
        }
        className={
          editor.isActive("subscript")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        Subscript
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={
          editor.isActive("code") ? classes.iconactive : classes.icondeactive
        }
      >
        code
      </button>
      <button
        className={classes.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .unsetAllMarks()
            .run()
        }
      >
        clear marks
      </button>
      <button
        className={classes.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .clearNodes()
            .run()
        }
      >
        clear nodes
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTextAlign("left")
            .run()
        }
        className={
          editor.isActive({ textAlign: "left" })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        Left
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTextAlign("center")
            .run()
        }
        className={
          editor.isActive({ textAlign: "center" })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        center
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setTextAlign("right")
            .run()
        }
        className={
          editor.isActive({ textAlign: "right" })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        right
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setParagraph()
            .run()
        }
        className={
          editor.isActive("paragraph")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        paragraph
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 1 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 1 })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        h1
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 2 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 2 })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        h2
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 3 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 3 })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        h3
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 4 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 4 })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        h4
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 5 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 5 })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        h5
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 6 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 6 })
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        h6
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        }
        className={
          editor.isActive("bulletList")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        bullet list
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleOrderedList()
            .run()
        }
        className={
          editor.isActive("orderedList")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        ordered list
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleCodeBlock()
            .run()
        }
        className={
          editor.isActive("codeBlock")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        code block
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBlockquote()
            .run()
        }
        className={
          editor.isActive("blockquote")
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        blockquote
      </button>
      <button
        className={classes.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setHorizontalRule()
            .run()
        }
      >
        horizontal rule
      </button>
      <button
        className={classes.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setHardBreak()
            .run()
        }
      >
        hard break
      </button>
      <button
        className={classes.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        undo
      </button>
      <button
        className={classes.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        redo
      </button>

      <div className="dropdown dropdown-right">
        <div tabindex="0" className={classes.icondeactive}>
          Image
        </div>
        <ul
          tabindex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Image Source"
                className="mb-1 input input-bordered"
              />
            </div>
            <button
              onClick={(e) => {
                if (true) {
                  editor
                    .chain()
                    .focus()
                    .setImage({
                      src:
                        "https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d0bc991c864410c5ad87931_logo-new.svg",
                    })
                    .run();
                }
              }}
              className="btn btn-sm"
            >
              Add
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

function Editors() {
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
      Dropcursor,
      TextAlign.configure({
        types: ["heading", "paragraph", "image", "img"],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          " prose prose-sm sm:prose lg:prose-lg xl:prose-2xl border-none bg-white overflow-y-auto   ",
      },
    },
  });

  return (
    <div className="w-full ">
      {editor && <BubbleMenu 
      className="flex justify-baseline items-center"
      tippyOptions={{placement:"bottom"}}
      editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? styles.iconactive : styles.icondeactive}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
      </BubbleMenu>}
      <div className="m-1 h-auto p-1 shadow-xxl bg-gray-200">
        <MenuBar editor={editor} />
      </div>

      <div className="m-1 shadow-md border-2 border-gray-700 ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default function test() {
  return (
    <div className="">
      <Navbar />
      <div className="w-full h-screen bg-white-400">
        <div className="grid grid-flow-row grid-rows-8">
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
            <Nodes />
            <div class="m-2 flex items-start justify-center ">
              <button onClick={(e) => {}} className="btn  btn-sm btn-circle">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-center items-baseline">
            <div className="w-full">
              <Editors />
            </div>

            <div className="w-1/6">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}
