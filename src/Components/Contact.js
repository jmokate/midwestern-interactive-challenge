import React from 'react';
import ContactMenu from './ContactMenu.js'
import Logo from '../Assets/Logo.png'
import {Container} from 'react-bootstrap'
import '../App.css'

function Contact() {

  return (
    <>
      <Container>
        <ContactMenu src={Logo} />
      </Container>
    </>
  )
  
}

export default Contact;