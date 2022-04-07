import React from "react";
import {Row, Col, Card} from 'react-bootstrap'
import Image from 'next/image'

function Cards({talkie, rabbit, shield}) {

  return(
    <>
    <Row >
          <Col className='mb-2'>
            <Card className="cards">
              <div>
                <Image src={talkie}  alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
              
                  <p className="card-text" style={{textAlign: 'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                
                
                <button className="card-btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className="cards">
              <div className="mt-4" >
                <Image src={rabbit}  alt="rabbit" />
              </div>
              <Card.Body style={{paddingTop: '10%'}}>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
              
                  <p className="card-text" style={{textAlign: 'left'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod, tempor incididunt ut labore et dolore
                  </p>
                
                <button className="card-btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className="cards">
              <div style={{ textAlign: 'center', marginTop: '5px' }}>
                <Image src={shield} alt="shield" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
              
                  <p className="card-text" style={{textAlign: 'left'}}>
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