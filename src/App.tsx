
import logo from "./logo.svg";
import "./App.css";

import { log } from "console";
import { Incomewrapper } from "./component/Incomewrapper";
import { Expensewrapper } from "./component/Expensewrapper";

function App() {
  return (
    <div className="app">
      <h1>Budget App</h1>
      <Incomewrapper />
      <Expensewrapper />
    </div>
  );
}

export default App;
