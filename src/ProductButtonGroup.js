import OutOfStockButtons from "./OutOfStockButtons";
import InStockButtons from "./InStockButtons";

export default function ProductButtonGroup(props) {
  return (
    <div className="col-lg-3 text-center">
      {props.isOutOfStock ? (
        ""
      ) : (
        <div className="input-group mt-3 justify-content-center">
          <span className="input-group-text" id="basic-addon1">
            Qty
          </span>
          <input
            style={{ maxWidth: "4vw" }}
            type="number"
            className="form-control"
            aria-label="Quantity"
            aria-describedby="basic-addon1"
          />
        </div>
      )}
      {props.isOutOfStock ? <OutOfStockButtons /> : <InStockButtons />}

      {props.isOnWishList ? (
        <button className="btn btn-danger mt-3">Remove from wishlist</button>
      ) : (
        <button className="btn btn-danger mt-3">Add to wishlist</button>
      )}
    </div>
  );
}
