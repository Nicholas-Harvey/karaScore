import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavBar extends React.Component{
render(){
    return(
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">karaScore</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Login</Nav.Link>
</Nav>
</Navbar>
)
}
}
export default NavBar;