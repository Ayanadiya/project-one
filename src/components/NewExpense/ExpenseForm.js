import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [isAdditing, setIsAdditing]=useState(false);

  const titleChangeHandler = (event) => {
   setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount]=useState("");

  const amountChangeHandler=(event)=>{
   setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate]=useState("");

  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
  }

  const formSubmitHandler=(event)=>{
    event.preventDefault();
    const enteredData={
      title:enteredTitle,
      price:enteredAmount,
      date:new Date(enteredDate)
    }
    props.onSaveExpenseData(enteredData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setIsAdditing(false);
  }
  const addExpenseButtonHandler=()=>{
    setIsAdditing(true);
  }
  const cancelButtonHandler=()=> setIsAdditing(false);
  if(!isAdditing)
  {
    return <button onClick={addExpenseButtonHandler}>Add Expense</button>
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={enteredTitle} id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={enteredAmount} id="amount" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" value={enteredDate} id="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelButtonHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
