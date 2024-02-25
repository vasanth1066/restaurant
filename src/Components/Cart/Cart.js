import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const carttitem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "16", name: "suschi", price: "99" }].map((items) => (
        <li> {items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {carttitem}
      <div className={classes.total}>
        <span> Total amount</span>
        <span> 954 </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
}
export default Cart;
