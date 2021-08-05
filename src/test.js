import React from "react";
import Navbar from "./Commons/Navbar/Navbar";

import { IoAddCircleSharp } from "react-icons/io5";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { defaultExtensions } from "@tiptap/starter-kit";

import "./test.css"


function Nodes(props) {
  const data = ["Science", "Physics", "Title","Physics"];
  const [nlist, setNlist] = React.useState(data);
  const [nodeCheck,setNodecheck]=React.useState(true)

  const nodeRef=React.useRef()

React.useEffect(()=>{

  if(nodeRef.current.value.length !==0){
   
    setNlist(prevstate=>[...prevstate,nodeRef.current.value])
    console.log(nlist)
  }

},[nodeCheck])

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
            <button onClick={(e)=>{
             
           setNodecheck(!nodeCheck)
            }} className="btn btn-sm">Add</button>
          </li>
        </ul>
      </div>
    </div>
  );
}


const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
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
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        undo
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        redo
      </button>
    </>
  )
}







function Editors() {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class:
          " prose prose-sm sm:prose lg:prose-lg xl:prose-2xl border-none bg-white-400 overflow-y-auto   "
      }
    },
    content: `
      Take Your Notes here
    `,
  })

  return (
    <div className="w-full ">
      <div className="m-1 p-2 shadow-xl bg-white-400">
      <MenuBar editor={editor} />
      </div>
      

      <div className="m-1 shadow-md border-2 border-gray-700 "><EditorContent editor={editor}   /></div>
      
    </div>
  )
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
        <div className="flex justify-between items-center"> 
        <Nodes />
        <button>THis</button>
        
        </div>
    <Editors />
        </div>
      </div>
    </div>
  );
}
