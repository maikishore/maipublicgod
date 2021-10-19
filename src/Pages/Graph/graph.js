import React from "react";

import { Network, Node, Edge } from "react-vis-network";

import { BiReset } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { FaInfo } from "react-icons/fa";

import { Tooltip } from "react-tippy";

import { useHistory } from "react-router";
import { Truncate } from "../../Commons/Truncate";

function Graph(props) {
  const data = props.data;
  const history = useHistory();

  const Decorator = (props) => {
    return (
      <Tooltip
        // options

        html={
          <div className="w-60 h-50 card  rounded shadow-xl bg-green-100">
            <div className="card-title ">
              <p className="p-1 "> {props["title"]} </p>
            </div>
            <div className="stat">
              <div className="stat-title">Maiscore</div>

              <div className="stat-value">{props["maiscore_"]}</div>
              <div className="stat-actions">
                <button
                  className="btn  btn-sm btn-primary"
                  onClick={(e) => {
                    //console.log(props["type_"] ,props["id_"] )
                    if (props["type_"] === "WEB") {
                      window.open(props["source_"], "_blank");
                    }
                    if (props["type_"] === "NOTES") {
                      
                      history.push("readnote/" + props["id_"]);
                    }

                    if (props["type_"] === "VIDEO") {
                      history.push("readvideonote/" + props["id_"]);
                    }
                  }}
                >
                  Open Note
                </button>
                <button
                  onClick={() => {
                    history.push(`/quiz/${props["id_"]}`);
                  }}
                  className="btn mx-1 btn-sm btn-primary"
                >
                  Memorize
                </button>
              </div>
            </div>
          </div>
        }
        position="bottom"
        trigger="click"
      >
        <FaInfo className="m-1 bg-green-100" />
      </Tooltip>
    );
  };

  const [showLabel, setShowLabel] = React.useState(true);
  const [graph, setGraph] = React.useState();
  const [query, setQuery] = React.useState(false);
  const networkRef = React.useRef();

  const queryRef = React.useRef();
  const queryTypeRef = React.useRef();

  function matchQuery(qstring, cstring, qtype) {
    try {
      if (qtype === "maiscore" && qstring.length !== 0) {
        if (parseInt(cstring) <= parseInt(qstring)) {
          return 18;
        }
      }

      if (qtype === "title" && qstring.length !== 0) {
        //console.log(qstring, cstring, qtype);
        if (
          qstring.toString().toLowerCase() ===
            cstring.toString().toLowerCase() ||
          cstring
            .toString()
            .toLowerCase()
            .includes(qstring.toString().toLowerCase())
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

  const CustomIcon = ({ icon, color = "#F472B6" }) => {
    const viewBox = 36;
    const iconSize = 20;
    const pad = (viewBox - iconSize) / 2;
    const center = viewBox / 2;

    return (
      <svg
        id="svgs"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBox} ${viewBox}`}
      >
        <g>
          <circle cx={center} cy={center} r={16} fill={color} />
          <g transform={`translate(${pad}, ${pad})`}>
            {React.createElement(icon, { color: "white", size: iconSize })}
          </g>
        </g>
      </svg>
    );
  };

  React.useEffect(() => {
    const nodehistory = [];

    const graphList = [
      <Node
        key="maibrain"
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
                title={data[index]["title"].split("-")[0]}
                label={showLabel ? data[index]["nodes"][i].split("-")[0] : " "}
                group={data[index]["nodes"][i - 1]}
                maiscore_={data[index]["maiscore"]}
                id_={data[index]["_id"]}
                type_={data[index]["type"]}
                source_={data[index]["source"]}
                size={matchQuery(
                  queryRef.current.value.toString(),
                  data[index][queryTypeRef.current.value],
                  queryTypeRef.current.value
                )}
                decorator={
                  i === data[index]["nodes"].length - 1 ? Decorator : null
                }
                shadow={{
                  size: 60,
                  color: "cyan",
                }}
              />,
              <Edge
                key={data[index][i]}
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
                label={showLabel ? Truncate(data[index]["nodes"][i].split("-")[0], 25) : " "}
                group={data[index]["nodes"][i]}
                id_={data[index]["_id"]}
                type_={data[index]["type"]}
                source_={data[index]["source"]}
                size={matchQuery(
                  queryRef.current.value.toString(),
                  data[index][queryTypeRef.current.value],
                  queryTypeRef.current.value
                )}
                decorator={
                  i === data[index]["nodes"].length - 1 ? Decorator : null
                }
              />
            );
            graphList.push(
              <Edge
                key={data[index][i]}
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
                  label={
                    showLabel ? Truncate(data[index]["nodes"][i].split("-")[0], 25) : " "
                  }
                  group={data[index]["nodes"][i]}
                  id_={data[index]["_id"]}
                  type_={data[index]["type"]}
                  source_={data[index]["source"]}
                  size={matchQuery(
                    queryRef.current.value.toString(),
                    data[index][queryTypeRef.current.value],
                    queryTypeRef.current.value
                  )}
                  decorator={
                    i === data[index]["nodes"].length - 1 ? Decorator : null
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
    const graphs = [];

    for (var e = 0; e < graphList.length; e++) {
      graphs.push(graphList[e]);
    }

    setGraph(graphs);
  }, [showLabel, query]);

  return (
    <div className="-mt-3 overflow-hidden bg-gray-900">
      <div style={{ height: "100vh" }} className=" overflow-hidden bg-gray-900">
        <div className="flex  w-full items-baseline ">
          <div className="flex w-2/3  items-center justify-end">
            <input ref={queryRef} className="my-3 input-md rounded w-1/3 " />
            <select
              defaultValue="Type"
              ref={queryTypeRef}
              className="mx-1 select select-bordered ax-w-xs text-medium"
            >
              <option className="mb-1 text-md font-bold">Type</option>
              <option value="title">Title</option>
              <option value="nodes">Nodes</option>
              <option value="entities">Keywords</option>
              <option value="maiscore">Maiscore</option>
            </select>
            <button
              onClick={(e) => {
                setQuery(!query);
              }}
              className="mx-1 btn btn-outline bg-green-400 hover:bg-green-500"
            >
              Query
            </button>
            <div data-tip="Reset" class="tooltip  tooltip-bottom ">
            <button
              onClick={(e) => {
                queryRef.current.value = "";
                queryTypeRef.current.value = "Type";
                setQuery(!query);
              }}
              className="mx-1 btn btn-outline bg-red-300 hover:bg-red-300"
            >

              <BiReset />
             
            </button>
            </div>
          </div>

          <div className="flex w-1/4 justify-end items-baseline ">
            <div className="form-control">
              <label className="cursor-pointer label">
                <div className="flex flex-col justify-center items-center">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setShowLabel(!showLabel);
                    }}
                    checked={showLabel ? "checked" : ""}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text text-white mx-1 my-1">
                    Show Labels
                  </span>
                </div>
              </label>
            </div>

            {props.togglePage}
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
            physics: {
              stabilization: false,
            },
            configure: true,

            
          }}
        >
          {graph}
        </Network>
      </div>
    </div>
  );
}

export default Graph;
