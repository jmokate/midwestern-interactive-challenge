import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import './App.css';
import logo from "./Assets/Logo.png"
import talkie from "./Assets/Talkie.png"
import rabbit from "./Assets/Rabbit.png"
import shield from "./Assets/Shield.png"

function App() {
  return (
    <>
    
    <Container>
      <Row className="flex-nowrap">
        <Col md={6} sm={6} xs={6} align="left">
        <img  className="nav-logo img-fluid" src={logo}/> 
        </Col>   
        <Col md={6} sm={6} xs={6} className="contactLink" align="right">
          contact
          </Col>
      </Row>
      </Container>
      <Container style={{paddingTop: "3%"}}>
        <Row>
          <Col className='mx-auto'>
            <Card className="cards text-center" style={{backgroundColor: "#F5F5F5", borderRadius: "1%" }}>
            <Card.Img className="card-img-talkie img-fluid" variant="top" align='center' src={talkie} />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                lorem kjugogo
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center" style={{backgroundColor: "#F5F5F5", borderRadius: "1%" }}>
                <Card.Img className="card-img-rabbit img-fluid" variant="top" src={rabbit} />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    lorem kjugogo
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
          </Col>
          <Col>
              <Card className="text-center" style={{backgroundColor: "#F5F5F5", borderRadius: "1%" }}>
                <Card.Img className="card-img-shield img-fluid" variant="top" src={shield} />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    lorem kjugogo
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>


      {/* <Container>
      <Row style={{paddingTop: "10rem"}} className="text-center" >
        <CardGroup className="text-center">
         <Card className="text-center" style={{backgroundColor: "#F5F5F5", borderRadius: "1%" }}>
           <Card.Img className="card-img img-fluid" variant="top" src={talkie} />
            <Card.Body>
             <Card.Title>Card Title</Card.Title>
              <Card.Text>
               lorem kjugogo
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}

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
        {/* </CardGroup>
      </Row>
      </Container> */}
    
    
    </>
  );
}

export default App;
