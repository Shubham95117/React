import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  //quantity

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    // console.log(quantity);
    cartCtx.addItem({ ...props.items, quantity: quantity });
  };

  const removeItemToCart = (event) => {
    event.preventDefault();
    cartCtx.removeItem(props.id);
    // console.log(cartCtx.items);
  };

  return (
    <form className={classes.form}>
      {/* {console.log(cartCtx.items)} */}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" onClick={addItemToCart}>
        +Add
      </button>
      <button type="button" onClick={removeItemToCart}>
        -Delete
      </button>
    </form>
  );
};

export default MealItemForm;
