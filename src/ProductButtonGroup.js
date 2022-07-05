export default function ProductButtonGroup() {
  return (
    <div className="col-lg-3 text-center">
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
      <button className="btn btn-dark mt-3">Buy it now</button>
      <button className="btn btn-primary mt-3">Add to cart</button>
      <button className="btn btn-danger mt-3">Add to wishlist</button>
    </div>
  );
}
