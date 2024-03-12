import React, { ChangeEvent } from "react";
type AccountWrapperProps = {
  savingsAccount: number;
  currentSavings: number;
  setSavingAccount: (key: number) => void;
};

export default function AccountWrapper({
  savingsAccount,
  currentSavings,
  setSavingAccount,
}: AccountWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;

    setSavingAccount(valueAsNumber);
  };
  
  return (
    <div>
      <form>
        <p>current balance {currentSavings}</p> {}
        <p>Transfer to Saving Account</p>
        <input
          type="number"
          name="resourse"
          placeholder="Add amount"
          onChange={handleChange}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}
