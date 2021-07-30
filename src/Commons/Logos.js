import React from 'react'


function Logo(props) {
    return (
      <div class="flex justify-start">
        <div class=" p-2 avatar">
          <div class="mt-2 w-28 h-28 ">
            <img alt="Maibrain" src={props.src} />
          </div>
        </div>
      </div>
    );
  }

  export default Logo;