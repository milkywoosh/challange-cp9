import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Navbar,Nav} from 'react-bootstrap'
import './index.css'
const NavBar=()=> {
  return (
   
<div>
  
<Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="/"><h1>HOME</h1></Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/login"><h4>Login</h4></Nav.Link>
    <Nav.Link href="/register"><h4>Register</h4></Nav.Link>
  </Nav>
  </Container>
 
</Navbar>

  <div className="content-home">
  

  </div>
 </div>



  );
}

export default NavBar;
