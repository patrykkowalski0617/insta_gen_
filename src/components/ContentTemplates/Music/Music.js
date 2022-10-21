import React from "react";
import diagram from "./diagram";
import Frame from "./Frame";
import { LinkToGifPage } from "./Music.styles";

function Music({ data }) {
  return (
    <>
      <LinkToGifPage
        target={"_blank"}
        href="https://ezgif.com/maker/ezgif-2-f7575936-gif"
      >
        GIF
      </LinkToGifPage>
      {diagram.map((diagramEl) => (
        <Frame data={data} diagram={diagramEl}></Frame>
      ))}
    </>
  );
}

export default Music;
