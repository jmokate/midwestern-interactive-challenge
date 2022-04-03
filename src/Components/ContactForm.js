import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'


function ContactForm() {

    return(
        <>
        <Row>
           {/* create margin  */}
        </Row>
        <Row className='mt-4'>
            <Col align='center'>
                <h1 style={{fontSize:"40px", fontWeight: 'bold', marginBottom: '2rem'}}>Heading Two</h1>
                <form  style={{}}>
                    <input type='text' name='firstName' placeholder='First Name' className='formControl' />
                    <input type='text' name='lastName' placeholder='Last Name' className='formControl' />
                    <input type='text' name='email' placeholder='Email' className='formControl' />
                    <input type='text' name='password' placeholder='Password' className='formControl' />
                    <input type='text' as='textarea' name='message' placeholder='Message' className='formControl' />
                    <button type='submit' className='contact-btn'>Submit</button>
                </form>
               
            </Col>
        </Row>
       
        </>
    )
}

export default ContactForm;