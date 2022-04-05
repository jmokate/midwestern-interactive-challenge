import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactHeader from './ContactHeader.js'
import ContactMenu from './ContactMenu.js'
import Logo from '../Assets/Logo.png'
import {Container, Row, Col} from 'react-bootstrap'
import '../Contact.css'
import ContactForm from './ContactForm.js'


function Contact() {



  return (
    <>
      <Container fluid className='contactBody'>
      <Container className='mb-5'>
        <ContactMenu src={Logo} />
      </Container>

      <Container   >
        <Row   >
          <Col sm={12} md={6} className='my-auto'  >
            <ContactHeader/>
          </Col>
          <Col sm={12} md={6} align='center' className="contactHeaderMargin" >
            <ContactForm />
          </Col>
        </Row>
      </Container>

      
      </Container>
    </>
  )
  
}

export default Contact;