import GetExpenseData from "./components/Expenses/GetExpenseData";
import './App.css'
import Card from "./components/UI/Card";
import NewExpense from "./components/New Expense/NewExpense"; 

import { useState } from "react";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 95,
    date: new Date(2022, 1, 26),
  },
  {
    id: "e2",
    title: "TV",
    amount: 300,
    date: new Date(2023, 3, 26),
  },
  {
    id: "e3",
    title: "PS4",
    amount: 500,
    date: new Date(2024, 7, 26),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 95,
    date: new Date(2024, 11, 26),
  },

  {
    id: "e5",
    title: "Gaming Laptop",
    amount: 95,
    date: new Date(2025, 10, 26),
  },
  
];


function App() { 

 const [expenses , setExpenses] = useState(dummyData)

  //receiving props from child
  const addExpenseHandler = (expense) =>{

    setExpenses(prevExpense =>{

      return [expense , ...prevExpense];
    })


  } 

  return (
    <Card className="App">
      <NewExpense new onNewExpenseData =  {addExpenseHandler}/>
      <GetExpenseData expenseData = {expenses}/>
    </Card>
  );
}

export default App;