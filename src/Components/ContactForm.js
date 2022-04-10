import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'


function ContactForm() {

    return(
        <>
        
         <Row className='contactHeaderMargin' >
            <Col align='center'>
                <h1 className='formTitle formTitleSmall' >Heading Two</h1>
                <form  >
                    <input type='text' name='firstName' placeholder='First Name' className='formControl' />
                    <input type='text' name='lastName' placeholder='Last Name' className='formControl' />
                    <input type='text' name='email' placeholder='Email' className='formControl' />
                    <input type='text' name='password' placeholder='Password' className='formControl' />
                    <textarea type='text' as='textarea' name='message' placeholder='Message' className='formControlMessageBox' />
                    <button type='submit' className='contact-btn'>Submit</button>
                </form>
               
             </Col>
        </Row> 
       
        </>
    )
}

export default ContactForm;