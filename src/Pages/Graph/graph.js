import React from "react";

import { Network, Node, Edge } from "react-vis-network";

import { BiReset } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { FaInfo } from "react-icons/fa";

import {
  Tooltip,
} from 'react-tippy';
 
import uuid from 'react-uuid'
import Navbar from "../../Commons/Navbar/Navbar";

function Graph() {
  const Decorator = (props) => {
    return (
      <Tooltip
      // options
      title="Welcome to React"
      html={

      <div className="w-60 h-50 card  rounded shadow-xl bg-green-100">
      <div className="card-title ">
      <p className="p-1 "> {props["title"]} </p>
      </div>
      <div className="stat">
    <div className="stat-title">Maiscore</div> 
    <div className="stat-value">{props['maiscore_']}</div> 
    <div className="stat-actions">
      <button className="btn  btn-sm btn-primary">Open Note</button> 
      <button className="btn mx-1 btn-sm btn-primary">Memorize</button>
    </div>
  </div>

    

        </div>}
      
      position="bottom"
      trigger="click"
    
    >
     
       <FaInfo className="m-1 bg-green-100"/>
      
    </Tooltip>
   
    );
  };

  const data = [
    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["History", "Pre Independence", "Quit India Movement"],
      maiscore: 30,
      type: "Web",
      entities: ["A", "B", "Bio"],
    },
    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Biology", "Botnay",],
      maiscore: 10,
      type: "Web",
      entities: ["A", "B"],
    },
    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Botnay", "Plants"],
      maiscore: 10,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Botnay", "Animals"],
      maiscore: 5,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Botnay", "Animals", "Humans"],
      maiscore: 1,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Physics", "Animals", "Humans"],
      maiscore: 1,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: [ "Humans","Males"],
      maiscore: 1,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Humans","Females"],
      maiscore: 1,
      type: "Web",
      entities: ["A", "B","Sex"],
    },


  ];

  const [showLabel, setShowLabel] = React.useState(false);
  const [graph, setGraph] = React.useState();
  const [query, setQuery] = React.useState(false);
  const networkRef=React.useRef()

  const queryRef = React.useRef();
  const queryTypeRef = React.useRef();

  function matchQuery(qstring, cstring, qtype) {
    try {
      if (qtype === "maiscore" && qstring.length !== 0) {
        if ( parseInt(cstring)<=parseInt(qstring)) {
          return 18;
        }
      }

      if (qtype === "title" && qstring.length !== 0) {
        console.log(qstring, cstring, qtype);
        if (
          qstring.toString().toLowerCase() === cstring.toString().toLowerCase()
        ) {
          return 18;
        }
      }

      if (qtype === "entities" && qstring.length !== 0) {
        var words = cstring.map(function(v) {
          return v.toLowerCase();
        });
        if (words.includes(qstring.toLowerCase())) {
          return 18;
        }
      }

      if (qtype === "nodes" && qstring.length !== 0) {
        var words = cstring.map(function(v) {
          return v.toLowerCase();
        });
        if (words.includes(qstring.toLowerCase())) {
          return 18;
        }
      }
      return 10;
    } catch {
      return 10;
    }
  }












  const CustomIcon = ({ icon, color = '#F472B6' }) => {
    const viewBox = 36;
    const iconSize = 20;
    const pad = (viewBox - iconSize) / 2;
    const center = viewBox / 2;
   
    return (

      <svg id="svgs"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBox} ${viewBox}`}

      >
 
        <g >
          <circle  cx={center} cy={center} r={16} fill={color} />
          <g transform={`translate(${pad}, ${pad})`}>
 
            {React.createElement(icon, { color: 'white', size: iconSize })}
          </g>
        </g>

 
      </svg>
    );
  };






  React.useEffect(() => {
    const nodehistory = [];

    const graphList = [
      <Node
        id="Maibrain"
        label={"Maibrain"}
        fixed={true}
        size={30}
        shadow={true}
        
       icon={GiBrain}
        component={CustomIcon}
      />,
    ];



    const g = data.map((each, index) => {
      return data[index]["nodes"].map((e, i) => {
        if (!nodehistory.includes(data[index]["nodes"][i])) {
          nodehistory.push(data[index]["nodes"][i]);

          if (i !== 0) {
            graphList.push(
              <Node
              key={data[index][i]}
                id={data[index]["nodes"][i]}
                title={data[index]["title"]}
                label={showLabel ? data[index]["nodes"][i] : " "}
                group={data[index]["nodes"][i - 1]}
                maiscore_={data[index]["maiscore"]}
                size={matchQuery(
                  queryRef.current.value.toString(),
                  data[index][queryTypeRef.current.value],
                  queryTypeRef.current.value
                )}
                decorator={
                  i === data[index]["nodes"].length - 1 ? Decorator : () => {}
                }
                shadow={{
                  size: 60,
                  color: "cyan",
                }}
              />,
              <Edge
                id={data[index]["nodes"][i]}
                from={data[index]["nodes"][i - 1]}
                to={data[index]["nodes"][i]}
              />
            );
            return <></>;
          } else {
            graphList.push(
              <Node
              key={data[index][i]}
                id={data[index]["nodes"][i]}
                label={showLabel ? data[index]["nodes"][i] : " "}
                group={data[index]["nodes"][i]}
                size={matchQuery(
                  queryRef.current.value.toString(),
                  data[index][queryTypeRef.current.value],
                  queryTypeRef.current.value
                )}
                decorator={
                  i === data[index]["nodes"].length - 1 ? Decorator : () => {}
                }
              />
            );
            graphList.push(
              <Edge
                id={"Maibrain-" + data[index]["nodes"][i]}
                from={"Maibrain"}
                to={data[index]["nodes"][i]}
              />
            );
            return (
              <>
                <Node
                key={data[index][i]}
                  id={data[index]["nodes"][i]}
                  label={showLabel ? data[index]["nodes"][i] : " "}
                  group={data[index]["nodes"][i]}
                  size={matchQuery(
                    queryRef.current.value.toString(),
                    data[index][queryTypeRef.current.value],
                    queryTypeRef.current.value
                  )}
                  decorator={
                    i === data[index]["nodes"].length - 1 ? Decorator : () => {}
                  }
                />
              </>
            );
          }
        } else {
          return <></>;
        }
      });
    });
    const graphs = graphList.map((each, i) => {
      return each;
    });
    setGraph(graphs);
  }, [showLabel, query]);

  return (
    <div className=" overflow-hidden bg-gray-900">
      <Navbar />
      <div style={{ height: "100vh" }} className=" overflow-hidden bg-gray-900">
        <div className="flex  w-full items-baseline ">
          <div className="flex w-2/3  items-center justify-end">
       
          <input ref={queryRef} className="my-3 input-md rounded w-1/3 " />
          <select
          defaultValue="Type"
            ref={queryTypeRef}
            className="mx-1 select select-bordered ax-w-xs text-medium"
          >
            <option  className="mb-1 text-md font-bold" >Type</option>
            <option value="title">Title</option>
            <option value="nodes">Nodes</option>
            <option value="entities">Keywords</option>
            <option value="maiscore">Maiscore</option>
          </select>
          <button
            onClick={(e) => {
              setQuery(!query);
            }}
            className="mx-1 btn btn-outline bg-green-400"
          >
            Query
          </button>
          </div>
 

          <div className="flex w-1/4 justify-end items-baseline ">
            <div className="form-control">
              <label className="cursor-pointer label">
                <div className="flex flex-col justify-center items-center">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      setShowLabel(!showLabel);
                    }}
                    className="toggle toggle-primary"
                  />
                  <span className="label-text text-white mx-1 my-1">
                    Show Labels
                  </span>
                </div>
              </label>
            </div>

            <button onClick={(e)=>{
              queryRef.current.value=""
              queryTypeRef.current.value="Type"
             setQuery(!query)
            }} className="btn btn-sm bg-red-300 hover:bg-red-100">
              <BiReset />
            </button>
          </div>


        </div>

        <Network
          ref={networkRef}
          options={{
            nodes: {
              shape: "dot",
              size: 12,
              font: {
                size: 20,
                color: "#ffffff",
              },
              borderWidth: 2,
              shadow: true,
            },
            edges: {
              width: 2,
              shadow: true,
            },
          }}
        >
          {graph}
        </Network>
      </div>
    </div>
  );
}

export default Graph;
