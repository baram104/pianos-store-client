import ProductDetails from "../ProductDetails/ProductDetails";

export default function MyWishList() {
  return (
    <div className="container">
      <ProductDetails isOnWishList={true} isOutOfStock={true} />
      <ProductDetails isOnWishList={true} isOutOfStock={false} />
      <ProductDetails isOnWishList={true} isOutOfStock={true} />
      <ProductDetails isOnWishList={true} isOutOfStock={false} />
      <ProductDetails isOnWishList={true} isOutOfStock={true} />
    </div>
  );
}
