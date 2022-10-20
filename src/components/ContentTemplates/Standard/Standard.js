import React, { useEffect, useRef } from "react";
import Terminal from "../../Terminal/Terminal";
import { ContentWrapper } from "./Standard.styles";

function Standard({ data }) {
  const { txt } = data;
  const terminalHTMLWrapper = useRef(null);
  const injectNbsp = function () {
    const howManyLetters = 1;
    const elements = terminalHTMLWrapper.current.querySelectorAll(
      " *:not(script, style, .skip-nbsp)"
    );

    const elementsWithText = Array.from(elements).filter(
      (el) =>
        el.firstChild &&
        el.firstChild.textContent.trim().length &&
        !el.firstChild.innerHTML
    );

    elementsWithText.forEach((el) => {
      const text = el.innerHTML.trim().replace(/\r?\n|\r/g, "");
      const textArr = text.split(" ").filter(function (item) {
        return item.length > 0;
      });
      const textReduced = textArr.reduce((t, i, a) => {
        if (textArr[a - 1].length <= howManyLetters) {
          return t + "&nbsp;" + i;
        }
        return t + " " + i;
      });

      el.innerHTML = textReduced;
    });
  };

  useEffect(() => {
    // make text contain
    const adjustFontSize = () => {
      const contentWrapper =
        terminalHTMLWrapper.current.querySelector(".content-wrapper");
      if (!contentWrapper) return;
      let minFontSize = 15;
      let maxFontSize = 50;
      while (minFontSize < maxFontSize) {
        if (contentWrapper.offsetHeight < 315) {
          contentWrapper.style.fontSize = minFontSize + "px";
        }
        minFontSize++;
      }
    };
    adjustFontSize();
    injectNbsp();
  }, []);

  return (
    <div ref={terminalHTMLWrapper}>
      <Terminal>
        <ContentWrapper className="content-wrapper">
          {txt.map(({ content, type }, i) => (
            <p key={i}>
              {type === "user"
                ? "user_msg: "
                : type === "frnd"
                ? "frnd_msg: "
                : console.error("no msg type in contentTemplate standard")}
              {content}
            </p>
          ))}
        </ContentWrapper>
      </Terminal>
    </div>
  );
}

export default Standard;
