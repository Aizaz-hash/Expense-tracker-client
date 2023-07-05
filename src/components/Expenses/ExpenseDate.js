import React from 'react'
import './ExpenseDate.css'
import Card from '../UI/Card';

export default function ExpenseDate(props) {

  const day = props.mydate; // Assuming the date value is in the "date" property
  var convertedDay = new Date(day);
  convertedDay = convertedDay.toLocaleString('en-US' , {day:'2-digit'});

  const month = props.mydate; // Assuming the date value is in the "date" property
  var convertedmonth = new Date(month);
  convertedmonth= convertedmonth.toLocaleString('en-US' , {month:'short'});

  const year = props.mydate; // Assuming the date value is in the "date" property
  var convertedyear= new Date(year);
  convertedyear = convertedyear.toLocaleString('en-US' , {year:'numeric'} );


  return (
    <Card className='expense-date'>
    <div className='expense-date__day'>{convertedDay}</div>
      <div className='expense-date__month' >{convertedmonth}</div>
      <div className='expense-date__year'>{convertedyear}</div>

    </Card>  )
}
