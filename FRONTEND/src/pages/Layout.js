import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-gradient-1, bg-gradient-2">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            {/* <p5>KAFE</p5>
            <p6>kangASEP</p6> */}
            <img
              src="../assets/images/logo.png"
              width="30"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <div className="brand-line1">PIZZA</div>
            <div className="brand-line2">KangASEP</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <strong>Home</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <strong>Contach Us</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <strong>About Us</strong>
              </Nav.Link>
              <NavDropdown
                title={<strong>MASTER</strong>}
                className="custom-dropdown-menu"
              >
                <NavDropdown.Item as={Link} to="/categories">
                  <strong>Category</strong>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products">
                  <strong>Products</strong>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/keranjang">
                  <strong>Keranjangs</strong>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/customer">
                  <strong>Customers</strong>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/pesanan">
                <strong>Pesanan</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
