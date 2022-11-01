import "./App.css";
import "./cart.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [currentCart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);
  const [totalCal, setCal] = useState(0);

  const addToCart = (item) => {
    item.quantity += 1;
    setPrice(totalPrice + item.price);
    setCal(totalCal + item.cal);
    item.showQuantity = true;
    if (currentCart.indexOf(item) !== -1) {
      setCart([...currentCart]);
    } else {
      setCart([...currentCart, item]);
    }

    console.log(currentCart);
  };

  const deleteFromCart = (item) => {
    console.log("delete" + item.name);
    item.quantity -= 1;
    setPrice(totalPrice - item.price);
    setCal(totalCal - item.cal);
    if (item.quantity === 0) {
      item.showQuantity = false;
      let ind = currentCart.indexOf(item);
      setCart(currentCart.filter((element) => element != item));
    } else {
      setCart([...currentCart]);
    }

    console.log(currentCart);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Cart
          cart={currentCart}
          deleteFromCart={deleteFromCart}
          totalPrice={totalPrice}
          totalCal={totalCal}
        />
        <Menu addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
