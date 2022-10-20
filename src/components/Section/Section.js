import React from "react";
import { Standard, Music, Avatar, Img } from "../ContentTemplates";
import { SectionWrapper, Id } from "./Section.styles";

const Section = ({ input }) => {
  const { id, contentTemplate, data } = input;
  const renderContent = (param) => {
    switch (param) {
      case "standard":
        return <Standard data={data} />;
      case "music":
        return <Music data={data} />;
      case "img":
        return <Img data={data} />;
      case "avatar":
        return <Avatar />;
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
