import React from "react";
import "./App.css";

function Height(props) {
  const { height } = props;
  return (
    <div>
      <div className="reactangle">
        3000
        <br></br>
        <br></br>
        <br></br>
        2000
        <br></br>
        <br></br>
        <br></br>
        1000
        <br></br>
        <br></br>
        <br></br>0
      </div>
      <div className="height" style={{ top: 200 - (height/16)  }}></div>
    </div>
  );
}

export default Height;
