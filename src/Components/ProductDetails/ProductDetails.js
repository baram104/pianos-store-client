import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import filledHeart from "../../assets/filledheart.png";
import emptyHeart from "../../assets/emptyheart.png";
import styles from "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    api.getPiano(params.productId).then((data) => setProduct(data));
  }, []);

  return (
    <section className="container">
      {product ? (
        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-lg-5 col-md-12">
              <Carousel>
                {product.imgs.map((img) => (
                  <Carousel.Item>
                    <img
                      key={product.id}
                      className="d-block w-100"
                      src={`http://localhost:3100/images/pianos/${product.id}/${img}`}
                      alt={img}
                      title={img}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="card-body">
                <div className="col text-start">
                  <h3 className="card-title text-dark">{product.name}</h3>
                  <h3 className="card-text text-primary">
                    <p>${product.unit_price}</p>
                  </h3>
                  <p className="card-text">{product.description}</p>
                  <div className="col">
                    {!product.units_in_stock ? (
                      <OutOfStockButtons />
                    ) : (
                      <div>
                        <button className="btn btn-dark mt-3 rounded-0">
                          Buy it now
                        </button>
                      </div>
                    )}
                    {product.units_in_stock ? (
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
                            max={product.units_in_stock}
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
                    ) : (
                      ""
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
