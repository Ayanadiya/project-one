import React, {useState} from 'react';
import './ExpenseItem.css'
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
  const [title, setTitle]=useState(props.title)
  const buttonHandler= ()=>{
    setTitle("New Title");
  }
  return(
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__location">{props.location}</div>
      <div>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div> 
      <button onClick={buttonHandler}>Change Title</button>
    </Card>
)
}

export default ExpenseItem;