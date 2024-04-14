import './ExpenseItem.css'
function ExpenseItem(props){
    // const expenseDate=new Date(2023,7,15).toISOString();
    // const expenseName='Insurance';
    // const expenseAmt=50;
    // const expenseLocation='Bangalore';
    return(
    <div className='expense-item'>
    <div>{props.date.toISOString()}</div>
    <div className='expense-item__price'>
        <h2>{props.title}</h2>
        <div className='expense-item__description'>${props.price}</div>
    </div>
    <div className='expense-item__location'>Location
        <h2>{props.location}</h2>
    </div>
    </div>
    )
}
export default ExpenseItem;

