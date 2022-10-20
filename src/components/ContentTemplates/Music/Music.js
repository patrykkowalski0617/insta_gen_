import React from "react";
import diagram from "./diagram";
import Frame from "./Frame";

function Music({ data }) {
  return (
    <>
      {diagram.map((diagramEl) => (
        <Frame data={data} diagram={diagramEl}></Frame>
      ))}
    </>
  );
}

export default Music;
