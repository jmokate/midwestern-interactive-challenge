import React from 'react';
import {Col, Card} from 'react-bootstrap';
import Image from 'next/image';

export default function CardItem({data, rabbit, talkie, shield}) {

// let newData = JSON.stringify(data)
// newData = JSON.parse(newData)
// let {data} = data;
const imageArray = [talkie, rabbit, shield]

console.log('card item data', data)
  return(
    <>
    {data.map(item =>  (
        <Col className='mb-2' key={item.id}>
            <Card className="cards">
              <div>
               <Image src={talkie} />
              </div>
              <Card.Body>
                <Card.Title><h1 style={{fontWeight: 'bold', textAlign: 'left'}}>{item.title}</h1></Card.Title>
              
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