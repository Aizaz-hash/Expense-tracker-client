import React from 'react'
import Card from './Card';
import ExpenseItem from './ExpenseItem'
import './ExpenseItem.css'

export default function GetExpenseData(props) {

    const myexpenses = props.expenseData;
    return (

        <Card className='expenses'>
            <ExpenseItem title={
                     myexpenses[0].title
                }
                amount={
                     myexpenses[0].amount
                }
                date={
                     myexpenses[0].date
            }></ExpenseItem>

            <ExpenseItem title={
                     myexpenses[1].title
                }
                amount={
                     myexpenses[1].amount
                }
                date={
                     myexpenses[1].date
            }></ExpenseItem>

            <ExpenseItem title={
                     myexpenses[2].title
                }
                amount={
                     myexpenses[2].amount
                }
                date={
                     myexpenses[2].date
            }></ExpenseItem>

            <ExpenseItem title={
                     myexpenses[3].title
                }
                amount={
                     myexpenses[3].amount
                }
                date={
                     myexpenses[3].date
            }></ExpenseItem>
        </Card>


    )
}
