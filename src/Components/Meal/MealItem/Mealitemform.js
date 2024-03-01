import classes from "./Mealitemform.module.css";
import React, { useContext, useState } from "react";
import CartContext from "../../../Store/cart-context";

function Mealitemform(props) {
  const cartcontx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const addItemTOCart = (e) => {
    e.preventDefault();

    cartcontx.addItem({ ...props.item, quantity: quantity });
    console.log(" after ", cartcontx);
  };
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
  };
  return (
    <form className={classes.form}>
      {console.log("inside render ", cartcontx.items)}
      <label className={classes.label}>Amount </label>
      <input
        type="number"
        id={"Amount-" + props.id}
        min="1"
        max="5"
        step="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={addItemTOCart}>+ Add</button>
    </form>
  );
}

export default Mealitemform;
