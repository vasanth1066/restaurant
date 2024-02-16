import classes from "./MealItem.module.css";

function MealItem(props) {
  return (
    <ul className={classes.name}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>RS {props.price}</div>
      <div></div>
    </ul>
  );
}
export default MealItem;
