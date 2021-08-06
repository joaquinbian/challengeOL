import "./app.css";
import { FiMoon } from "react-icons/fi";
import { RiSunFill } from "react-icons/ri";
import { useState } from "react";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const toogleMode = () => {
    setIsDarkModeActive(!isDarkModeActive);
  };
  return (
    <div
      className={isDarkModeActive ? "appContainer darkMode" : "appContainer"}
    >
      <div className="mainContainer">
        <div className="headerApp">
          <h1>Dark Mode Challenge</h1>
          {isDarkModeActive ? (
            // <RiSunFill className="icon sun" onClick={toogleMode} />
            <img
              src={"../assets/sun.png"}
              className="icon sun"
              onClick={toogleMode}
            />
          ) : (
            // <FiMoon className="icon moon" onClick={toogleMode} />
            <img
              src={"../assets/moon.png"}
              className="icon"
              onClick={toogleMode}
            />
          )}
        </div>
        <div className="contentApp">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            maximus ligula lectus, eu malesuada dui tristique id. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Quisque in
            porttitor mauris. Praesent ultrices lacus eu libero ullamcorper, eu
            mattis nisi laoreet. Sed id lorem rutrum ex accumsan gravida.
            Pellentesque congue arcu dolor, quis vehicula lectus maximus sed.
            Curabitur malesuada malesuada mi, non sodales quam bibendum
            ultricies. Ut ultrices neque malesuada sapien malesuada vulputate.
            Sed consectetur sit amet ex ut iaculis.
          </p>

          <p>
            Vestibulum hendrerit purus at tincidunt pretium. Proin malesuada
            eleifend neque, sit amet pharetra justo iaculis et. Nunc et
            vulputate ipsum. Vestibulum arcu enim, lobortis vitae nunc non,
            vestibulum commodo est. Fusce viverra justo sed eros placerat,
            venenatis aliquam magna cursus. Nullam a ligula quis sapien blandit
            finibus non et tellus. Aliquam finibus magna ligula, vel laoreet
            mauris condimentum in. Donec facilisis, erat ac congue tempor,
            turpis erat gravida nisl, nec malesuada massa augue quis nibh.
          </p>
        </div>
        <div className="inputsContainer">
          <input
            placeholder="name"
            className={
              isDarkModeActive ? "input inputDark" : "input inputLight"
            }
          />
          <input
            placeholder="email"
            className={
              isDarkModeActive ? "input inputDark" : "input inputLight"
            }
          />
          <div className="btnContainer">
            <button className="btn btnSave">save</button>
            <button className="btn btnExit">exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
