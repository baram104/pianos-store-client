import OutOfStockButtons from "./OutOfStockButtons";
import filledHeart from "../filledheart.png";
import emptyHeart from "../emptyheart.png";
import styles from "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import * as api from "../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import { Carousel } from "react-bootstrap";

function ProductDetails(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.getPiano(props.id).then((data) => setProduct(data));
  }, []);

  return (
    <section className="container">
      {product ? (
        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-lg-5 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={product.imgSrc}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={product.imgSrc}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={product.imgSrc}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="card-body">
                <div className="col text-start">
                  <h3 className="card-title text-dark">{product.name}</h3>
                  <p className="card-text text-primary">
                    <h3>${product.price}</h3>
                  </p>
                  <p className="card-text">{product.description}</p>
                  <div className="col">
                    {!product.quantity ? (
                      <OutOfStockButtons />
                    ) : (
                      <div>
                        <button className="btn btn-dark mt-3 rounded-0">
                          Buy it now
                        </button>
                      </div>
                    )}
                    {product.quantity && (
                      <div className="col mt-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            Qty
                          </span>
                          <input
                            type="number"
                            style={{ maxWidth: "12vw" }}
                            min={1}
                            className="form-control"
                            aria-label="Quantity"
                            max={product.quantity}
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
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </section>
  );
}
export default ProductDetails;
