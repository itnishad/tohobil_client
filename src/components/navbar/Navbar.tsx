import React, {FC, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AuthContext from '../../context-api/authContext';



const Navbarsection: FC<{}> = ()=> {
  const {state, dispatch} = useContext(AuthContext);

  if(state){
    return(
      <Navbar bg="light" variant="dark">
        <Container>

          <Navbar.Brand as={Link} to="/">
            TOHOBIL
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/campaigns">CAMPAIGN</Nav.Link> 
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
            <Nav.Link as={Link} to="/start-a-campaign">START A CAMPAIGN</Nav.Link>
            {/* <Nav.Link as={Link} to="/logout">LOGOUT</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    )
  }else{

  return (
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand as={Link} to="/">
            TOHOBIL
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/campaigns">CAMPAIGN</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/start-a-campaign">START A CAMPAIGN</Nav.Link> 
            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
}

export default Navbarsection;