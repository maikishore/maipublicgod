import React from "react";
import Rating from "../rating";


export default function PopUpModal(props) {
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold text-center">
                  Great ! Keep Learning More.
                </h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <h1 className="my-4 text-blueGray-500 text-2xl leading-relaxed">
                  How well did you memorize ?
                </h1>

              {props.rating}
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="btn btn-ghost bg-red-300 hover:bg-red-400  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={props.libraryfunc}
                >
                  Mailibary
                </button>
                <button
                  className="btn btn-ghost text-white bg-primary hover:bg-primary-focus  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={props.submitfunc}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      )
    </>
  );
}
