function ProductDetails() {
  return (
    <section className="container">
      <div className="card mt-3">
        <div className="row g-0">
          <div className="col-lg-5 col-md-12">
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://i.ytimg.com/vi/7SSu0KtXI2c/maxresdefault.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="card-body row">
              <div className="col text-start">
                <h5 className="card-title">Product title</h5>
                <p className="card-text">Product description</p>
                <p className="card-text">
                  <small className="card-text">19$</small>
                </p>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
