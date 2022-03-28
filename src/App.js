import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap'
import './App.css';
import logo from "./Assets/Logo.png"
//import Cards from './Cards.js'
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
    
      <Container className="px-4" style={{paddingTop: "3%"}}>
        <Row >
          <Col className='mb-2'>
            <Card className="cards" style={{ width: '25rem', height: '25rem' }}>
              <div style={{ textAlign: 'center' }}>
                <Image src={talkie} style={{ objectFit: 'none', marginTop: '10px' }} alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1>Heading Two</h1></Card.Title>
                <Card.Text>
                  <p>
                  Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.
                  </p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className="cards" style={{ width: '25rem', height: '25rem' }}>
              <div style={{ textAlign: 'center' }}>
                <Image src={rabbit} style={{ objectFit: 'none', marginTop: '2rem' }} alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1>Heading Two</h1></Card.Title>
                <Card.Text>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className="cards" style={{ width: '25rem', height: '25rem' }}>
              <div style={{ textAlign: 'center' }}>
                <Image src={shield} style={{ objectFit: 'none', marginTop: '10px' }} alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1>Heading Two</h1></Card.Title>
                <Card.Text>
                  <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                </p>
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
