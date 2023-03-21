import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpenseList = (props)=>{

     //cleanest conditional JSK components inside js code
  if (props.expenseItems.length===0)
  {
    return (<h2 className="expenses-list__fallback">Found No Expense !</h2>)
  }


  return ( 

    <ul className="expenses-list">

        { props.expenseItems.map(myexpense => 
      <ExpenseItem  
      key = {myexpense.id}
      title={myexpense.title} 
      amount={myexpense.amount} 
      date={myexpense.date}/> 
  )}
    </ul>
  )


};


export default ExpenseList