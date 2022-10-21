import React from "react";
import Terminal from "../../Terminal/Terminal";
import { Content } from "./LargeCenterTxt.styles";

function LargeCenterTxt({ data }) {
  return (
    <Terminal>
      <Content style={{ fontSize: data.fontSize }}>{data.txt}</Content>
    </Terminal>
  );
}

export default LargeCenterTxt;
