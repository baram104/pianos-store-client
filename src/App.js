import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
