import React, {useState, useEffect} from 'react';
import {Alert} from 'react-bootstrap';


function ContactForm() {

    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        title: "",
        email: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [formData, setFormData] = useState();

    const handleChange = (event) => {
        const {value, name} = event.target;
        setFormValues({...formValues, [name]: value })
    }

    const handleSubmit = (event) => {
        const {name, value} = event.target
        console.log(event)
        event.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        postForm();
        resetForm();
    }

    const resetForm = () => {
        setFormValues({
            first_name: "",
            last_name: "",
            title: "",
            email: "",
            message: ""
        });
    };
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        if (!values.first_name) {
            errors.first_name = 'First name required';
        }
        if (!values.last_name) {
            errors.last_name = 'Last name required';
        }
        if (!values.title) {
            errors.title = 'Title required';
        }
        if (!values.email) {
            errors.email = 'Email required';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format';
        }
        return errors;
    }

    const postForm = async() => {
        const response = await fetch('https://api.mwi.dev/contact', {
            method: 'POST',
            body: JSON.stringify({formValues}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json
        console.log(data)
    }

    return(
        <>
        
         {/* <Row className='contactHeaderMargin'  >
            <Col align='center' > */}
            <div className='contactHeaderMargin'>
            {Object.keys(formErrors).length === 0 && isSubmit ?
                    (<Alert style={{margin: 'none'}} className='formSuccess' variant='success'>
                        Thank you :)
                    </Alert>) : null
                }
                <h1 className='formTitle formTitleSmall' >Heading Two</h1>
                
                
                <form onSubmit={handleSubmit}  >
                    <p className='errors' >{formErrors.first_name}</p>
                    <input type='text' name='first_name' placeholder='First Name' value={formValues.first_name} onChange={handleChange} className='formControl' />
                    <span className='errors'>{formErrors.last_name}</span>
                    <input type='text' name='last_name' placeholder='Last Name' value={formValues.last_name} onChange={handleChange} className='formControl' />
                    <span className='errors'>{formErrors.title}</span>
                    <input type='text' name='title' placeholder='Title' value={formValues.title} onChange={handleChange} className='formControl' />
                    <span className='errors'>{formErrors.email}</span>
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