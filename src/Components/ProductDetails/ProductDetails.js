import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import filledHeart from "../../assets/filledheart.png";
import emptyHeart from "../../assets/emptyheart.png";
import styles from "./ProductDetails.module.css";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import { Carousel, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "../../store/redux-store";

function ProductDetails(props) {
  const nav = useNavigate();
  const quantityRef = useRef(1);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [piano, setPiano] = useState({});
  const [loadingPiano, setLoadingPiano] = useState(true);
  const params = useParams();
  const { cart } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    api.getPiano(params.productId).then((data) => {
      setPiano(data);
      setLoadingPiano(false);
    });
  }, [params.productId]);

  return (
    <section className="container">
      {!loadingPiano ? (
        <div className="card mt-3 border-0 ">
          <div className="row g-0 my-0">
            <div className="col-lg-5 col-md-12">
              <Carousel>
                {piano.imgs.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
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
                      <p>${piano.unit_price}</p>
                    </h3>
                    <p className="card-text">{piano.description}</p>
                    <Rating
                      name="read-only"
                      value={piano.avg_rating}
                      readOnly
                    />
                  </Col>

                  <div className="col">
                    {!piano.units_in_stock ? (
                      <OutOfStockButtons />
                    ) : (
                      <div>
                        <Link
                          to={isLoggedIn ? `/checkout/${piano.id}` : "/login"}
                        >
                          <button className="btn btn-dark mt-3 rounded-0">
                            Buy it now
                          </button>
                        </Link>
                      </div>
                    )}
                    {piano.units_in_stock ? (
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
                            max={piano.units_in_stock}
                          />
                          {!cart.find((product) => product.id === piano.id) ? (
                            <button
                              onClick={() => {
                                {
                                  if (!isLoggedIn) {
                                    nav("/login");
                                    return;
                                  }
                                  dispatch(
                                    addItemToCart(
                                      piano.id,
                                      Number(quantityRef.current.value)
                                    )
                                  );
                                }
                              }}
                              className="btn btn-primary mx-3 rounded-0"
                            >
                              Add to cart
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                if (!isLoggedIn) {
                                  nav("/login");
                                  return;
                                }
                                dispatch(removeFromCart(piano.id));
                              }}
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
                              {!wishList.find(
                                (product) => product.id === piano.id
                              ) ? (
                                <img
                                  onClick={() => {
                                    if (!isLoggedIn) {
                                      nav("/login");
                                      return;
                                    }
                                    dispatch(addToWishList(piano.id));
                                  }}
                                  className={styles.wishlistIcon}
                                  src={emptyHeart}
                                ></img>
                              ) : (
                                <img
                                  onClick={() => {
                                    if (!isLoggedIn) {
                                      nav("/login");
                                      return;
                                    }
                                    dispatch(removeFromWishList(piano.id));
                                  }}
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
