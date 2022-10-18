import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import content from "./content";
import contentExample from "./contentExample";
import Section from "./components/Section/Section";
import Terminal from "./components/Terminal/Terminal";
import html2canvas from "html2canvas";

function App() {
  const [input, setInput] = useState([]);
  const inputEl = useRef(null);
  useEffect(() => {
    if (input.length) {
      console.log("inputEl", inputEl);
      html2canvas(inputEl.current).then((canvas) => {
        inputEl.current.appendChild(canvas);
      });
    }
  }, [input]);

  useEffect(() => {
    const input = content.filter(({ appVersion }) => appVersion[0] >= 5)[0]
      .input;

    setInput([...input]);
  }, []);

  return (
    <>
      {/* buidling */}
      <Section className="capture">
        <div ref={inputEl}>
          <Terminal>
            <p>..................</p>
            <p>....[]............</p>
            <p>[][][][][]........</p>
            <p>[][][][][][][]..[]</p>
            <p>[][][][][][][][][]</p>
            <p>[][][][][][][][][]</p>
          </Terminal>
        </div>
      </Section>
      {/* example */}
      {/* <article>
        <div className="inst-container capture">
          <div className="inst-txt">
            <div className="user"></div>
          </div>
        </div>
      </article> */}
    </>
  );
}

export default App;
