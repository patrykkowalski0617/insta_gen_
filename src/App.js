import React, { useEffect, useState } from "react";
import "./App.css";
import content from "./content";
import contentExample from "./contentExample";
import Section from "./components/Section/Section";

function App() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    const input = content.filter(({ appVersion }) => appVersion[0] >= 5)[0]
      .input;

    setInput([...input]);
  }, []);

  return (
    <>
      {input.length
        ? input.map((input, i) => <Section key={i} input={input} />)
        : null}
    </>
  );
}

export default App;
