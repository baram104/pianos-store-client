import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NavbarComp from "./Components/Layout/Navbar/NavbarComp";
import Footer from "./Components/Layout/Footer/Footer";
import MyAccount from "./Pages/MyAccount/MyAccount";
import ProductsPage from "./Pages/Products/ProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import OrderSummaryPage from "./Pages/OrderSummary/OrderSummaryPage";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignIn/SignInPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";

function App() {
  const handleFormDetails = (details) => {
    console.log(details);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="products" element={<ProductsPage />}></Route>
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="/profile" element={<MyAccount />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/ordersummary" element={<OrderSummaryPage />}></Route>
        <Route path="/login" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
      {/* <ProductDetails id="2" isOnWishList={false} /> */}

      <Footer />
    </div>
  );
}

export default App;
