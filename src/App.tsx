import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Incomeform from "./component/Incomeform";
import { log } from "console";

type Income = {
  source: string;
  amount: number;
  date: string;
};

function App() {
  const [Incomes, setIncomes] = useState<Income[]>([]);
  console.log("Incomes", "setIncomes");

  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");

  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("chaning...", e.target.value);

    setSource(e.target.value);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newIncome: Income = {
      source: source,
      amount: Number(amount),
      date: date,
    };
    setIncomes([...Incomes, newIncome]);
  };
  console.log(Incomes, amount);

  return (
    <div className="app">
      <h1>savings</h1>
      <Incomeform
        handleChangeSource={handleChangeSource}
        handleChangeAmount={handleChangeAmount}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />
      <ul>
        {Incomes.map((income) => {
          return (
            <li>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
