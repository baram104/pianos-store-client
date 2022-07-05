import ProductDetails from "./ProductDetails/ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyAccount from "./MyAccount/MyAccount";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ProductDetails isOnWishList={false} isOutOfStock={false} />
      {/* <MyAccount /> */}
      <Footer />
    </div>
  );
}

export default App;
