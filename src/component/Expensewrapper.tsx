import { useState } from "react";
import Expenseform from "./ExpenseForm";
import { ListItems } from "./ListItems";

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

type ExpensewrapperProps = {
  Expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  handleDelete: (id: number) => void;
};

export function Expensewrapper({
  Expenses,
  setExpenses,
  handleDelete,
}: ExpensewrapperProps) {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseSource, setExpenseSource] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const handleExpenseChangeSource = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpenseSource(e.target.value);
  };

  const handleExpenseChangeAmount = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpenseAmount(e.target.value);
  };

  const handleExpenseChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseDate(e.target.value);
  };

  const handleExpenseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: Date.now(),
      source: expenseSource,
      amount: Number(expenseAmount),
      date: expenseDate,
    };
    setExpenses([...Expenses, newExpense]);
  };

  return (
    <>
      <Expenseform
        handleChangeSource={handleExpenseChangeSource}
        handleChangeAmount={handleExpenseChangeAmount}
        handleChangeDate={handleExpenseChangeDate}
        handleSubmit={handleExpenseSubmit}
      />
      <ListItems items={Expenses} handleDelete={handleDelete} />
    </>
  );
}
