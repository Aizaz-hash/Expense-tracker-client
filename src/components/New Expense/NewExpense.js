import React, { useState }  from "react";
import './NewExpense.css';
import ExpenseForm from "../New Expense/ExpenseForm";

const NewExpense = (props) =>{

    const [isEditing , setIsEditing] = useState(false);
    //custom component to receieve props from child 'Expense Form'
const onNewExpenseEntry =(newEnteredExpenseData)=>{
    //add recieved data
    const expenseData = {

        ...newEnteredExpenseData  ,
        id : Math.random().toString(),
    }

    props.onNewExpenseData(expenseData)

    setIsEditing(false)

}

const startEditingHandler=()=>{
    setIsEditing(true)
}

const stopEditingHandler=()=>{
    setIsEditing(false)
}

    return(
        <div className="new-expense">
            {!isEditing &&<button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing  &&<ExpenseForm onNewExpenseEntry = {onNewExpenseEntry  }  onCancel = {stopEditingHandler}/>}
        </div>
    )



}; 

export default NewExpense;