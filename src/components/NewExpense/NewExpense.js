import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
   const submitExpenseDataHandler =(enterdExpenseData)=>{
    console.log(enterdExpenseData)
    const expenseData={...enterdExpenseData, id:Math.random().toString()};
    props.onSaveExpense(expenseData)
  }
    return (
        <div className="new-expense">
          <ExpenseForm  onSaveExpenseData={submitExpenseDataHandler}/>
        </div>
      );
}

export default NewExpense;