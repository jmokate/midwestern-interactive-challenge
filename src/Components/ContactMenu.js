import React from 'react';
import {Row, Col} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom';


function ContactMenu(props) {


  return(
    <>
    <Row className="flex-nowrap">
       <Col md={6} sm={6} xs={6} align="left" style={{marginLeft: '.5rem'}}>
         <img  className="nav-logo img-fluid" src={props.src}/> 
        </Col>   
        
        <Col md={6} sm={6} xs={6} className="my-auto" align='right' style={{marginRight: '5rem'}}>
          <Link className="contactLink" to='/'>
            home
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default ContactMenu;