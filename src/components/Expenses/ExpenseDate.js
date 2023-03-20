import React from 'react'
import './ExpenseDate.css'
import Card from '../UI/Card';

export default function ExpenseDate(props) {

   const day = props.mydate.toLocaleString('en-US' , {day:'2-digit'});
    const month = props.mydate.toLocaleString('en-US' , {month:'short'});
    const year = props.mydate.toLocaleString('en-US' , {year:'numeric'} );
  return (
    <Card className='expense-date'>
    <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month' >{month}</div>
      <div className='expense-date__year'>{year}</div>

    </Card>  )
}
