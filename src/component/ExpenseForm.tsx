import React from "react";
import { Button } from "./Button";

type ExpenseFormProps = {
  handleChangeSource: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Expenseform({
  handleChangeSource,
  handleChangeAmount,
  handleChangeDate,
  handleSubmit,
}: ExpenseFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="expenseSource"
        placeholder=" what is the expense?"
        onChange={handleChangeSource}
      />
      <input
        type="text"
        name="expenseAmount"
        placeholder="Expense Amount"
        onChange={handleChangeAmount}
      />
      <input type="Date" name="expenseDate" onChange={handleChangeDate} />
      <Button label="add expense" />
    </form>
  );
}
