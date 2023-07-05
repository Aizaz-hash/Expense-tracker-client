import React , {useState} from 'react'
import Card from '../UI/Card';
import './ExpenseItem.css'
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import Expenseschart from './Expenseschart';

export default function GetExpenseData(props) {

  const myexpenses = props.expenseData;
  const [filteredYear, setFilteredYear] = useState('');
  
    const FilteredArray = myexpenses.filter(filterExpenses =>{
     return filterExpenses.date.substring(0, 4) ===filteredYear;
  })    


//child to parent props 
const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
};

  return (

        <Card className='expenses'>
              <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />

              {/* Calling Expense Data from above components*/}
              <Expenseschart expense = {FilteredArray} />
              <ExpenseList expenseItems = {FilteredArray} />
              {/* {expenseContent} */}

        </Card>)};