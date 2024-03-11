import "./App.css";
import { useState } from "react";
import { ExpenseWrapper } from "./component/Expensewrapper";
import { Incomewrapper } from "./component/Incomewrapper";
import SavingWrapper from "./component/SavingWrapper";

function App() {
  const [savingsTarget, setSavingTarget] = useState(0);
  const [currentSavings] = useState(0); 
  console.log("savingsTarget", savingsTarget);
  
  return (
    <div className="app">
      <h1>Budget App</h1>
      <Incomewrapper />
      <ExpenseWrapper />
      <SavingWrapper savingsTarget={savingsTarget} currentSavings={currentSavings} setSavingTarget={setSavingTarget}/>
    </div>
  );
}

export default App;
