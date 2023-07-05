import React , {useState} from "react";
import './ExpenseForm.css'

import axios from "axios";
import App from "../../App";

const ExpenseForm = (props)=>
{

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');
    const [postFlag , setpostFlag] = useState(true);

    
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
    const submitHandler = (event)=>{

        event.preventDefault();

        if (postFlag === true)

        {
            axios({
                method: 'post',
                url: 'https://exptracapi.azurewebsites.net/api/ExpenseTracker',
                data: {
                  title: enteredTitle,
                  amount : enteredAmount,
                  date : new Date(enteredDate)
                }
              })
    
              setpostFlag(false)
        }

        else
        {
            <App></App>
        }


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
                        <input type="datetime-local" min = "2023-01-01" max="2026-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
                    </div>
                </div> 

                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}   className="new-expense__actions_cancel">Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
                

            </form>
    )


}

export default ExpenseForm;