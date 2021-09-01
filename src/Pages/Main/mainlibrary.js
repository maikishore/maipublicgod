import React from "react";
import { CgStack } from "react-icons/cg";
import { MdAdd, MdVideoLibrary, MdWebAsset } from "react-icons/md";
import { FaBook, FaStickyNote } from "react-icons/fa";

import MenuCard from "./components/menucard";
import SelectCard from "./components/selectcard";
import Navbar from "../../Commons/Navbar/Navbar";
import { useHistory, useParams } from "react-router-dom";
import Graph from "../Graph/graph";

const data = [
  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: [
      "History",
      "Pre Independence",
      "Pre Independence",
      "Pre Independence",
      "Pre Independence",
      "Quit India Movement",
      "Quit India Movement",
    ],
    maiscore: 30,
    typee: "WEB",
    entities: ["A", "B", "Bio"],
  },
  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Biology", "Botnay"],
    maiscore: 10,
    typee: "VIDEO",
    entities: ["A", "B"],
  },
  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Botnay", "Plants"],
    maiscore: 10,
    typee: "NOTES",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Botnay", "Animals"],
    maiscore: 5,
    typee: "BOOKS",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Botnay", "Animals", "Humans"],
    maiscore: 1,
    typee: "WEB",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Physics", "Animals", "Humans"],
    maiscore: 1,
    typee: "VIDEO",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Humans", "Males"],
    maiscore: 100,
    typee: "VIDEO",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Humans", "Females"],
    maiscore: 1,
    typee: "WEB",
    entities: ["A", "B", "Sex"],
  },
];

export default function MainLibrary(props) {
  const [typee, settypee] = React.useState("ALL");
  const [filterData, setFilterData] = React.useState([]);
  const [addToggle, setaddToggle] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [graphToggle,setGraphToggle]=React.useState(false)
  
  const history = useHistory();

  const webUrlRef = React.useRef();
  const filterFunc = (data, matchtypee) => {
    var k = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i]["typee"] === matchtypee) {
        k.push(data[i]);
      }
    }

    return k;
  };

  React.useEffect(() => {
    switch (typee) {
      case "ALL":
        setFilterData(data);

        break;

      case "WEB":
        setFilterData(filterFunc(data, "WEB"));
        console.log(typee);
        break;
      case "VIDEO":
        setFilterData(filterFunc(data, "VIDEO"));
        break;

      case "BOOKS":
        setFilterData(filterFunc(data, "BOOKS"));
        break;

      case "NOTES":
        setFilterData(filterFunc(data, "NOTES"));
        break;
      default:
    }
  }, [typee]);

  React.useEffect(() => {
    switch (typee) {
      case "ALL":
        break;

      case "WEB":
        setShowModal(true);
        break;

      case "VIDEO":
        history.push("/videonote/");

        break;

      case "BOOKS":
        break;

      case "NOTES":
        history.push("/note");
        break;
      default:
    }

    return () => {
      setaddToggle(false);
      setShowModal(false);
    };
  }, [addToggle]);





  const contentcards = filterData.map((each, index) => {
    return (
      <MenuCard
        title={each["title"]}
        timetoread="29 mins"
        nodes={each["nodes"].slice(0, 3)}
        maiscore={each["maiscore"]}
      />
    );
  });



  const pageshift=( <div class="">
  <div class="form-control flex " onClick={()=>{
    setGraphToggle(!graphToggle)
  }}>
    <label class="cursor-pointer">
      <div className="flex flex-col justify-center items-center">
          <input type="checkbox" checked={graphToggle?"checked":""}  class="toggle toggle-secondary" />
          <span class="label-text px-2 font-bold text-lg text-yellow-500 ">{graphToggle?"Mailibrary":"Maigraph"}</span> 

       </div>


    </label>
  </div>
</div>
  )
  return (
    <div>
      <Navbar />
   
      {graphToggle?<
        Graph togglePage={pageshift} />:<div>
      <div className="w-full h-60 -mt-2 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex flex-row  justify-start items-center">
          <div className=" w-1/2 mt-12 ml-8 ">
            <blockquote className="p-4  italic text-neutral-600  quote">
              <p className="mb-2 text-4xl ">
                "I trust him I trust himI trust him ."
              </p>
              <cite className="place-self-end ">-nickd</cite>
            </blockquote>
          </div>
        </div>
      </div>
      <div></div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="card w-full h-40 shadow-lg bg-white">
                <div className="mt-4 flex justify-center items-center">
                  <div class="form-control">
                    <input
                      ref={webUrlRef}
                      type="text"
                      placeholder="paste url here"
                      class="input w-96 input-lg input-bordered"
                    />
                  </div>

                  <div>
                    <button
                      onClick={(e) => {
                        openInNewTab(webUrlRef.current.value);
                      }}
                      className="btn btn-lg ml-1 btn-primary"
                    >
                      Go
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={(e) => {
                        setShowModal(false);
                      }}
                      className="btn btn-lg btn-ghost"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div class="alert alert-info">
                  <div class="flex-1 text-center mt-1 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 mx-2 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <label>
                      {" "}
                      You can take your note on webpages with our chrome
                      extension installed.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
      <div className="mt-6 flex flex-col overflow-hidden">
        <div className="flex justify-end mr-2">
        {pageshift}
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center flex-row text-center">
          <SelectCard
            clickFunc={(e) => {
              settypee("ALL");
            }}
            icon={<CgStack />}
            title="ALL"
            classes={typee === "ALL" ? "bg-gray-300" : "bg-white"}
          />

          <SelectCard
            clickFunc={(e) => {
              settypee("WEB");
            }}
            icon={<MdWebAsset className="text-blue-300" />}
            title="Web"
            classes={typee === "WEB" ? "bg-gray-300" : "bg-white"}
          />

          <SelectCard
            clickFunc={(e) => {
              settypee("VIDEO");
            }}
            icon={<MdVideoLibrary className="text-red-300" />}
            title="Video"
            classes={typee === "VIDEO" ? "bg-gray-300" : "bg-white"}
          />

         
          <SelectCard
            clickFunc={(e) => {
              settypee("NOTES");
            }}
            icon={<FaStickyNote className="text-yellow-300" />}
            title="Note"
            classes={typee === "NOTES" ? "bg-gray-300" : "bg-white"}
          />
          <SelectCard
            clickFunc={(e) => {
              setaddToggle(true);
            }}
            icon={<MdAdd className="text-blue-800" />}
            title="ADD"
          />
        </div>

        <div className=" m-6 flex flex-wrap h-screen  justify-start">
          {contentcards}
        </div>
      </div>
      </div> }
      
    </div>
  );
}


/*
 <SelectCard
            clickFunc={(e) => {
              settypee("BOOKS");
            }}
            icon={<FaBook className="text-green-300" />}
            title="Books/PDF"
            classes={typee === "BOOKS" ? "bg-gray-300" : "bg-white"}
          />

*/
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
