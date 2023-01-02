import "./App.css";
import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();

function App() {
  return (
    <div className="App">
      <h1 className="Header">Online UUID Generator</h1>
      <p className="Content">A universally unique identifier (UUID) is a 128-bit label used for information in computer systems. When generated according to the standard methods, UUIDs are unique. </p>
      <div className="Frame">
        <div>
          {myuuid}
        </div>
        <p>
          W celu wygenerowania nowego kodu{" "}
          <a href="index.html">odśwież stronę</a>
        </p>
      </div>
    </div>
  );
}

export default App;
