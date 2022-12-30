import "./App.css";
import { v4 as uuidv4 } from "uuid";

let myuuid = uuidv4();

function App() {
  return (
      <div className="App">
        {myuuid},
        <a href="index.html">Odśwież stronę</a>
      </div>
  );
}

export default App;
