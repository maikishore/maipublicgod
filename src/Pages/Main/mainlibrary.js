import React from "react";
import { CgStack } from "react-icons/cg";
import { MdAdd, MdVideoLibrary, MdWebAsset } from "react-icons/md";

import { FiRefreshCcw } from "react-icons/fi";
import { FaStickyNote } from "react-icons/fa";
import MenuCard from "./components/menucard";
import SelectCard from "./components/selectcard";
import Navbar from "../../Commons/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import Graph from "../Graph/graph";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../../GlobalContexts/authcontext";
import LoadingDiv from "../../Commons/LoadingDiv";
import { Truncate } from "../../Commons/Truncate";

export default function MainLibrary(props) {
  const [typee, settypee] = React.useState("ALL");
  const [filterData, setFilterData] = React.useState([]);
  const [addToggle, setaddToggle] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [graphToggle, setGraphToggle] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [deleteToggle, setDeleteToggle] = React.useState(false);
  const history = useHistory();

  const webUrlRef = React.useRef();

  const { currentUser } = useAuth();

  const filterFunc = (data, matchtypee) => {
    var k = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i]["type"] === matchtypee) {
        k.push(data[i]);
      }
    }

    return k;
  };

  React.useEffect(() => {
    setLoading(true);
    const f = async () => {
      const z = await getData(currentUser.uid);
      setData(z["data"]);
      setFilterData(z["data"]);
      setLoading(false);
    };

    f();
    return () => {};
  }, [deleteToggle]);

  React.useEffect(() => {
    const d = data.map((item) => item);

    switch (typee) {
      case "ALL":
        setFilterData([...data]);

        break;

      case "WEB":
        setFilterData(filterFunc(data, "WEB"));

        break;
      case "VIDEO":
        setFilterData(filterFunc(d, "VIDEO"));
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
        history.push("/videonote/" + uuidv4());

        break;

      case "BOOKS":
        break;

      case "NOTES":
        const urlid = uuidv4();
        history.push("/note/" + urlid);
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
        key={index}
        title={each["title"].length===0?"No Title":Truncate(each["title"].split("-")[0], 24)}
        timetoread={each["timetoread"]}
        nodes={each["nodes"]}
        maiscore={each["maiscore"]}
        imgsrc={each["thumbnailimage"][0]}
        type={each["type"]}
        memorizeClick={(e) => {
          history.push("quiz/" + each["_id"]);
        }}
        openClick={(e) => {
          if (each["type"] === "WEB") {
            window.open(each["source"], "_blank");
          }
          if (each["type"] === "NOTES") {
            history.push("readnote/" + each["_id"]);
          }

          if (each["type"] === "VIDEO") {
            history.push("readvideonote/" + each["_id"]);
          }
        }}
        deleteClick={async (e) => {
          await deleteDoc(each["_id"]);
          setDeleteToggle(!deleteToggle);
          settypee("ALL");
          setLoading(true);
        }}
      />
    );
  });

  const pageshift = (
    <div className="flex flex-row items-baseline justify-center">
      <div className="form-control flex ">
        <label className="cursor-pointer">
          <div className="flex flex-col justify-center items-center">
            <input
              type="checkbox"
              checked={graphToggle ? "checked" : ""}
              className="toggle toggle-secondary"
              onChange={() => {
                setGraphToggle(!graphToggle);
              }}
            />
            <span className="label-text px-2 font-bold text-lg text-yellow-500 ">
              {graphToggle ? "Mailibrary" : "Maigraph"}
            </span>
          </div>
        </label>
      </div>
      {!graphToggle?  <div data-tip="Refresh" className="tooltip  tooltip-bottom">
        <div className="flex flex-col ">
          <div
            className="btn btn-ghost"
            onClick={(e) => {
              setDeleteToggle(!deleteToggle);
            }}
          >
            <FiRefreshCcw className="text-lg" />
          </div>
        </div>
      </div>:null}
    
    </div>
  );
  return (
    <div>
      <Navbar />

      {graphToggle ? (
        <Graph togglePage={pageshift} data={data} />
      ) : (
        <div>
          <div></div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                  {/*content*/}

                  <div className="card w-full h-40 shadow-lg bg-white">
                    <div className="mt-4 flex justify-center items-center">
                      <div className="form-control">
                        <input
                          ref={webUrlRef}
                          type="text"
                          placeholder="paste url here"
                          className="input w-96 input-lg input-bordered"
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

                    <div className="alert alert-info">
                      <div className="flex-1 text-center mt-1 justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 mx-2 stroke-current"
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
            <div className="flex justify-end mr-2">{pageshift}</div>

            <div className="flex flex-wrap justify-center gap-8 items-center flex-row text-center">
              <SelectCard
                clickFunc={(e) => {
                  settypee("ALL");
                }}
                icon={<CgStack />}
                title="ALL"
                classNamees={typee === "ALL" ? "bg-gray-300" : "bg-white"}
              />

              <SelectCard
                clickFunc={(e) => {
                  settypee("WEB");
                }}
                icon={<MdWebAsset className="text-blue-300" />}
                title="Web"
                classNamees={typee === "WEB" ? "bg-gray-300" : "bg-white"}
              />

              <SelectCard
                clickFunc={(e) => {
                  settypee("VIDEO");
                }}
                icon={<MdVideoLibrary className="text-red-300" />}
                title="Video"
                classNamees={typee === "VIDEO" ? "bg-gray-300" : "bg-white"}
              />

              <SelectCard
                clickFunc={(e) => {
                  settypee("NOTES");
                }}
                icon={<FaStickyNote className="text-yellow-300" />}
                title="Note"
                classNamees={typee === "NOTES" ? "bg-gray-300" : "bg-white"}
              />
              <SelectCard
                clickFunc={(e) => {
                  setaddToggle(true);
                }}
                icon={<MdAdd className="text-blue-800" />}
                title="ADD"
              />
            </div>

            <div className="  overflow-y-auto m-6 flex flex-wrap h-screen  justify-start">
              {loading ? (
                <div className="flex w-full    items-center justify-center">
                  <LoadingDiv />
                </div>
              ) : (
                contentcards
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const deleteDoc = async (doc_id) => {
  const response = await fetch(process.env.REACT_APP_MB_URL + "/deletedoc", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ doc_id: doc_id }), // body data type must match "Content-Type" header
  });

  return response.json();
};

const getData = async (user_id) => {
  const response = await fetch(process.env.REACT_APP_MB_URL + "/getdata", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ user_id: user_id }), // body data type must match "Content-Type" header
  });

  return response.json();
};
