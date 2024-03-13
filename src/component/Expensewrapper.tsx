import { useState } from "react";
import Expenseform from "./ExpenseForm";

export type Expense = {
  source: string;
  amount: number;
  date: string;
};

export function ExpenseWrapper({ setExpenses, Expenses }) {
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
      <ul>
        {Expenses.map((expense) => {
          return (
            <li>
              <p>{expense.source}</p>
              <p>{expense.amount}</p>
              <p>{expense.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
