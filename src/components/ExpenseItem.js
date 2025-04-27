import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate=new Date(2023, 7, 15).toISOString();
    const expenseTitle='Book';
    const expenseAmount=10;
    const expenseLocation="Bangalore";
return(
    <div className="expense-item">
      <div className="expense-item__description">{expenseDate}</div>
      <div className="expense-item__location">{expenseLocation}</div>
      <div>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div> 
    </div>
)
}

export default ExpenseItem;