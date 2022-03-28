import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Image, Container, Row, Col, Card, Button, CardGroup} from 'react-bootstrap'
import './App.css';
import logo from "./Assets/Logo.png"
import talkie from "./Assets/Talkie.png"

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
      <Container>
      <Row style={{paddingTop: "10rem"}} >
        <CardGroup className="justify-content-center">
         <Card align="center" style={{ backgroundColor: "#F5F5F5", borderRadius: "1%" }}>
           <Card.Img variant="top" src={talkie} style={{paddingTop: "2rem", height: "50vh"}} />
            <Card.Body>
             <h1 style={{fontSize: "2.5rem"}} >Heading Two</h1>
              <Card.Text className="card-text" align="left">
               integer accumsan molestie nisl, id faucibus urna accumsan quis. Prion vulputate, mauris semper maximus.
              </Card.Text>
             <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
          
          </CardGroup>
          </Row>
      </Container>
      

          {/* <Card className="text-center" style={{ width: '25rem',height: "25rem", backgroundColor: "#F5F5F5", borderRadius: "1%" }}>
           <Card.Img variant="top" src={talkie} />
            <Card.Body>
             <Card.Title>Card Title</Card.Title>
              <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
        
      



    
      
    
    
    </>
  );
}

export default App;
