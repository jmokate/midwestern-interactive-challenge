import React from 'react';
import {Col, Card} from 'react-bootstrap';
import Image from 'next/image';

export default function CardItem(data) {

let newData = JSON.stringify(data)
newData = JSON.parse(newData)
console.log('card item data', newData)
  return(
    <>
    {newData.data.map(item =>  (
        <Col className='mb-2'>
            <Card className="cards">
              <div>
               
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
    ))}
    
    </>
  )
}