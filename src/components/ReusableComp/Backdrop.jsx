import React from "react";

export default function backdrop(props) {
  return props.show ? (
    <div
      onClick={props.clicked}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: 100,
        left: 0,
        top: 0,
        backgroundColor: "transparent",
      }}
    ></div>
  ) : null;
}
