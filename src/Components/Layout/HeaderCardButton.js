import Classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
function HeaderCardButton(props) {
  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Add Cart</span>
      <span className={Classes.badge}>0</span>
    </button>
  );
}
export default HeaderCardButton;
