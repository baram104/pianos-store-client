import { useContext } from "react";
import { useSelector } from "react-redux";
import Product from "../../Components/Product/Product";
import UserContext from "../../store/user-context";

export default function MyWishList() {
  const ctx = useContext(UserContext);
  const { wishList } = useSelector((state) => state.wishList);

  return (
    <div className="container">
      {wishList.map((product) => (
        <Product isOnWishList={true} key={product.id} id={product.id} />
      ))}
    </div>
  );
}
