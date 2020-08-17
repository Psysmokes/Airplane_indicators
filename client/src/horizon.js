import React from "react";
import "./App.css";

function Horizon(props) {
  const { adi } = props;
  console.log(adi);

  if (adi == 100) {
    var blue = " 100%";
    var green = " 50%";
  } else if (adi == -100) {
    var blue = " 0%";
    var green = " 00%";
  } else if (adi == 0) {
    var blue = " 50%";
    var green = " 50%";
  }
 

  return (
    <div>
      <div
        className="circle"
        style={{
          right: 4,
          background:
            "linear-gradient(to top, blue" + blue + ", green" + green + ")",
        }}
      ></div>
    </div>
  );
}

export default Horizon;
