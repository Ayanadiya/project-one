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

    return (<Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      {props.expenses.filter((expense)=> expense.date.getFullYear().toString()==filteredYear).map((expense,index)=>{
        return <ExpenseItem
        key={expense.id}
        date={expense.date} 
        title={expense.title}
        price={expense.price}
        location={expense.location}
        />
      })}
    </Card>)
}

export default Expenses;