import GetExpenseData from "./components/Expenses/GetExpenseData";
import './App.css'
import Card from "./components/UI/Card";
import NewExpense from "./components/New Expense/NewExpense";
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



  //receiving props from child
  const addExpenseHandler = (expense) =>{

    console.log(expenses);
  }

  return (
    <Card className="App">
      <NewExpense new onNewExpenseData =  {addExpenseHandler}/>
      <GetExpenseData expenseData = {expenses}/>
    </Card>
  );
}

export default App;