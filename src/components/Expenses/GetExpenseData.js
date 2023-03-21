import React , {useState} from 'react'
import Card from '../UI/Card';
import './ExpenseItem.css'
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';

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

    return (

          <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {/* Calling Expense Data from above components*/}

                <ExpenseList expenseItems = {FilteredArray} />
                {/* {expenseContent} */}

          </Card>)};
