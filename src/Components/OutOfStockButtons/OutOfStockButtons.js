import { Col, Row } from "react-bootstrap";
export default function OutOfStockButtons({ isOnWishList }) {
  return (
    <Row className="p-2 mt-0">
      <button as={Col} className="btn btn-warning mx-2 col-4" disabled>
        Out of stock
      </button>
      {isOnWishList && (
        <button as={Col} className="btn btn-primary col-7">
          Notify me when product is in stock
        </button>
      )}
    </Row>
  );
}
