import React, {useState} from 'react'


function ContactForm() {

    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        const {value} = event;
        const name = event.target.name;
        
        setFormValues({...formValues, [name]: value })
    }

    return(
        <>
        
         {/* <Row className='contactHeaderMargin'  >
            <Col align='center' > */}
            <div className='contactHeaderMargin'>
                <h1 className='formTitle formTitleSmall' >Heading Two</h1>
                <form  >
                    <input type='text' name='first_name' placeholder='First Name' value={formValues.first_name} onChange={handleChange} className='formControl' />
                    <input type='text' name='last_name' placeholder='Last Name' value={formValues.last_name} onChange={handleChange} className='formControl' />
                    <input type='text' name='title' placeholder='Title' value={formValues.title} onChange={handleChange} className='formControl' />
                    <input type='text' name='email' placeholder='Email' value={formValues.email} onChange={handleChange} className='formControl' />
                    <textarea type='text' as='textarea' name='message' placeholder='Message' value={formValues.message} onChange={handleChange} className='formControlMessageBox' />
                    <button type='submit' className='contact-btn'>Submit</button>
                </form>
             </div> 
             {/* </Col>
        </Row>  */}
       
        </>
    )
}

export default ContactForm;