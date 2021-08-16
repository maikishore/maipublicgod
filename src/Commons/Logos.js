import React from 'react'


function Logo(props) {
    return (
      <div className="flex justify-start">
        <div className=" p-2 avatar">
          <div className="mt-2 w-28 h-28 ">
            <img alt="Maibrain" src={props.src} />
          </div>
        </div>
      </div>
    );
  }

  export default Logo;