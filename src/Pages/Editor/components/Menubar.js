import React from "react";


import { FaBold, FaItalic, FaCode } from "react-icons/fa";
import { MdStrikethroughS } from "react-icons/md";


const styles = {
    iconactive: "mx-1 px-2 py-2  bg-gray-400 shadow btn btn-ghost",
    icondeactive: "mx-1 px-2 py-2 bg-gray-100 shadow btn btn-ghost",
    ol: "list-inside",
  };

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

  export default MenuBar;