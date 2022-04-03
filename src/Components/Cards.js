import react from "react";
import {Row, Col, Card, Image} from 'react-bootstrap'
import '../App.css';

function Cards({talkie, rabbit, shield}) {

  return(
    <>
    <Row >
          <Col className='mb-2'>
            <Card className="cards">
              <div>
                <Image src={talkie} style={{ objectFit: 'none', marginTop: '10px' }} alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
              
                  <p style={{textAlign: 'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                
                
                <button className="card-btn">Learn More</button>
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
              
                  <p style={{textAlign: 'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                
                <button className="card-btn">Learn More</button>
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
              
                  <p style={{textAlign: 'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                
                <button className="card-btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </>
  )
}
export default Cards