import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

import React from "react";

function ExpenseItem(props) { 

    const dateValue = props.date; // Assuming the date value is in the "date" property
    const converted = new Date(dateValue);
    
    return (

        <li>
             <Card className="expense-item">
            <ExpenseDate mydate={ converted }/>

            <div className="expense-item__description">
                <h2>{
                    props.title
                }</h2>
                <div className="expense-item__price">$ {
                    props.amount
                } </div>
            </div>

        </Card>

        </li>
           );

}

export default ExpenseItem;
