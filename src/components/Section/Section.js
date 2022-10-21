import React from "react";
import {
  Standard,
  Music,
  Avatar,
  Img,
  LargeCenterTxt,
  CodeLyric,
} from "../ContentTemplates";
import { SectionWrapper, Id } from "./Section.styles";

const Section = ({ input }) => {
  const { id, contentTemplate, data } = input;
  const renderContent = (contentTemplate) => {
    switch (contentTemplate) {
      case "code-lyric":
        return <CodeLyric data={data} />;
      case "standard":
        return <Standard data={data} />;
      case "music":
        return <Music data={data} />;
      case "img":
        return <Img data={data} />;
      case "avatar":
        return <Avatar />;
      case "LargeCenterTxt":
        return <LargeCenterTxt data={data} />;
      case "snace_":
        break;
      default:
        return null;
    }
  };
  return (
    <SectionWrapper>
      <Id>{String(id).padStart(3, 0)}</Id>
      {renderContent(contentTemplate)}
    </SectionWrapper>
  );
};

export default Section;
