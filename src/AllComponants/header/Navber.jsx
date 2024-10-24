const Navber = () => {
    return (
      <div className="flex justify-around shadow-lg py-5 items-centere">
        <h1 className="text-3xl font-bold text-gray-700">R-Tech-BD</h1>
        <input
          className="text-lg px-4 outline-none rounded-lg border-gray-400 border-2"
          type="search"
          placeholder="search product"
        />
        <div className="text-xl font-semibold text-gray-700 flex">
          <p className="mx-2">
            Added:<span>10</span>
          </p>
          <p>
            price:<span>500</span>$
          </p>
        </div>
      </div>
    );
  };
  
  export default Navber;
  