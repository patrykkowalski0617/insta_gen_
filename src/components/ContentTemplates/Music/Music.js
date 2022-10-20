import React, { useRef } from "react";
import Terminal from "../../Terminal/Terminal";
import { ContentWrapper } from "./Music.styles";
import diagram from "./diagram";

function Music({ data }) {
  const terminalHTMLWrapper = useRef(null);
  const { title } = data;

  const lineLength = diagram[0].length;
  let lineNumber = 0;
  const increaseLineNum = () => {
    lineNumber++;
  };
  const howManyLinesInTitle = Math.ceil(title.length / lineLength);

  return (
    <div ref={terminalHTMLWrapper}>
      <Terminal>
        <ContentWrapper>
          {diagram
            .map((row) =>
              row.map((el) =>
                el === "." ? <span className="hide">{el}</span> : el
              )
            )
            .map((row, rowNumber) =>
              rowNumber > diagram.length - howManyLinesInTitle - 1 ? (
                <div key={rowNumber}>
                  {row.map((diagramEl, i) => {
                    const titleLetter = title[i + lineLength * lineNumber];
                    return (i + 1) % lineLength !== 0 ? (
                      titleLetter ? (
                        titleLetter
                      ) : (
                        diagramEl
                      )
                    ) : (
                      <>
                        {titleLetter && titleLetter !== " "
                          ? titleLetter
                          : diagramEl}
                        {increaseLineNum()}
                      </>
                    );
                  })}
                </div>
              ) : (
                <div key={rowNumber}>{row}</div>
              )
            )}
        </ContentWrapper>
      </Terminal>
    </div>
  );
}

export default Music;
