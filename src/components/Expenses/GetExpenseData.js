import React , {useState} from 'react'
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem'
import './ExpenseItem.css'
import ExpensesFilter from './ExpenseFilter';

export default function GetExpenseData(props) {

    const myexpenses = props.expenseData;
    const [filteredYear, setFilteredYear] = useState('');
    



    //filtering array according to year
    const FilteredArray = myexpenses.filter(filterExpenses =>{
     return filterExpenses.date.getFullYear().toString()===filteredYear;
  })    



  //child to parent props 
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };



  //cleanest conditional JSK components inside js code
  let expenseContent  = <p>No Expenses Found !</p>;

  if (FilteredArray.length>0)
  {
    expenseContent =  FilteredArray.map(myexpense => 
      <ExpenseItem  
      key = {myexpense.id}
      title={myexpense.title} 
      amount={myexpense.amount} 
      date={myexpense.date}/> 
  )

  }


    return (

          <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {/* Calling Expense Data from above components*/}
                {expenseContent}

          </Card>)};

