const Product = ({ Product,displayAddToCart }) => {
  // console.log(Product);
  const { id, name, description, price, currency, inStock, category, image } =
    Product;
  // console.log(image)
  return (
    <div>
      <div className="rounded-lg shadow-xl p-5 space-y-1">
        <img src={image} alt="" />
        <h1 className="text-xl text-gray-600 font-semibold">Name: {name}</h1>
        <h1 className="text-lg text-gray-600 font-semibold">Description: {description}</h1>
        <p><span className="text-lg text-gray-600 font-semibold">Price:</span> {price} {currency}</p>
        <p className="text-orange-500 underline">{inStock?"Now Available":"Not Available"}</p>
        <button onClick={()=>displayAddToCart(Product)} className="border-2 rounded-lg bg-gray-100 px-6 py-2 hover:bg-green-300 font-semibold text-gray-600">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
