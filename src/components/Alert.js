import React from "react";

function Alert(props) {
  return (
    props.alertContent.msg && <div>
      <div className={`alert alert-${props.alertContent.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertContent.type}: {props.alertContent.msg}</strong>
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}


export default Alert;
