import React from "react";
import Chart from "../Chart/Chart";

const Expenseschart = (props)=>{


    const chartDataPoints = [

        {label : 'Jan', value : 0 } , 
        {label : 'Feb', value : 0 } , 
        {label : 'Mar', value : 0 } , 
        {label : 'Apr', value : 0 } , 
        {label : 'May', value : 0 } , 
        {label : 'Jun', value : 0 } , 
        {label : 'Jul', value : 0 } , 
        {label : 'Aug', value : 0 } , 
        {label : 'Sep', value : 0 } , 
        {label : 'Oct', value : 0 } , 
        {label : 'Nov', value : 0 } , 
        {label : 'Dec', value : 0 } , 

    
    ];


    for (const expenses of props.expense){

        const date = expenses.date; // Assuming the date value is in the "date" property

        var converteDate = new Date(date);

        const expenseMonth = converteDate.getMonth();

        chartDataPoints[expenseMonth].value +=expenses.amount;
    };
    return(
        <Chart chartPoints = {chartDataPoints}/>

    )
};

export default Expenseschart