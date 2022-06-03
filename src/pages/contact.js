import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactHeader from '../components/ContactHeader.js'
import ContactMenu from '../components/ContactMenu.js'
import Logo from '../assets/Logo.png'
import {Container, Row, Col} from 'react-bootstrap'
import ContactForm from '../components/ContactForm.js'

const defaultEndPoint = 'https://api.mwi.dev/content/contact'
export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

function Contact({data}) {
console.log(data)


  return (
    <>
      <Container fluid className='contactBody'>
      <Container >
        <ContactMenu src={Logo} />
      </Container>

      <Container className='mt-5'  >
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