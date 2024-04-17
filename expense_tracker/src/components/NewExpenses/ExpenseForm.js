import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
// const [enteredTitle, setEnteredTitle] = useState("");
// const [enteredAmount, setEnteredAmount] = useState("");
// const [enteredDate, setEnteredDate] = useState("");

// we can use multiple in once
const[userInput,setUserInput]=useState({
  enterdTitle:'',
  enterdAmt:'',
  enterdDate:'',
})

const titleChangeHandler = (event) => {
  // setEnteredTitle(event.target.value);
  setUserInput((prevState)=>{
    return {
      ...prevState,
      enterdTitle:event.target.value,
    }
  })
};

const amountChangeHandler = (event) => {
  // setEnteredAmount(event.target.value);
  setUserInput((prevState)=>{
    return{
      ...prevState,
    enterdAmt:event.target.value,
    }
  })
};

const dateChangeHandler = (event) => {
  // setEnteredDate(event.target.value);
  setUserInput((prevState)=>{
    return {
      ...prevState,
      enterdDate:event.target.value
    }
  })
};
const formSubmitHandeler=(event)=>{
  event.preventDefault();
  const formData={
    title:userInput.enterdTitle,
    amount:userInput.enterdAmt,
    date:new Date(userInput.enterdDate),
  }
  console.log(formData)
  setUserInput({
  enterdTitle:'',
  enterdAmt:'',
  enterdDate:'',
  })
}
return (
  <form onSubmit={formSubmitHandeler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          value={userInput.enterdTitle}
          onChange={titleChangeHandler} 
        />
      </div>
      <div className="new-expense__control">
        <label htmlFor="amount">Amount</label>
        <input 
          type="number" 
          id="amount" 
          value={userInput.enterdAmt}
          onChange={amountChangeHandler} 
        />
      </div>
      <div className="new-expense__control">
        <label htmlFor="date">Date</label>
        <input 
          type="date" 
          id="date" 
          min="2023-01-01" 
          max="2024-12-31" 
          value={userInput.enterdDate}
          onChange={dateChangeHandler} 
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
);
};

export default ExpenseForm;
