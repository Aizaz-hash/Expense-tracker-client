import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

import React from "react";

function ExpenseItem(props) { 
    
    return (
        <Card className="expense-item">
            <ExpenseDate mydate={
                props.date
            }/>

            <div className="expense-item__description">
                <h2>{
                    props.title
                }</h2>
                <div className="expense-item__price">$ {
                    props.amount
                } </div>
            </div>

        </Card>
    );

}

export default ExpenseItem;