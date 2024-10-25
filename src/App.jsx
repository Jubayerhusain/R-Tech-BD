import "./App.css";
import Navber from "./AllComponants/header/Navber";
import Products from "./AllComponants/allProducts/Products";
import Cart from "./AllComponants/addTocart/Cart";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });
  const hundleCartStatus = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };
  // console.log(isActive);
  const [addToCart, setAddToCart] = useState([]);
  const displayAddToCart = (product) => {
    const newCart = [...addToCart, product];
    setAddToCart(newCart);
  };
  return (
    <>
      {/* navber sectino start  */}
      <Navber addToCart ={addToCart}></Navber>
      {/* navber sectino close */}
      {/* main section start  */}
      <main>
        <div className="grid grid-cols-3 gap-10 w-10/12 mx-auto mt-10">
          {/* product containar start  */}
          <div className="col-span-2">
            <Products displayAddToCart={displayAddToCart}></Products>
          </div>
          {/* product containar close  */}
          {/* add to card section start */}
          <div className="col-span-1">
            <Cart
              addToCart={addToCart}
              isActive={isActive}
              hundleCartStatus={hundleCartStatus}
            ></Cart>
          </div>
          {/* add to card section clsoe */}
        </div>
      </main>
      {/* main section clsoe */}
    </>
  );
}

export default App;
