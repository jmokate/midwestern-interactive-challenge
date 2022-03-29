import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap';
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
            <Card className="cards">
              <div>
                <Image src={talkie} style={{ objectFit: 'none', marginTop: '10px' }} alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
                <Card.Text>
                  <p style={{textAlign: 'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                </Card.Text>
                
                <button className="btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className="cards">
              <div >
                <Image src={rabbit} style={{ objectFit: 'none', marginTop: '2rem' }} alt="rabbit" />
              </div>
              <Card.Body style={{paddingTop: '10%'}}>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
                <Card.Text>
                  <p style={{textAlign: 'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                </Card.Text>
                <button className="btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className="cards">
              <div style={{ textAlign: 'center' }}>
                <Image src={shield} style={{ objectFit: 'none', marginTop: '10px' }} alt="shield" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
                <Card.Text>
                  <p style={{textAlign: 'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                </p>
                </Card.Text>
                <button className="btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="px-4 mt-5">
        <Row>
          <Col style={{}}>
          <h1 style={{color: '#f5f5f5', fontSize: '50px', fontWeight: 'bold'}}>Heading One</h1>
          <hr style={{color: '#debf79', width: "12rem", height: '5%', opacity: '100'}}/>
          </Col>
        </Row>
        
      </Container>
        
       
    
    </>
  );
}

export default App;
