import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses=(props)=>{
return(
    <Card className=".expenses">
    {
    props.expenses.map(function(expense,index){
    return(
        <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price} ></ExpenseItem>
    )
    })
}
    </Card>
)
}
export default Expenses;