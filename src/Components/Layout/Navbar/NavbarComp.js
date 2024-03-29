import Badge from "react-bootstrap/Badge";
import "./NavbarComp.css";
import { Navbar, Container, Nav, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../../store/redux-store";
function NavbarComp() {
  const cart = useSelector((state) => state.cart);
  const userDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as={Col}>
            <Col className="col-6">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </Col>
            <Col className="d-lg-flex justify-content-lg-end">
              {userDetails.isLoggedIn ? (
                <>
                  <NavLink className="nav-link" to="/profile">
                    My Profile
                  </NavLink>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(logoutHandler())}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}

              <NavLink className="nav-link" to="/cart">
                Cart
                <Badge className="bg-light mx-1">{cart.cart.length}</Badge>
              </NavLink>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
