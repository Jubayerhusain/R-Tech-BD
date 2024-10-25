const AddCart = ({addToCart}) => {
    console.log(addToCart)
  return (
    <div className="p-5">
        <h1 className="text-xl text-center font-semibold text-gray-600 m-9">Your Favorit</h1>
      <div className=" rounded-xl my-4 p-3 shadow-sm">
        {
            addToCart.map((product)=> ( 
                <div key={product.id} className="flex items-center justify-between my-6 shadow-md p-4">
                    <img className="w-[100px]" src={product.image} alt="" />
                    <h1 className="text-lg text-gray-600 font-semibold">name: {product.name}</h1>
                    <button className="px-5 py-2 border-2 rounded-lg bg-red-200 hover:bg-red-600 hover:text-gray-100 text-gray-600">Delete</button>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default AddCart;
