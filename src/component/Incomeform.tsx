import React from "react";
import { Button } from "./Button";

type IncomeFormProps = {
  handleChangeSource: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Incomeform({
  handleChangeSource,
  handleSubmit,
  handleChangeAmount,
  handleChangeDate,
}: IncomeFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="resourse"
        placeholder=""
        onChange={handleChangeSource}
      />
      <input
        type="text"
        name="amount"
        placeholder="how much?"
        onChange={handleChangeAmount}
      />
      <input type="Date" name="Date" onChange={handleChangeDate} />
      <Button label="add income" />
    </form>
  );
}