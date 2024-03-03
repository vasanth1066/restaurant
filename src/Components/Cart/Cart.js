import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";

function Cart(props) {
  const carctx = useContext(CartContext);
  // const carttitem = (
  //   <ul className={classes["cart-items"]}>
  //     {carctx.items.map((items) => (
  //       <li>
  //         Name:{items.name} Price:{items.price} Quantity:{items.quantity}{" "}
  //       </li>
  //     ))}
  //   </ul>
  // );
  let totalprice = 0;
  carctx.items.forEach((item) => {
    totalprice = totalprice + Number(item.price) * item.quantity;
  });
  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};
  return (
    <Modal onClose={props.onClose}>
      {
        <ul className={classes["cart-items"]}>
          {carctx.items.map((items) => (
            <li>
              {/* Price:{items.price} Quantity:{items.quantity} */}
              <div>
                <span>
                  <span className={classes.price}>Name:{items.name} -</span>
                  <span className={classes.amount}> Price:{items.price} -</span>
                  <span className={classes.quantity}>
                    Quantity:{items.quantity}
                  </span>
                </span>

                <span className={classes.actions}>
                  <button onClick={cartItemRemoveHandler}>−</button>
                  <button onClick={cartItemAddHandler}>+</button>
                </span>
              </div>
            </li>
          ))}
        </ul>
      }
      <div className={classes.total}>
        <span> Total amount</span>
        <span> {totalprice} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
}
export default Cart;
