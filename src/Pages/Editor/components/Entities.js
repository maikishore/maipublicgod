import React from 'react'

function Entities(props) {
 
    const ents = props.entityList.map((each, index) => {
      return (
        <div
          id={index}
          value={each}
          key={index}
          onClick={props.entityFunc}
          className="mx-1 p-1 badge badge-primary cursor-pointer"
        
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 mr-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          {each['label']}
        </div>
      );
    });
  
    return <>{ents}</>;
  }

  export default Entities;
