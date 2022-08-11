import Badge from "react-bootstrap/Badge";
import "./NavbarComp.css";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarComp() {
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
              <NavLink className="nav-link" to="/login">
                Login/Profile
              </NavLink>

              <NavLink className="nav-link" to="/cart">
                Cart<Badge className="bg-light mx-1">0</Badge>
              </NavLink>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
