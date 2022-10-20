import React, { useEffect, useRef } from "react";
import { TerminalWrapper } from "./Terminal.styles";
import html2canvas from "html2canvas";

const Terminal = ({ contentTemplate, data, children }) => {
  const terminalHTMLWrapper = useRef(null);

  useEffect(() => {
    // puting canvas fn is temporary work around for this:
    // https://stackoverflow.com/questions/72238175/useeffect-is-running-twice-on-mount-in-react
    return () => {
      // injectNbsp();
      // adjustFontSize();
      const canvasInput = terminalHTMLWrapper.current.querySelector("div");
      html2canvas(canvasInput).then((canvas) => {
        terminalHTMLWrapper.current.appendChild(canvas);
      });
      // canvasInput.remove();
    };
  }, [terminalHTMLWrapper]);

  return (
    <div ref={terminalHTMLWrapper}>
      <TerminalWrapper>
       {children}
      </TerminalWrapper>
    </div>
  );
};

export default Terminal;
