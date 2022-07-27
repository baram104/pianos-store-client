import ProductDetails from "../ProductDetails/ProductDetails";

export default function MyWishList() {
  return (
    <div className="container">
      <ProductDetails id="2" isOnWishList={true} isOutOfStock={true} />
      <ProductDetails id="3" isOnWishList={true} isOutOfStock={false} />
      <ProductDetails id="3" isOnWishList={true} isOutOfStock={true} />
      <ProductDetails id="1" isOnWishList={true} isOutOfStock={false} />
      <ProductDetails id="1" isOnWishList={true} isOutOfStock={true} />
    </div>
  );
}
