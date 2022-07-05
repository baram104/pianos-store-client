import OutOfStockButtons from "./OutOfStockButtons";
import filledHeart from "../filledheart.png";
import emptyHeart from "../emptyheart.png";
import styles from "./ProductDetails.module.css";

function ProductDetails(props) {
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
                <h3 className="card-title text-dark">Product title</h3>
                <p className="card-text text-primary">
                  <h3>$19</h3>
                </p>
                <p className="card-text">
                  Laboris exercitation ea eu culpa et officia. Proident mollit
                  culpa velit id quis eu. Dolor tempor irure cillum amet
                  reprehenderit eiusmod incididunt.
                </p>
                <div className="col text-center">
                  {props.isOutOfStock ? (
                    <OutOfStockButtons />
                  ) : (
                    <div>
                      <button className="btn btn-dark mt-3 rounded-0">
                        Buy it now
                      </button>
                    </div>
                  )}
                  {props.isOutOfStock ? (
                    ""
                  ) : (
                    <div className="col justify-content-center mt-3">
                      <div className="input-group justify-content-center">
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
                        <button className="btn btn-primary mx-3 rounded-0">
                          Add to cart
                        </button>
                        {props.isOnWishList ? (
                          <span className={styles.wishlistIconContainer}>
                            <img
                              className={styles.wishlistIcon}
                              src={filledHeart}
                            ></img>
                          </span>
                        ) : (
                          <span className={styles.wishlistIconContainer}>
                            <img
                              className={styles.wishlistIcon}
                              src={emptyHeart}
                            ></img>
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
