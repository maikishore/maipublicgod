/*
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
      <div className="mx-2 text-sm breadcrumbs">
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
            <Nodes />
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
              <div className="w-auto bg-white-100 shadow-lg border-2">
                <div className="flex flex-row ">
                  <div className="py-2 px-2 flex  w-full ">
                    <div className="form-control  w-full">
                      <input
                        type="text"
                        placeholder="Note Title"
                        class="input input-md input-bordered w-5/6"
                      />
                    </div>

                    <button class="btn w-1/4 btn-success">Save</button>
                  </div>
                </div>
                <div className="flex flex-wrap  bg-green-100 ">
                  <div className="w-full max-h-36 overflow-y-scroll">
                    <Entities />
                  </div>
                </div>

                <div className=" flex justify-between items-center">
                  <div class="p-1 card bordered">
                    <div className="flex items-center">
                      <div class="form-control p-2">
                        <label class="cursor-pointer label">
                          <span class="label-text px-2">Low </span>
                          <input
                            type="radio"
                            name="opt"
                            class="radio radio-secondary"
                            value=""
                          />
                        </label>
                      </div>

                      <div class="form-control p-2">
                        <label class="cursor-pointer label">
                          <span class="label-text px-2 ">High </span>
                          <input
                            type="radio"
                            name="opt"
                            class="radio radio-secondary"
                            value=""
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="m-2 btn btn-sm btn-ghost ">
                      Add Entity
                    </button>
                  </div>
                </div>

                <div className="w-auto bg-purple-100 max-h-80 overflow-y-scroll">
                  "Adaptation" means a work based upon the Work, or upon the
                  Work and other pre-existing works, such as a translation,
                  adaptation, derivative work, arrangement of music or other
                  alterations of a literary or artistic work, or phonogram or
                  performance and includes cinematographic adaptations or any
                  other form in which the Work may be recast, transformed, or
                  adapted including in any form recognizably derived from the
                  original, except that a work that constitutes a Collection
                  will not be considered an Adaptation for the purpose of this
                  License. For the avoidance of doubt, where the Work is a
                  musical work, performance or phonogram, the synchronization of
                  the Work in timed-relation with a moving image ("synching")
                  will be considered an Adaptation for the purpose of this
                  License. "Collection" means a collection of literary or
                  artistic works, such as encyclopedias and anthologies, or
                  performances, phonograms or broadcasts, or other works or
                  subject matter other than works listed in Section 1(f) below,
                  which, by reason of the selection and arrangement of their
                  contents, constitute intellectual creations, in which the Work
                  is included in its entirety in unmodified form along with one
                  or more other contributions, each constituting separate and
                  independent works in themselves, which together are assembled
                  into a collective whole. A work that constitutes a Collection
                  will not be considered an Adaptation (as defined below) for
                  the purposes of this License. "Creative Commons Compatible
                  License" means a license that is listed at
                  https://creativecommons.org/compatiblelicenses that has been
                  approved by Creative Commons as being essentially equivalent
                  to this License, including, at a minimum, because that
                  license: (i) contains terms that have the same purpose,
                  meaning and effect as the License Elements of this License;
                  and, (ii) explicitly permits the relicensing of adaptations of
                  works made available under that license under this License or
                  a Creative Commons jurisdiction license with the same License
                  Elements as this License. "Distribute" means to make available
                  to the public the original and copies of the Work or
                  Adaptation, as appropriate, through sale or other transfer of
                  ownership. "License Elements" means the following high-level
                  license attributes as selected by Licensor and indicated in
                  the title of this License: Attribution, ShareAlike. "Licensor"
                  means the individual, individuals, entity or entities that
                  offer(s) the Work under the terms of this License. "Original
                  Author" means, in the case of a literary or artistic work, the
                  individual, individuals, entity or entities who created the
                  Work or if no individual or entity can be identified, the
                  publisher; and in addition (i) in the case of a performance
                  the actors, singers, musicians, dancers, and other persons who
                  act, sing, deliver, declaim, play in, interpret or otherwise
                  perform literary or artistic works or expressions of folklore;
                  (ii) in the case of a phonogram the producer being the person
                  or legal entity who first fixes the sounds of a performance or
                  other sounds; and, (iii) in the case of broadcasts, the
                  organization that transmits the broadcast. "Work" means the
                  literary and/or artistic work offered under the terms of this
                  License including without limitation any production in the
                  literary, scientific and artistic domain, whatever may be the
                  mode or form of its expression including digital form, such as
                  a book, pamphlet and other writing; a lecture, address, sermon
                  or other work of the same nature; a dramatic or
                  dramatico-musical work; a choreographic work or entertainment
                  in dumb show; a musical composition with or without words; a
                  cinematographic work to which are assimilated works expressed
                  by a process analogous to cinematography; a work of drawing,
                  painting, architecture, sculpture, engraving or lithography; a
                  photographic work to which are assimilated works expressed by
                  a process analogous to photography; a work of applied art; an
                  illustration, map, plan, sketch or three-dimensional work
                  relative to geography, topography, architecture or science; a
                  performance; a broadcast; a phonogram; a compilation of data
                  to the extent it is protected as a copyrightable work; or a
                  work performed by a variety or circus performer to the extent
                  it is not otherwise considered a literary or artistic work.
                  "You" means an individual or entity exercising rights under
                  this License who has not previously violated the terms of this
                  License with respect to the Work, or who has received express
                  permission from the Licensor to exercise rights under this
                  License despite a previous violation. "Publicly Perform" means
                  to perform public recitations of the Work and to communicate
                  to the public those public recitations, by any means or
                  process, including by wire or wireless means or public digital
                  performances; to make available to the public Works in such a
                  way that members of the public may access these Works from a
                  place and at a place individually chosen by them; to perform
                  the Work to the public by any means or process and the
                  communication to the public of the performances of the Work,
                  including by public digital performance; to broadcast and
                  rebroadcast the Work by any means including signs, sounds or
                  images. "Reproduce" means to make copies of the Work by any
                  means including without limitation by sound or visual
                  recordings and the right of fixation and reproducing fixations
                  of the Work, including storage of a protected performance or
                  phonogram in digital form or other electronic medium. 2. Fair
                  Dealing Rights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Entities(props) {
  const [entityList, setEntityList] = React.useState([
    "afdadf",
    "afda",
    "adfadf",
    "afasfsad",
  ]);

  const ents = entityList.map((each, index) => {
    return (
      <div
        id={index}
        onClick={(e) => {
          setEntityList((prevstate) =>
            prevstate.filter((item) => item !== each)
          );
          console.log(entityList);
        }}
        class="mx-1 p-1 badge badge-primary cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        {each}
      </div>
    );
  });

  return <>{ents}</>;
}

export default Test;
*/