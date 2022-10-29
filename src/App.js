import ExpnseItem from "./components/ExpenseItem";
import GetExpenseData from "./components/GetExpenseData";
import './App.css'

import Card from "./components/Card";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 95,
      date: new Date(2022, 10, 26),
    },
    {
      id: "e2",
      title: "TV",
      amount: 300,
      date: new Date(2022, 10, 26),
    },
    {
      id: "e3",
      title: "PS4",
      amount: 500,
      date: new Date(2022, 10, 26),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 95,
      date: new Date(2022, 10, 26),
    },
  ];

  console.log(expenses);

  return (
    <Card className="App">
      <h2>Welcome to Expense App </h2>

      <GetExpenseData
      expenseData = {expenses}
      />
    </Card>
  );
}

export default App;