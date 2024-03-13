import { useState } from "react";
import Incomeform from "./Incomeform";

export type Income = {
  source: string;
  amount: number;
  date: string;
};
export function Incomewrapper({ setIncomes, Incomes }) {
  console.log("Incomes", { Incomes }, "setIncomes", { setIncomes });

  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  console.log("date:", date);

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
  return (
    <>
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
    </>
  );
}
