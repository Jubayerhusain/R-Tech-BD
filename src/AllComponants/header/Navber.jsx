const Navber = ({ addToCart }) => {
  const totalAdded = addToCart.length;
  const totalPrice = addToCart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="flex justify-around shadow-lg py-5 items-center">
      <h1 className="text-3xl font-bold text-gray-700">R-Tech-BD</h1>
      <input
        className="text-lg px-4 outline-none rounded-lg border-gray-400 border-2"
        type="search"
        placeholder="search product"
      />
      <div className="text-lg font-normal text-gray-700 flex">
        <p className="mx-2 border-2 border-gray-500 rounded-md p-2">
          Added: <span>{totalAdded}</span> 
        </p>
        <p className="border-2 border-gray-500 p-2 rounded-md">
          Price: <span>{totalPrice}</span>$ {/* মোট প্রাইস */}
        </p>
      </div>
    </div>
  );
};

export default Navber;
