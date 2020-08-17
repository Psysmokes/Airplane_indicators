import React from "react";
import "./App.css";

const rowStyle = {
  margin: "2022 23",
  display: "flex",
  justifyContent: "space-between",
};
function Compass(props) {
  const { deg } = props;
    const res=deg+'deg'
    console.log(deg);
  return (
    <div>
      <div className="circle" style={{rotate:res}}>
        <h4 style={{ left: 93, position: "relative" }}>0</h4>
        <h4 style={{ left: 15, top: 33, position: "relative" }}>270</h4>
        <h4 style={{ left: 150, top: -10, position: "relative" }}>180</h4>
        <h4 style={{ left: 93, top: 25, position: "relative"}}>90</h4>
      </div>
      <p className="arrow">&#8593;</p>
    </div>
  );
}

export default Compass;
