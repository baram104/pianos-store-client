import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import filledHeart from "../../assets/filledheart.png";
import emptyHeart from "../../assets/emptyheart.png";
import styles from "./ProductDetails.module.css";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import { Carousel, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useContext, useRef } from "react";
import UserContext from "../../store/user-context";
import { Link } from "react-router-dom";

function ProductDetails(props) {
  const quantityRef = useRef(1);
  const params = useParams();
  const ctx = useContext(UserContext);
  const {
    loading: loadingPiano,
    data: piano,
    error: pianoError,
  } = useFetch(api.getPiano, params.productId);

  return (
    <section className="container">
      {!loadingPiano ? (
        <div className="card mt-3 border-0 ">
          <div className="row g-0 my-0">
            <div className="col-lg-5 col-md-12">
              <Carousel>
                {piano.imgs.map((img) => (
                  <Carousel.Item>
                    <img
                      key={piano.id}
                      className="d-block w-100"
                      src={`http://localhost:3100/images/pianos/${piano.id}/${img}`}
                      alt={img}
                      title={img}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="card-body h-100">
                <div className="col text-start d-flex flex-column justify-content-space h-100">
                  <Col>
                    <h3 className="card-title text-dark">{piano.name}</h3>
                    <h3 className="card-text text-primary">
                      <p>${piano.unitPrice}</p>
                    </h3>
                    <p className="card-text">{piano.description}</p>
                    <Rating name="read-only" value={piano.avgRating} readOnly />
                  </Col>

                  <div className="col">
                    {!piano.unitsInStock ? (
                      <OutOfStockButtons />
                    ) : (
                      <div>
                        <Link to={`/checkout/${piano.id}`}>
                          <button className="btn btn-dark mt-3 rounded-0">
                            Buy it now
                          </button>
                        </Link>
                      </div>
                    )}
                    {piano.unitsInStock ? (
                      <div className="col mt-3">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            Qty
                          </span>
                          <input
                            type="number"
                            style={{ maxWidth: "12vw" }}
                            min={1}
                            defaultValue={1}
                            className="form-control"
                            aria-label="Quantity"
                            ref={quantityRef}
                            max={piano.unitsInStock}
                          />
                          {!ctx.userCart.find(
                            (product) => product.id === piano.id
                          ) ? (
                            <button
                              onClick={() => {
                                ctx.addToCart(
                                  piano.id,
                                  Number(quantityRef.current.value)
                                );
                              }}
                              className="btn btn-primary mx-3 rounded-0"
                            >
                              Add to cart
                            </button>
                          ) : (
                            <button
                              onClick={() => ctx.removeFromCart(piano.id)}
                              className="btn btn-primary mx-3 rounded-0"
                            >
                              Remove from cart
                            </button>
                          )}
                          {props.isOnWishList ? (
                            <span className={styles.wishlistIconContainer}>
                              <img
                                className={styles.wishlistIcon}
                                src={filledHeart}
                              ></img>
                            </span>
                          ) : (
                            <span className={styles.wishlistIconContainer}>
                              {!ctx.userFavProducts.find(
                                (product) => product.id === piano.id
                              ) ? (
                                <img
                                  onClick={() => ctx.addToWishList(piano.id)}
                                  className={styles.wishlistIcon}
                                  src={emptyHeart}
                                ></img>
                              ) : (
                                <img
                                  onClick={() =>
                                    ctx.removeFromWishList(piano.id)
                                  }
                                  className={styles.wishlistIcon}
                                  src={filledHeart}
                                ></img>
                              )}
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
