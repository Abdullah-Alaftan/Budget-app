import "./App.css";
import { useState } from "react";
import { Expense, ExpenseWrapper } from "./component/Expensewrapper";
import SavingWrapper from "./component/SavingWrapper";
import TransferAccountWrapper from "./component/TransferrAccountWrapper";
import { Income, Incomewrapper } from "./component/IncomeWrapper";

function App() {
  const [savingsTarget, setSavingTarget] = useState(0);
  const [currentSavings] = useState(0);
  const [savingsAccount, setSavingAccount] = useState(0);

  const [Incomes, setIncomes] = useState<Income[]>([]);
  const [Expenses, setExpenses] = useState<Expense[]>([]);

  const totalExpenses = Expenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );
  const totalIncomes = Incomes.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const blance = totalIncomes - totalExpenses;
  console.log("blance:", blance);

  return (
    <div className="app">
      <h1>Budget App</h1>
      <Incomewrapper Incomes={Incomes} setIncomes={setIncomes} />
      <ExpenseWrapper Expenses={Expenses} setExpenses={setExpenses} />
      <SavingWrapper
        savingsTarget={savingsTarget}
        currentSavings={currentSavings}
        setSavingTarget={setSavingTarget}
      />
      <TransferAccountWrapper
        savingsAccount={savingsAccount}
        currentSavings={currentSavings}
        setSavingAccount={setSavingAccount}
      />
    </div>
  );
}

export default App;
