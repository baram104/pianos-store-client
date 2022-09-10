import { useContext } from "react";
import Product from "../../Components/Product/Product";
import UserContext from "../../store/user-context";

export default function MyWishList() {
  const ctx = useContext(UserContext);

  return (
    <div className="container">
      {ctx.userFavProducts.map((product) => (
        <Product isOnWishList={true} id={product.id} />
      ))}
    </div>
  );
}
