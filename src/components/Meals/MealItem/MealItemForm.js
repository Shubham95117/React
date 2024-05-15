import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id, //&nbsp;this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
