import React, { ChangeEvent } from "react";
type SavingWrapperProps ={
    savingsTarget: number,
    currentSavings: number, 
    setSavingTarget: (key: number) => void
}

export default function SavingWrapper({savingsTarget, currentSavings, setSavingTarget}:SavingWrapperProps) {
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const{valueAsNumber}= e.target
   
      setSavingTarget(valueAsNumber);
    }

  return (
    <div>
      <form>
        <p>Set target</p>
        <input
          type="number"
          name="resourse"
          placeholder="Add amount"
          onChange={handleChange}
        />
        <button type="reset">Reset</button>
        <p>Current savings: {currentSavings}</p> {}
        <p> Target: {savingsTarget}</p>
      </form>
    </div>
  );
}
