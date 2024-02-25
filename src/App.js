import { Fragment, useState } from "react";

import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showcart, setshowcart] = useState(false);

  const showcarhandler = () => {
    setshowcart(true);
  };

  const hidecarthandler = () => {
    setshowcart(false);
  };
  return (
    <Fragment>
      {showcart && <Cart onClose={hidecarthandler} />}
      <Header onShowHandler={showcarhandler}></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
