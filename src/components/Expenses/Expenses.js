import React, {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
function Expenses(props){
  const [filteredYear, setFilteredYear]=useState('2023')
  const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses=props.expenses.filter((expense)=> expense.date.getFullYear().toString()===filteredYear)
  let expenseContent=<p>No Expense Found</p>
  if(filteredExpenses.length>0)
  {
    expenseContent=(
      <>
       {filteredExpenses.map((expense,index)=>{
      return <ExpenseItem
      key={expense.id}
      date={expense.date} 
      title={expense.title}
      price={expense.price}
      location={expense.location}
      />
    })}
    {filteredExpenses.length===1 && <p>Only one expense.Please add more</p>}
      </>
      
  )
  }
    return (<Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      {expenseContent}
    </Card>)
}

export default Expenses;