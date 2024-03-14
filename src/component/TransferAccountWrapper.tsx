import React, { ChangeEvent } from "react";

type TransferAccountWrapperProps = {
  setTransferAccount: React.Dispatch<React.SetStateAction<number>>;
  balance: number;
  savingsAccount: number;
  currentSavings: number;
  setSavingAccount: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function TransferAccountWrapper({
  setTransferAccount,
  balance,
  savingsAccount,
  currentSavings,
  setSavingAccount,
  handleSubmit,
}: TransferAccountWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setTransferAccount(valueAsNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Transfer to Saving Account</p>
        <p>current balance {balance}</p>
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
