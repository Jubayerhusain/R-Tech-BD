import "./App.css";
import Navber from "./AllComponants/header/Navber";
import Products from "./AllComponants/allProducts/Products";

function App() {
  return (
    <>
      {/* navber sectino start  */}
      <Navber></Navber>
      {/* navber sectino close */}
      {/* main section start  */}
      <main>
        <div className="grid grid-cols-3 gap-10">
          {/* product containar start  */}
          <Products></Products>
          {/* product containar close  */}
          {/* add to card section start */}
          <div></div>
          {/* add to card section clsoe */}
        </div>
      </main>
      {/* main section clsoe */}
    </>
  );
}

export default App;
