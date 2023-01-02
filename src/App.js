import "./App.css";
import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();

function App() {
  return (
    <div className="App">
      <div>
      {myuuid}
      </div>
      <p>
        W celu wygenerowania nowego kodu <a href="index.html">odśwież stronę</a>
      </p>
    </div>
  );
}

export default App;
