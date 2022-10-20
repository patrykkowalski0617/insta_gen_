import React, { useRef } from "react";
import Terminal from "../../Terminal/Terminal";
import { ContentWrapper } from "./Music.styles";
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
