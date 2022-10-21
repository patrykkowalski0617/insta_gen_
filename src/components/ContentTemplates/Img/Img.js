import React from "react";
import { ImgWrapper } from "./Img.styles";

function Img({ data }) {
  return (
    <ImgWrapper>
      <img src={require(`./img/${data.fileName}`)}></img>
    </ImgWrapper>
  );
}

export default Img;
