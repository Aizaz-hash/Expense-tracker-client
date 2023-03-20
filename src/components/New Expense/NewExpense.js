import React from "react";
import './NewExpense.css';
import ExpenseForm from "../New Expense/ExpenseForm";

const NewExpense = (props) =>{
    //custom component to receieve props from child 'Expense Form'
const onNewExpenseEntry =(newEnteredExpenseData)=>{
    //add recieved data
    const expenseData = {

        ...newEnteredExpenseData  ,
        id : Math.random().toString(),
    }

    props.onNewExpenseData(expenseData)

}

    return(
        <div className="new-expense">
            <ExpenseForm onNewExpenseEntry = {onNewExpenseEntry  } />
        </div>
    )



}; 

export default NewExpense;