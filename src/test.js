import React from "react";

import { Network, Node, Edge } from "react-vis-network";
import Navbar from "./Commons/Navbar/Navbar";

function Test() {
  const Decorator = (props) => {
    return (
      <button onClick={() => console.log(`You clicked ${props.maiscore_}`)}>
        Click Me
      </button>
    );
  };

  const data = [
    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Science", "Physics"],
      maiscore: 4,
      type: "Web",
      entities: ["A", "B"],
    },
    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Science", "Biology"],
      maiscore: 5,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["English", "Prose", "Shertak"],
      maiscore: 8,
      type: "Web",
      entities: ["A", "B"],
    },

    {
      id: "kshfkj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Science", "Biology", "Bio Chemistry"],
      maiscore: 3,
      type: "Web",
      entities: ["A", "B", "Bio"],
    },
    {
      id: "kshfskj",
      title: "Title One",
      content: "sjhfk",
      notes: [],
      nodes: ["Science", "Biology", "Bio Chemistry Physics"],
      maiscore: 9,
      type: "Web",
      entities: ["A", "B", "USA"],
    },

    {
      id: "kshfkj",
      title: "MyTitle",
      content: "sjhfk",
      notes: [],
      nodes: ["English", "Anthropology", "Bio Chemistry"],
      maiscore: 5,
      type: "Web",
      entities: ["A", "B", "USA"],
    },
  ];

  const [showLabel, setShowLabel] = React.useState(false);
  const [graph, setGraph] = React.useState();
  const [query, setQuery] = React.useState(false);
  const queryRef = React.useRef();
  const queryTypeRef = React.useRef();

  function matchQuery(qstring, cstring, qtype) {
    try {
      if (qtype === "maiscore" && qstring.length !== 0) {
        if (
          parseInt(qstring) <= parseInt(cstring)
          
        ) {
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
      return 12;

    }catch {
      return 12
    }
   
  }

  React.useEffect(() => {
    const nodehistory = [];

    const graphList = [
      <Node
        id="Maibrain"
        label={"Maibrain"}
        fixed={true}
        size={24}
        color={"cyan"}
      />,
    ];

    const g = data.map((each, index) => {
      return data[index]["nodes"].map((e, i) => {
        if (!nodehistory.includes(data[index]["nodes"][i])) {
          nodehistory.push(data[index]["nodes"][i]);

          if (i !== 0) {
            graphList.push(
              <Node
                id={data[index]["nodes"][i]}
                label={showLabel ? data[index]["nodes"][i] : " "}
                group={data[index]["nodes"][i - 1]}
                maiscore_={data[index]["maiscore"]}
                size={matchQuery(
                  queryRef.current.value.toString(),
                  data[index][queryTypeRef.current.value],
                  queryTypeRef.current.value
                )}
                decorator={Decorator}
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
                id={data[index]["nodes"][i]}
                label={showLabel ? data[index]["nodes"][i] : " "}
                group={data[index]["nodes"][i]}
                size={matchQuery(
                  queryRef.current.value.toString(),
                  data[index][queryTypeRef.current.value],
                  queryTypeRef.current.value
                )}
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
                  id={data[index]["nodes"][i]}
                  label={showLabel ? data[index]["nodes"][i] : " "}
                  group={data[index]["nodes"][i]}
                  size={matchQuery(
                    queryRef.current.value.toString(),
                    data[index][queryTypeRef.current.value],
                    queryTypeRef.current.value
                  )}
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
      <div style={{ height: "100vh" }} className=" bg-gray-900">
        <div className="flex justify-center items-center">
          <input ref={queryRef} className="my-3 input-md rounded w-1/3 " />
          <select
            ref={queryTypeRef}
            class="mx-1 select select-bordered ax-w-xs"
          >
            <option selected="selected">Type</option>
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

          <div class="form-control">
            <label class="cursor-pointer label">
              <div className="flex flex-col justify-center items-center">
                <input
                  type="checkbox"
                  onClick={(e) => {
                    setShowLabel(!showLabel);
                  }}
                  class="toggle toggle-primary"
                />
                <span class="label-text text-white mx-1 my-1">Show Labels</span>
              </div>
            </label>
          </div>
        </div>

        <Network
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

export default Test;
