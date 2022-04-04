import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
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
          <h1 style={{color: '#f5f5f5', fontSize: '50px', fontWeight: 'bold'}}>Heading One</h1>
            <hr style={{color: '#debf79', width: "12.5rem", height: '4px', opacity: '100', marginTop: '-1px'}}/>
            <p style={{color: '#f5f5f5', fontSize: '17px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos
              eiusmod tempor incididunt ut labore et trace dolore magna aliqua
            </p>
            <p style={{color: '#f5f5f5', fontSize: '17px'}}>
              Prion sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum
              varius duis at consectetur lorem.
            </p>
          </Col>
          <Col sm={12} md={6} align='center' >
            <ContactForm />
          </Col>
        </Row>
      </Container>

      
      </Container>
    </>
  )
  
}

export default Contact;