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

      
        </Row>
    </>
  )
}
export default CardGroup