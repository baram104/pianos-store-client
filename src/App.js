import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NavbarComp from "./Components/Layout/Navbar/NavbarComp";
import Footer from "./Components/Layout/Footer/Footer";
import MyAccount from "./Pages/MyAccount/MyAccount";
import ProductsPage from "./Pages/Products/ProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import OrderSummaryPage from "./Pages/OrderSummary/OrderSummaryPage";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignIn/SignInPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import RateOrderPage from "./Pages/RateOrder/RateOrderPage";
import { useContext } from "react";
import UserContext from "./store/user-context";
import Protector from "./Components/Protector/Protector";

function App() {
  const {
    userDetails: { isLoggedIn },
  } = useContext(UserContext);
  const { userCart } = useContext(UserContext);
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Navigate replace to="/products" />} />
        <Route path="products" element={<ProductsPage />}>
          <Route
            path="category/:category_id"
            element={<ProductsPage></ProductsPage>}
          ></Route>
          <Route
            path="sort/:sortCondition"
            element={<ProductsPage></ProductsPage>}
          ></Route>
        </Route>
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route
          path="/profile"
          element={
            <Protector isLoggedIn={isLoggedIn}>
              <MyAccount />
            </Protector>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Protector isLoggedIn={isLoggedIn}>
              <CartPage />
            </Protector>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Protector isLoggedIn={isLoggedIn}>
              <CheckoutPage />
            </Protector>
          }
        ></Route>
        <Route
          path="/checkout/:prodId"
          element={
            <Protector isLoggedIn={isLoggedIn}>
              <CheckoutPage />
            </Protector>
          }
        ></Route>
        <Route
          path="/ordersummary"
          element={
            <Protector isLoggedIn={isLoggedIn}>
              <OrderSummaryPage />
            </Protector>
          }
        ></Route>
        <Route path="/login" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route
          path="/rate-order"
          element={
            <Protector isLoggedIn={isLoggedIn}>
              <RateOrderPage />
            </Protector>
          }
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
