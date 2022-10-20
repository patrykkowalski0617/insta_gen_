import React from "react";
import { ImgWrapper } from "./Img.styles";

function Img({ data }) {
  return (
    <ImgWrapper>
      <img src={require(`./img/${data.no}_schody1.jpg`)}></img>
    </ImgWrapper>
  );
}

export default Img;
