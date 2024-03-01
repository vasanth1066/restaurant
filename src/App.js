import { useState } from "react";

import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showcart, setshowcart] = useState(false);

  const showcarhandler = () => {
    setshowcart(true);
  };

  const hidecarthandler = () => {
    setshowcart(false);
  };
  return (
    <CartProvider>
      {showcart && <Cart onClose={hidecarthandler} />}
      <Header onShowHandler={showcarhandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
