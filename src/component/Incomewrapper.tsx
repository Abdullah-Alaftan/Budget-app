import React, { useState } from "react";
import Incomeform from "./Incomeform";
import { ListItems } from "./ListItems";

export type Income = {
  id: number;

  source: string;
  amount: number;
  date: string;
};

type IncomewrapperProps = {
  setIncomes: React.Dispatch<React.SetStateAction<Income[]>>;
  Incomes: Income[];
  handleDelete: (id: number) => void;
};

export function Incomewrapper({
  setIncomes,
  Incomes,
  handleDelete,
}: IncomewrapperProps) {
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
      id: Date.now(),
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
      <ListItems items={Incomes} handleDelete={handleDelete} />
    </>
  );
}
