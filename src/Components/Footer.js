import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" expand="dark" variant="dark" bg="gray">
                    <Container className="buttomnavbar">
                        <Nav className="d-flex flex-row bd-highlight mb-3">
                            <Navbar.Brand className="navbartext" href="/">Home</Navbar.Brand>
                            <Navbar.Brand className="navbartext" href="">About</Navbar.Brand>
                            <Navbar.Brand className="navbartext" href="">Contact Us</Navbar.Brand>
                        </Nav>
                        <Nav className="d-flex flex-row bd-highlight mb-3 d-flex align-items-end">
                            <Navbar.Brand className="navbartext" href="">&copy; 2021</Navbar.Brand>
                        </Nav>
                    </Container>
                </Navbar>
  );
};

export default Footer;
