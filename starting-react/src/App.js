
import Expenses from "./components/Expenses/Expenses ";
function App() {
  const expenses=[{id:'1', date: new Date(2023, 7, 15), title: "Insurance", price: 100},
  {id:'2', date: new Date(2023, 8, 15), title: "Book", price: 10},
  {id:'3', date: new Date(2023, 9, 15), title: "Laptop", price: 200},
  {id:'4', date: new Date(2023, 11, 15), title: "Petrol", price: 50}]
  return (
    <div>
    <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
