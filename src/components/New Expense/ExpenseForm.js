import React , {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props)=>
{

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    
//title hadnler
    const titleChangeHandler = (event) =>{

        setEnteredTitle(event.target.value)
    }

    //amount handler
    const amountChangeHandler = (event) =>{

        setEnteredAmount(event.target.value)

    }
//date handler
    
    const dateChangeHandler = (event) =>{

        setEnteredDate(event.target.value)

    }

    //form submission
    const submitHandler = (event)=>{

        event.preventDefault();

       const  expenseData = {
            title : enteredTitle , 
            amount :  +enteredAmount ,
            date :  new Date(enteredDate) 
        }

        //child to parent props
        props.onNewExpenseEntry(expenseData);
    };



    //custom component
    return(

            <form onSubmit={submitHandler} >

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label >Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
                    </div>


                    <div className="new-expense__control">
                        <label >Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}></input>
                    </div>


                    <div className="new-expense__control">
                        <label >Date</label>
                        <input type="date" min = "2023-01-01" max="2026-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
                    </div>
                </div> 

                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>

            </form>
    )


}

export default ExpenseForm;