import './ExpenseItem.css'
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
function ExpenseItem(props){
    const month=months[props.date.getMonth()];
    const year=props.date.getFullYear();
    const date=props.date.getDate();
    return(
    <div className='expense-item'>
    {/* <div>{props.date.toISOString()}</div> */}
    <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
    </div>
    <div className='expense-item__description-item__price'>
        <h2>{props.title}</h2>
        <div className=''>${props.price}</div>
    </div>
    <div className='expense-item__price'>Location
        <h2>{props.location}</h2>
    </div>
    </div>
    )
}
export default ExpenseItem;

