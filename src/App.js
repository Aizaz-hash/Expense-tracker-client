import GetExpenseData from "./components/Expenses/GetExpenseData";
import './App.css'
import Card from "./components/UI/Card";
import NewExpense from "./components/New Expense/NewExpense"; 
import axios from "axios";

import { useState , useEffect} from "react";




function App() { 

  const [expenses , setExpenses] = useState([])


  useEffect(() => {
    fetchData();
  }, onloadstart);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://exptracapi.azurewebsites.net/api/ExpenseTracker');

      // console.log(response.data.value)
      setExpenses(response.data.value); // Assuming the response is an array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //receiving props from child
  const addExpenseHandler = (expense) =>{

    setExpenses(prevExpense =>{

      return [expense , ...prevExpense];
    })


  } 

  return (
    <Card className="App">
      <NewExpense onNewExpenseData =  {addExpenseHandler}/>

      {/* seeding expense data to list and filter rendiring  */}
      <GetExpenseData expenseData = {expenses}/>
    </Card>
  );
}

export default App;