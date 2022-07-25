import Badge from "react-bootstrap/Badge";
import "./NavbarComp.css";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
function NavbarComp() {
  return (
    <Navbar bg="dark" expand="lg" variant="primary">
      <Container fluid>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Col className="col-6">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Col>
          <Col className="d-lg-flex justify-content-lg-end">
            <Nav>
              <Nav.Link href="#login">Login/Profile</Nav.Link>
              <Nav.Link href="#cart">
                Cart<Badge className="bg-light mx-1">0</Badge>
              </Nav.Link>
            </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
