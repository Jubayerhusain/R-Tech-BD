import About from "./../cartabout/About";
import AddCart from "./../addCart/AddCart";
const Cart = ({ hundleCartStatus, isActive, addToCart }) => {
  return (
    <div className="shadow-xl rounded-xl h-full">
      <h1 className="text-center text-2xl font-semibold p-5 text-yellow-500 underline">
        See Your Favorit
      </h1>
      <div className="flex justify-center space-x-3">
        <button
          onClick={() => hundleCartStatus("cart")}
          className={`${
            isActive.cart ? "bg-green-300" : "bg-gray-100"
          } px-5 py-2 border-2 rounded-lg`}
        >
          Carts
        </button>
        <button
          onClick={() => hundleCartStatus("about")}
          className={`${
            isActive.cart ? "bg-gray-100" : "bg-green-300"
          } px-5 py-2 border-2 rounded-lg`}
        >
          About
        </button>
      </div>
      {isActive.cart ? (
        <AddCart addToCart={addToCart}></AddCart>
      ) : (
        <About></About>
      )}
    </div>
  );
};

export default Cart;
