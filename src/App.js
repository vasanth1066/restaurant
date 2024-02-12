import { Fragment } from "react";

import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
