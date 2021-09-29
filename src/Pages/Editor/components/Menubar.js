import React from "react";

import {
  FaBold,
  FaItalic,
  FaFileCode,
  FaCode,
  FaRedo,
  FaUndo,
} from "react-icons/fa";
import { MdStrikethroughS } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";
import { ImPagebreak } from "react-icons/im";
import { BiFontFamily } from "react-icons/bi";
import {
  FaSuperscript,
  FaSubscript,
  FaHighlighter,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaListOl,
  FaListUl,
  FaImages,
  FaParagraph,
} from "react-icons/fa";

const styles = {
  iconactive:
    "mx-1 px-2 py-2  bg-gray-500 shadow btn btn-ghost hover:bg-gray-100",
  icondeactive:
    "mx-1 px-2 py-2 bg-gray-200 shadow btn btn-ghost hover:bg-gray-100",
  ol: "list-inside",
};

const MenuBar = (props) => {
  const classNamees = styles;
  const editor = props.editor;
  const imgRef = React.useRef();

  if (!editor) {
    return null;
  }

  return (
    <div className="px-1 py-2 bg-gray-100 flex gap-1 items-baseline flex-wrap">
     <div data-tip="Bold" className="tooltip tooltip-top">
     
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={
          editor.isActive("bold") ? classNamees.iconactive : classNamees.icondeactive
        }
      >
        <FaBold />
      </button>


      </div>
      <div data-tip="Italic" className="tooltip tooltip-top">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={
          editor.isActive("italic") ? classNamees.iconactive : classNamees.icondeactive
        }
      >
        <FaItalic />
      </button>
      </div>
      <div data-tip="Strike" className="tooltip tooltip-top">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={
          editor.isActive("strike") ? classNamees.iconactive : classNamees.icondeactive
        }
      >
        <MdStrikethroughS />
      </button>
      </div>
      <div data-tip="Superscript" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaSuperscript />
      </button>
      </div>
      <div data-tip="Subscript" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaSubscript />
      </button>
</div>


<div data-tip="Font Family" className="tooltip tooltip-top">
      <div className="dropdown">
        <div tabIndex="0" className={styles.icondeactive}>
          <BiFontFamily />
        </div>
        <ul
          tabIndex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <p
              href={""}
              className="p-1 font-bold hover:bg-gray-400 cursor-pointer"
              style={{
                fontFamily: "sans-serif",
              }}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setFontFamily("sans-serif")
                  .run()
              }
            >
              Sans
            </p>
          </li>

          <li>
            <p
              href={""}
              style={{
                fontFamily: "Inter",
              }}
              className="p-1 font-bold hover:bg-gray-400 cursor-pointer"
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setFontFamily("Inter")
                  .run()
              }
            >
              Inter
            </p>
          </li>

          <li>
            <p
              href={""}
              className="p-1 font-bold hover:bg-gray-400 cursor-pointer"
              style={{
                fontFamily: "IBM Plex Sans",
              }}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setFontFamily("IBM Plex Sans")
                  .run()
              }
            >
              Plex
            </p>
          </li>

          <li>
            <p
              href={""}
              className="p-1 font-bold hover:bg-gray-400 cursor-pointer"
              style={{
                fontFamily: "Roboto",
              }}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setFontFamily("Roboto")
                  .run()
              }
            >
              Roboto
            </p>
          </li>
          <li>
            <p
              href={""}
              className="p-1 font-bold hover:bg-gray-400 cursor-pointer"
              style={{
                fontFamily: "Zilla Slab",
              }}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setFontFamily("Zilla Slab")
                  .run()
              }
            >
              Zilla Slab
            </p>
          </li>
          <li>
            <p
              href={""}
              className="p-1 font-bold hover:bg-gray-400 cursor-pointer"
              style={{
                fontFamily: "Quintessential, cursive",
              }}
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setFontFamily("Quintessential")
                  .run()
              }
            >
              Quintessential
            </p>
          </li>
        </ul>
      </div>
      </div>
      <div data-tip="Font Color" className="tooltip tooltip-top">
      {props.textcolormenu}
</div>
<div data-tip="Highlight" className="tooltip tooltip-top">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHighlight()
            .run()
        }
        className={
          editor.isActive("highlight")
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaHighlighter />
      </button>
      </div>
      <div data-tip="Left Align" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaAlignLeft />
      </button>
</div>
<div data-tip="Center Align" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaAlignCenter />
      </button>
      </div>
      <div data-tip="Right Align" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaAlignRight />
      </button>
</div>
<div data-tip="Paragraph" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaParagraph />
      </button>
</div>

<div data-tip="Heading 1" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        h1
      </button>
      </div> 
      <div data-tip="Heading 2" className="tooltip tooltip-top">

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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        h2
      </button>
      </div>
      <div data-tip="Heading 3" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        h3
      </button>
      </div>
      <div data-tip="Heading 4" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        h4
      </button>
      </div>
      <div data-tip="Heading 5" className="tooltip tooltip-top">
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        h5
      </button>
      </div>

      <div data-tip="Heading 6" className="tooltip tooltip-top">      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: 6 })
            .run()
        }
        className={
          editor.isActive("heading", { level: 6 })
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        h6
      </button>
      </div>
      
      <div data-tip="Unordered List" className="tooltip tooltip-top">   
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaListUl />
      </button>
      </div>
      
      <div data-tip="Ordered List" className="tooltip tooltip-top">   
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaListOl />
      </button>
      </div>
      
      <div data-tip="Code" className="tooltip tooltip-top">   
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={
          editor.isActive("code") ? classNamees.iconactive : classNamees.icondeactive
        }
      >
        <FaCode />
      </button>
      </div>
      
      <div data-tip="Add Image" className="tooltip tooltip-top">   
      <div data-tip="" className="tooltip tooltip-top">   
      <div className="dropdown dropdown-right">
        <div tabIndex="0" className={classNamees.icondeactive}>
          <FaImages />
        </div>
        <ul
          tabIndex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div className="form-control">
              <input
                ref={imgRef}
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
                      src: imgRef.current.value,
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
      </div></div>
      
      <div data-tip="Code Block" className="tooltip tooltip-top">   
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        <FaFileCode />
      </button>

</div>


<div data-tip="Horizontal Rule" className="tooltip tooltip-top">   
      <button
        className={classNamees.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setHorizontalRule()
            .run()
        }
      >
        <AiOutlineLine />
      </button>
      </div>
      
      <div data-tip="Break" className="tooltip tooltip-top">   
      <button
        className={classNamees.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setHardBreak()
            .run()
        }
      >
        <ImPagebreak />
      </button>
      </div>
      
      <div data-tip="Block Quote" className="tooltip tooltip-top">   
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
            ? classNamees.iconactive
            : classNamees.icondeactive
        }
      >
        blockquote
      </button>
      </div>
      
      <div data-tip="Clear Marks" className="tooltip tooltip-top">   
      <button
        className={classNamees.icondeactive}
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
      </div>
      
      <div data-tip="Clear Content" className="tooltip tooltip-top">   
      <button
        className={classNamees.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .clearNodes()
            .run()
        }
      >
        clear content
      </button>
      </div>

      <div data-tip="Undo" className="tooltip tooltip-top">   
      <button
        className={classNamees.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <FaUndo />
      </button>
      </div>
      
      <div data-tip="Redo" className="tooltip tooltip-top">   
      <button
        className={classNamees.icondeactive}
        onClick={() =>
          editor
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <FaRedo />
      </button>
</div>
     
    </div>
  );
};

export default MenuBar;
