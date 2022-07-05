import { Fragment } from "react";
export default function OutOfStockButtons() {
  return (
    <Fragment>
      <button className="btn btn-warning mt-3">Out of stock</button>
      <button className="btn btn-primary mt-3">
        Notify me when product is in stock
      </button>
    </Fragment>
  );
}
