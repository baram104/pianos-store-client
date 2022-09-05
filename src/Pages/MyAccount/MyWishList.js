import Product from "../../Components/Product/Product";

export default function MyWishList() {
  return (
    <div className="container">
      <Product isOnWishList={true} id="3" />
      <Product isOnWishList={true} id="2" />
      <Product isOnWishList={true} id="2" />
      <Product isOnWishList={true} id="2" />
      <Product isOnWishList={true} id="2" />
    </div>
  );
}
