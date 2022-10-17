import { useSelector } from "react-redux";
import Product from "../../Components/Product/Product";

export default function MyWishList() {
  const { wishList } = useSelector((state) => state.wishList);

  return (
    <div className="container">
      {wishList.map((product) => (
        <Product isOnWishList={true} key={product.id} id={product.id} />
      ))}
    </div>
  );
}
