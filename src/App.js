import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NavbarComp from "./Components/Layout/Navbar/NavbarComp";
import Footer from "./Components/Layout/Footer/Footer";
import MyAccount from "./Pages/MyAccount/MyAccount";
import FormComp from "./Components/Form/FormComp";
import { formInputs } from "./DAL/data/formInputsData";
import ProductsPage from "./Pages/Products/ProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import OrderSummaryPage from "./Pages/OrderSummary/OrderSummaryPage";

function App() {
  const handleFormDetails = (details) => {
    console.log(details);
  };
  const loginFormInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };
  const signUpFormInputs = {
    email: formInputs.email,
    usernameRegistration: formInputs.usernameRegistration,
    firstName: formInputs.firstName,
    lastName: formInputs.lastName,
    passwordRegistration: formInputs.passwordRegistration,
    confirmPassword: formInputs.confirmPassword,
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComp />
      {/* <ProductsPage></ProductsPage> */}
      {/* <ProductDetails id="2" isOnWishList={false} /> */}
      <MyAccount />
      {/* <CartPage /> */}
      {/* <CheckoutPage /> */}
      {/* <OrderSummaryPage /> */}
      {/* <FormComp
        formTitle="Sign In"
        handleFormDetails={handleFormDetails}
        formInputs={loginFormInputs}
      />
      <FormComp
        formTitle="Sign Up"
        handleFormDetails={handleFormDetails}
        formInputs={signUpFormInputs}
      /> */}
      <Footer />
    </div>
  );
}

export default App;
