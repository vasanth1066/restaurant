import Classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";

function HeaderCardButton(props) {
  const carctx = useContext(CartContext);
  let quantity = 0;
  carctx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Add Cart</span>
      <span className={Classes.badge}>{quantity}</span>
    </button>
  );
}
export default HeaderCardButton;
