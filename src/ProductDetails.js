import ProductButtonGroup from "./ProductButtonGroup";

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
              <ProductButtonGroup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
