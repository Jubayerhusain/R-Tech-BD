/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Product from "./../singleProducts/Product";

const Products = ({displayAddToCart}) => {
  const [allProducts, setAllProducts] = useState([]);
  // console.log(allProducts)
  useEffect(() => {
    fetch(`allProduct.json`)
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products));
  }, []);
  return (
    <div className="shadow-xl rounded-xl h-full">
      <div className="text-center m-10 py-5">
        <h1 className="text-green-500 font-semibold text-2xl">Display All product</h1>
        <h1>Product length: {allProducts.length}</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 p-5">
        {allProducts.map((p) => (
          <Product displayAddToCart={displayAddToCart} Product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
