import React from "react";
import Terminal from "../../Terminal/Terminal";
import { Content } from "./CodeLyric.styles";

function CodeLyric({ data }) {
  const { fontSize, content } = data;
  return (
    <Terminal>
      <Content style={{ fontSize: fontSize }}>user_msg: {content}</Content>
    </Terminal>
  );
}

export default CodeLyric;
