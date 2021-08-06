import "./app.css";
import { useState } from "react";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const { email, name } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const setNameEmail = (e) => {
    e.preventDefault();
    setData(input);
    setInput({
      name: "",
      email: "",
    });
  };
  const toogleMode = () => {
    setIsDarkModeActive(!isDarkModeActive);
  };

  return (
    <div
      className={isDarkModeActive ? "appContainer darkMode" : "appContainer"}
    >
      <div className="mainContainer">
        <div className="headerApp">
          <div>
            <h1>Dark Mode Challenge</h1>
            <div className="userData">
              {name && (
                <p
                  className={
                    isDarkModeActive ? "userData userDataDark" : "userData"
                  }
                >
                  Writed by: <b>{name}</b>
                </p>
              )}
              {email && (
                <p
                  className={
                    isDarkModeActive ? "userData userDataDark" : "userData"
                  }
                >
                  Email: <b>{email}</b>
                </p>
              )}
            </div>
          </div>
          {isDarkModeActive ? (
            <img
              src={"../assets/sun.png"}
              className="icon sun"
              onClick={toogleMode}
            />
          ) : (
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
        <form className="inputsContainer" onSubmit={setNameEmail}>
          <input
            placeholder="name"
            className={
              isDarkModeActive ? "input inputDark" : "input inputLight"
            }
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <input
            placeholder="email"
            className={
              isDarkModeActive ? "input inputDark" : "input inputLight"
            }
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          <div className="btnContainer">
            <button className="btn btnSave" type="submit">
              save
            </button>
            <button className="btn btnExit">exit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
