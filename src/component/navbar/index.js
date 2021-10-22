import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Navbar,Nav} from 'react-bootstrap'
import './index.css'
const NavBar=()=> {
  return (
   
<div>
  
<Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="/">HOME</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/register">Register</Nav.Link>
  </Nav>
  </Container>
 
</Navbar>

  <div className="content-home">
  <h1>Welcome To SeTEAM Games</h1>

  </div>
 </div>



  );
}

export default NavBar;
