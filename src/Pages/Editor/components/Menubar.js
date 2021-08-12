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
import {BiFontFamily} from "react-icons/bi"
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
  const classes = styles;
  const editor = props.editor;

  if (!editor) {
    return null;
  }

  return (
    <div className="px-1 py-2 bg-gray-100 flex gap-1 items-baseline flex-wrap">
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
        <FaSuperscript />
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
        <FaSubscript />
      </button>

      <div class="dropdown">
        <div tabindex="0" class={styles.icondeactive}>
         <BiFontFamily />
        </div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <p
              href={""}
              class="p-1 font-bold hover:bg-gray-400 cursor-pointer"
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
              class="p-1 font-bold hover:bg-gray-400 cursor-pointer"
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
              class="p-1 font-bold hover:bg-gray-400 cursor-pointer"
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
              class="p-1 font-bold hover:bg-gray-400 cursor-pointer"
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
              class="p-1 font-bold hover:bg-gray-400 cursor-pointer"
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
              class="p-1 font-bold hover:bg-gray-400 cursor-pointer"
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
      {props.textcolormenu}



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
            ? classes.iconactive
            : classes.icondeactive
        }
      >
        <FaHighlighter />
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
        <FaAlignLeft />
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
        <FaAlignCenter />
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
        <FaAlignRight />
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
        <FaParagraph />
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
        <FaListUl />
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
        <FaListOl />
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
        <FaCode />
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
        <FaFileCode />
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
        <AiOutlineLine />
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
        <ImPagebreak />
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
        className={classes.icondeactive}
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
        <FaRedo />
      </button>

     

      <div className="dropdown dropdown-right">
        <div tabindex="0" className={classes.icondeactive}>
          <FaImages />
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
