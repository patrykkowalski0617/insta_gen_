import React from "react";
import { Standard, Music, Avatar } from "../ContentTemplates";
import { SectionWrapper, Id } from "./Section.styles";
import Frame from "../../components/ContentTemplates/Music/Frame";

const Section = ({ input }) => {
  const { id, contentTemplate, data } = input;
  const renderContent = (param) => {
    switch (param) {
      case "standard":
        return <Standard data={data} />;
      case "music":
        return <Music data={data} />;
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
