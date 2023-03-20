import React  , {useState}from 'react';

import '../Expenses/ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const [selectedYear , setSelectedYear]= useState('')

    const filterHandler=(event)=>{
        
      //child to parent 'get expense data ' prop of selected filter year
        props.onChangeFilter(selectedYear);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Search by Year</label>
        <select value={selectedYear} onChange = {(e)=>setSelectedYear(e.target.value)} onClick = {filterHandler} >
          <option value=''></option>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>

          
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;