import React from "react";
import {Row, Col, Card} from 'react-bootstrap'
import Image from 'next/image'
import CardItem from './CardItem.js'


function CardGroup({talkie, rabbit, shield, data}) {
  console.log('in the cards', data)

  return(
    <>
    <Row >
      <CardItem data={data} rabbit={rabbit} talkie={talkie} />

      {/* data.map(item => ({
        <Col className='mb-2'>
            <Card className="cards">
              <div>
                <Image src={talkie}  alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
              
                  <p className="card-text" style={{textAlign: 'left'}}>
                  {item.content}
                  </p>
                
                
                <button className="card-btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col>

      })) */}

          {/* <Col className='mb-2'>
            <Card className="cards">
              <div>
                <Image src={talkie}  alt="talkie" />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>Heading Two</h1></Card.Title>
              
                  <p className="card-text" style={{textAlign: 'left'}}>
                  {data.data[0].content}
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
                  {data.data[1].content}
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
                  {data.data[2].content}
                  </p>
                
                <button className="card-btn">Learn More</button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
    </>
  )
}
export default CardGroup