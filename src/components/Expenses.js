import './Expenses.css';
import ExpenseItem from './ExpenseItem';
function Expenses(props){
    return (props.expenses.map((expense,index)=>{
        return <ExpenseItem
        key={expense.id}
        date={expense.date} 
        title={expense.title}
        price={expense.price}
        location={expense.location}
        ></ExpenseItem>
      }))
}

export default Expenses;