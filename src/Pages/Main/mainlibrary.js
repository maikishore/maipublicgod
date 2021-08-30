import React from "react";
import { CgStack } from "react-icons/cg";
import { MdAdd, MdVideoLibrary, MdWebAsset } from "react-icons/md";
import { FaBook, FaStickyNote } from "react-icons/fa";

import MenuCard from "./components/menucard";
import SelectCard from "./components/selectcard";
import Navbar from "../../Commons/Navbar/Navbar";
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
    type: "WEB",
    entities: ["A", "B", "Bio"],
  },
  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Biology", "Botnay"],
    maiscore: 10,
    type: "VIDEO",
    entities: ["A", "B"],
  },
  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Botnay", "Plants"],
    maiscore: 10,
    type: "NOTES",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Botnay", "Animals"],
    maiscore: 5,
    type: "BOOKS",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Botnay", "Animals", "Humans"],
    maiscore: 1,
    type: "WEB",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Physics", "Animals", "Humans"],
    maiscore: 1,
    type: "VIDEO",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Humans", "Males"],
    maiscore: 100,
    type: "VIDEO",
    entities: ["A", "B"],
  },

  {
    id: "kshfkj",
    title: "Title One",
    content: "sjhfk",
    notes: [],
    nodes: ["Humans", "Females"],
    maiscore: 1,
    type: "WEB",
    entities: ["A", "B", "Sex"],
  },
];

export default function MainLibrary(props) {
  const [type, setType] = React.useState("ALL");
  const [filterData, setFilterData] = React.useState([]);

  const filterFunc = (data, matchtype) => {
      
    var k = [];
    for (var i = 0; i < data.length; i++) {
        
      if (data[i]["type"] === matchtype) {
        k.push(data[i]);
      }
    }
    
 
    return k;
  };

  React.useEffect(() => {
    switch (type) {
      case "ALL":
        setFilterData(data);
      
        break;

      case "WEB":
        setFilterData(filterFunc(data, "WEB"));
        console.log(type)
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

  }, [type]);

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

  return (
    <div>
      <Navbar />

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
      <div className="mt-6 flex flex-col overflow-hidden">
        <div className="flex justify-end mr-2">
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text mr-1 font-bold text-lg ">Maigraph</span>
              <input
                type="checkbox"
                class="toggle toggle-lg toggle-secondary "
              />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center flex-row text-center">
          <SelectCard
            clickFunc={(e) => {
              setType("ALL");
            }}
            icon={<CgStack />}
            title="ALL"
          />

          <SelectCard
            clickFunc={(e) => {
              setType("WEB");
            }}
            icon={<MdWebAsset className="text-blue-300" />}
            title="Web"
          />

          <SelectCard
            clickFunc={(e) => {
              setType("VIDEO");
            }}
            icon={<MdVideoLibrary className="text-red-300" />}
            title="Video"
          />

          <SelectCard
            clickFunc={(e) => {
              setType("BOOKS");
            }}
            icon={<FaBook className="text-green-300" />}
            title="Books/PDF"
          />

          <SelectCard
            clickFunc={(e) => {
              setType("NOTES");
            }}
            icon={<FaStickyNote className="text-yellow-300" />}
            title="Note"
          />
        </div>

        <div className="mt-6 flex flex-wrap h-screen overflow-y-scroll justify-start">
          <div className="flex justify-center items-center p-8">
            <SelectCard
              icon={<MdAdd className="text-blue-800" />}
              title="ADD"
            />
          </div>

          {contentcards}
        </div>
      </div>
    </div>
  );
}
