import {Navbar, Nav, Image, Container, Row, Col,} from 'react-bootstrap'
import './App.css';
import logo from "./Assets/Logo.png"

function App() {
  return (
    <>
    
    <Container className=".container-md">
      <Row className="">
        <Col lg={6}>
        <img  className="nav-logo" src={logo}/> 
        </Col>   
        <Col lg={6} className="contactLink mx-auto">
          contact
          </Col>
      </Row>
    </Container>
    
    </>
  );
}

export default App;
