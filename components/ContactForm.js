import React, {useState} from 'react'


function ContactForm() {

    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        message: ""
    });

    const [formData, setFormData] = useState();

    const handleChange = (event) => {
        const {value, name} = event.target;
        setFormValues({...formValues, [name]: value })
    }

    const handleSubmit = (event) => {
        const {name, value} = event.target
        console.log(event)
        event.preventDefault();
        for (const key in formValues) {
            //console.log(key, formValues[key])
            if (key.value == "") {
                alert("Please complete the form")
            }
        }
         
            // setFormData(formValues);
            // console.log('new values to submit', formData)
        
    }

    return(
        <>
        
         {/* <Row className='contactHeaderMargin'  >
            <Col align='center' > */}
            <div className='contactHeaderMargin'>
                <h1 className='formTitle formTitleSmall' >Heading Two</h1>
                <form onSubmit={handleSubmit}  >
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