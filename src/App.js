import "./App.css";
import content from "./content";

function App() {
  return (
    <>
      <article>
        <div className="inst-container capture">
          <div className="inst-txt">
            <div className="user">
              {console.log(
                content.filter(({ appVersion }) => appVersion[0] >= 5)
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
