import ExpenseItem  from "./components/ExpenseItem";
function App() {
  const expenses=[{id:'1', date: new Date(2023, 7, 15), title: "Insurance", price: 100,location:'Banagalore'},
  {id:'2', date: new Date(2023, 8, 15), title: "Book", price: 10,location:'Delhi'},
  {id:'3', date: new Date(2023, 9, 15), title: "Laptop", price: 200,location:'Pune'},
  {id:'4', date: new Date(2023, 11, 15), title: "Petrol", price: 50,location:'Hyderabad'}]
  return (
    <div>
    {
      expenses.map(function(expense,index){
        return(
          <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price} location={expense.location}></ExpenseItem>
        )
      })
    }
    </div>
  );
}

export default App;
