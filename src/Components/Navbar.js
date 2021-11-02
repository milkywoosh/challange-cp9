import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Offcanvas
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="gray" variant="dark">
        <Container>
          <Nav><img src="/smoke.png" href="/"></img></Nav>
          <Navbar.Brand className="text_seteam" href="/">SeTeam</Navbar.Brand>
          <Nav className="ms-auto">
            <Button variant="outline-success" href="/signup">Sign Up</Button>
            <Button variant="outline-success" href="/login">Login</Button>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="navbar-dropdown" bg="gray" expand="{false}">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown.Divider />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav.Link style={{ color: "white" }} href="/">Games</Nav.Link>
          <Nav.Link style={{ color: "white" }} href='/'>Featured Games</Nav.Link>
          <Form className="d-flex me-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
