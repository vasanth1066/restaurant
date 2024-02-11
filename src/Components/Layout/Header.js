import { Fragment } from "react";

import HeaderCardButton from "./HeaderCardButton";
import image from "../../Assets/meals.jpg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Ours Meal</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="sorry"></img>
      </div>
    </Fragment>
  );
}
export default Header;
