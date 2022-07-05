import styles from "./ProductDetails.module.css";
function ProductDetails() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Login\Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cart
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main className="container">
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
                  <button className="btn btn-danger mt-3">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto text-center bg-light">
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
export default ProductDetails;
