import React from 'react';
import ContactMenu from './ContactMenu.js'
import Logo from '../Assets/Logo.png'
import {Container, Row, Col} from 'react-bootstrap'
import '../Contact.css'
import ContactForm from './ContactForm.js'


function Contact() {

  return (
    <>
    
      <Container className='mb-5'>
        <ContactMenu src={Logo} />
      </Container>

      <Container>
        <Row>
          <Col>
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
        </Row>
      </Container>

      <Container className='mt-5'>
        <ContactForm />
      </Container>
     
    </>
  )
  
}

export default Contact;