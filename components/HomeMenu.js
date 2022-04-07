import React from 'react';
import {Row, Col} from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image';


function HomeMenu(props) {


  return(
    <>
    <Row className="flex-nowrap">
       <Col md={6} sm={6} xs={6} align="left" style={{marginLeft: '.5rem'}}>
         <Image  className="nav-logo img-fluid" src={props.src}/> 
        </Col>   
        
        <Col md={6} sm={6} xs={6} className="my-auto" align='right' style={{marginRight: '5rem'}}>
          <Link  href='/contact'>
            <a className="contactLink" > 
              contact
            </a>
            
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default HomeMenu;
