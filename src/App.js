import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses=[
    { id: "1", date: new Date(2023, 7, 15), title:"Insurance", price:50, location:"Bangalore"},
    { id: "2", date: new Date(2024, 3, 25), title: "Book", price: 10,  location:"Delhi" },
    { id: "3", date: new Date(2025, 10, 11), title: "Pen", price: 1,  location:"Hyderabad" },
    { id: "4", date: new Date(2024, 1, 14), title: "Laptop", price: 200,  location:"Mumbai" },
  ]

  const [expenseList, setExpenseList]= useState(expenses);
  
  const saveExpenseHandler = (expenseData) => {
     console.log(expenseData);
     setExpenseList((prevExpense)=>{
      return [...prevExpense,expenseData]
    })
  }
  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler}/>
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;

