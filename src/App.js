import ProductDetails from "./ProductDetails/ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyAccount from "./MyAccount/MyAccount";
import FormComp from "./FormComp";
import { loginFormInputs } from "./data/formInputsData";

function App() {
  const handleLoginDetails = (details) => {
    console.log(details);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <ProductDetails isOnWishList={false} isOutOfStock={false} /> */}
      {/* <MyAccount /> */}
      <FormComp
        formTitle="Sign In"
        handleLoginDetails={handleLoginDetails}
        formInputs={loginFormInputs}
      />
      <Footer />
    </div>
  );
}

export default App;
