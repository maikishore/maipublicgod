function AlertDiv(props) {
    if (props.status === "success") {
      return (
        <div className="alert alert-success">
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            <label>{props.message}</label>
          </div>
          <div className="flex-none">
            <button
              onClick={props.closefunc}
              className="btn btn-sm btn-circle mr-2"
            >
              X
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="alert alert-error">
          <div className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              ></path>
            </svg>
            <label>{props.message}</label>
            <div className="flex-none">
              <button
                onClick={props.closefunc}
                className="btn btn-sm btn-circle mr-2"
              >
                X
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default AlertDiv;