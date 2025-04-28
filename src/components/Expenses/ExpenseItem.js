import React from 'react';
import './ExpenseItem.css'
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
  function buttonHandler(event){
    console.log("Button clicked");
  }
  return(
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__location">{props.location}</div>
      <div>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div> 
      <button onClick={buttonHandler}>Change Title</button>
    </Card>
)
}

export default ExpenseItem;