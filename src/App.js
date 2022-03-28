import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap'
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
    
      <Container className="px-4" style={{paddingTop: "3%", maxHeight:'14rem'}}>
        <Row style={{maxHeight: '15rem'}} >
          <Col >
      <Card className="cards" style={{ width: '18rem' }}>

  <Image src={talkie} className="card-img-top" alt="talkie" fluid />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem'}}>
  <div>
  <Card.Img src={talkie} />
  </div>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
        
        {/* <Container>
        <Row className="gx-5 d-flex align-items-end">
       
          <Col sm={4} className='text-center p-3' align="center" >
            <div className="cards" >
            <img src={talkie} />
            <h1>Title</h1>
            <p>lorem ipsum fuck it</p>
            <Button>Go Somewhere</Button>
            </div>
          </Col>
          <Col sm={4} className='text-center p-3' >
            <div className="cards" >
            <img src={rabbit} />
            <h1>Title</h1>
            <p>lorem ipsum fuck it</p>
            <Button>Go Somewhere</Button>
            </div>
          </Col>
          <Col sm={4} className='text-center p-3'>
            <div className="cards">
            <img src={shield} />
            <h1>Title</h1>
            <p>lorem ipsum fuck it</p>
            <Button>Go Somewhere</Button>
            </div>
          </Col>
        </Row>
      
      </Container> */}
    
    
    </>
  );
}

export default App;
