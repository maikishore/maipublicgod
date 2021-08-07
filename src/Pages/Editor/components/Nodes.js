import React from 'react'

function Nodes(props) {
  
    
  
    
  
  
    return (
      <div className="flex justify-start items-center gap-2 bg-white-400">
        <div className="mx-2 text-sm breadcrumbs">
          <ul>{props.nlists}</ul>
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
                  ref={props.nodeRef}
                  type="text"
                  placeholder="Node Title"
                  className="mb-1 input input-bordered"
                />
              </div>
              <button
                onClick={props.nodeCheckFunc}
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

  export default Nodes;