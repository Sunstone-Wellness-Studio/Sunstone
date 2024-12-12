import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import * as Yup from "yup";

export const ContactForm=()=>{

    // Add preferred contact check boxes for email or phone 

    

    let [formState,setFormState]=useState({
        name:'',
        email:'',
        phone:'',
        subject:'',
        message:''
    })

    // const []=useState({ })
    const [errors,setErrors]=useState({})

    // const [buttonDisabled,setButtonDisabled]=useState(true);

    const formSchema=Yup.object({
      name:Yup
          .string()
          .required('Must include a Name.'),
      email:Yup
          .string()
          .email("invalid email format")
          .required('Must be a valid email'),
      phone:Yup
      // regex for 10 digit number
        .string(),
        // .matches(/^\d{10}$/, "Phone number must be 10 digits"),
      subject:Yup
          .string(),
      message:Yup
          .string(),
    })

    // useEffect(()=>{
    //   formSchema.isValid(formState).then(valid=> setButtonDisabled(!valid));},[formState]);


    const handleChange=(e)=>{
      const {name, value} = e.target
      // e.persist();
      // Yup.reach(formSchema, name)
      // .validate(value)
      // .then((valid) => {
      //   setErrors({ ...errors, [name]: "" });
      // })
      // .catch((err) => {
      //   console.log(`error ${err.errors[0]}`)
      //   setErrors({ ...errors, [name]: err.errors[0] });
      //   toast.error('Must complete required fields');
      // });
    setFormState({
      ...formState,
      [name]: value,
    });
        // setFormInfo({...formInfo, [e.target.name]:e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
          await formSchema.validate(formState,{abortEarly: false
          })
          .then(
            (result)=>{
              console.log(result)
              emailjs.send(process.env.REACT_APP_TEST_SERVICE_ID,process.env.REACT_APP_TEST_CONTACT_TEMPLATE_ID,formState,process.env.REACT_APP_TEST_USER_ID)
            setFormState({
            name:'',
            email:'',
            phone:'',
            subject:'',
            message:''
            });
            toast.success('Thanks! We got your message!');
            
        },
        // (error)=>{
        //     console.log(error.ValidationError);
        //     toast.error('Sorry, your message didn\'t go through. Please try again.');
        // }
      )
        } catch (error) {
          console.log(error.inner)
          const newErrors = {};
          error.inner.forEach(err => {
            newErrors[err.path] = err.message
            
          });
          setErrors(newErrors);
          // toast.error('Sorry, your message didn\'t go through. Please try again.');
        }
        // emailjs.send('adminEmail','template_contact',formState,'sBe9l3BPb6qWEwqbZ')
        // .then((result)=>{
        //     console.log(result)
        //     setFormState({
        //     name:'',
        //     email:'',
        //     phone:'',
        //     subject:'',
        //     message:''
        //     });
        //     toast.success('Thanks! We got your message!');
            
        // },(error)=>{
        //     console.log(error.text);
        //     toast.error('Sorry, your message didn\'t go through. Please try again.');
        // })
    }

    return(
        <div>
            <form id="contactForm" onSubmit={handleSubmit}>
            <label>Name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id="nameInput"
              value={formState.name}
              onChange={handleChange}
              
            />
            {errors.name && <div className='error'>{errors.name}</div>}
            <br />
            <div id='contactInfoSecondRow'>
            <div className="contactInfo">
              <label>Email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="emailInput"
                value={formState.email}
                onChange={handleChange}
                
              />
              {errors.email && <div className='error'>{errors.email}</div>}
              </div>
              <div className="contactInfo">
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                id="phoneInput"
                value={formState.phone}
                onChange={handleChange}
              />
              {/* {errors.phone && <div className='error'>{errors.phone}</div>} */}
            </div>
            </div>
            <br />
            <label>Subject</label>
            <input
              type="text"
              placeholder="Type the subject"
              name="subject"
              id="subjectInput"
              value={formState.subject}
              onChange={handleChange}
              // error={errors}
            />
            <br />
            <label>Message</label>
            <textarea
              type="text"
              placeholder="Type your message here..."
              name="message"
              id="messageInput"
              value={formState.message}
              onChange={handleChange}
              // error={errors}
            />
            <br />
            {/* <input id='submitBtn' type='submit' value='Send Message'/> */}
            <button id="submitBtn" >
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
    )
}