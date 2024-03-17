import "./App.css";
import { useState } from "react";
import { Expense, ExpenseWrapper } from "./component/Expensewrapper";
import SavingWrapper from "./component/SavingWrapper";
import { Income, Incomewrapper } from "./component/Incomewrapper";
import { TransferAccountWrapper } from "./component/TransferAccountWrapper";

function App() {
  const [savingsTarget, setSavingTarget] = useState(0);
  const [currentSavings, setCurrentSaving] = useState(0);
  const [savingsAccount, setSavingAccount] = useState(0);
  const [transferAccount, setTransferAccount] = useState(0);

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

  const handleTransferAmount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentSaving((prev) => prev + transferAccount);
  };

  const balance = totalIncomes - totalExpenses - currentSavings;

  const progress =
    savingsTarget > 0 ? (currentSavings / savingsTarget) * 100 : 0;
  console.log("progress:", progress + "%");

  return (
    <div className="app">
      <h1 className="header">Budget App</h1>
      <Incomewrapper Incomes={Incomes} setIncomes={setIncomes} />
      <ExpenseWrapper Expenses={Expenses} setExpenses={setExpenses} />
      <SavingWrapper
        savingsTarget={savingsTarget}
        currentSavings={currentSavings}
        setSavingTarget={setSavingTarget}
        setCurrentSaving={setCurrentSaving}
        progress={progress}
      />
      <TransferAccountWrapper
        setTransferAccount={setTransferAccount}
        savingsAccount={savingsAccount}
        currentSavings={currentSavings}
        setSavingAccount={setSavingAccount}
        balance={balance}
        handleSubmit={handleTransferAmount}
      />
    </div>
  );
}

export default App;
