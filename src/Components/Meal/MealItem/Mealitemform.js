import classes from "./Mealitemform.module.css";

function Mealitemform(props) {
  return (
    <form className={classes.form}>
      <label className={classes.label}>Amount </label>
      <input type="number" min="1" max="5" step="1" defaultValue="1" />
      <button>+ Add</button>
    </form>
  );
}

export default Mealitemform;
