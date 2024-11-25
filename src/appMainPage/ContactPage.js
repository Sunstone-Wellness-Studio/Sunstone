
import emailjs from 'emailjs-com';
import { useState } from 'react';
import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'


export const Contact=()=>{

    // Todo separate divs into multiple components
    // Add preferred contact check boxes for email or phone 

    

    let [formInfo, setFormInfo]=useState({
        name:'',
        address:'',
        email:'',
        phone:'',
        subject:'',
        message:''
    })
    const [alert, setAlert] = useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })
    
      function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
        // setFormInfo({
        //     name:'',
        //     email:'',
        //     phone:'',
        //     subject:'',
        //     message:''
        // });
      }
    const notification=(e)=>{
        e.preventDefault();
        toast('success')
    }
      function onShowAlert(type) {
        setAlert({
          type: type,
          text: 'Thanks for the message, we\'ll get back to you soon!',
          show: true
        })
        
        
      }
    const handleChange=(e)=>{
        setFormInfo({...formInfo, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.send('terry2Gmail','template_contact',formInfo,'dgPbsbSHP1jK9Y2Ch')
        .then((result)=>{
            console.log(result)
            
        },(error)=>{
            console.log(error.text);
        })
        // setFormInfo({
        //     name:'',
        //     email:'',
        //     phone:'',
        //     subject:'',
        //     message:''
        // });
        // e.target.reset();
    }
    return(
        <div id='contact'>
            <h2>Contact Me</h2>
            <div className="contactBox">
            <div id='contactContent'>
                {/* <h4>Lets Connect!</h4> */}
                {/* <p>Contact Me<br/><br/> */}
                <p>I would love to be a part of your journey.<br/><br/>
                Contact me today to learn more and book a session.<br/><br/>
                Call today for a free 15-minute consultation<br/><br/>
                withgracemhcounseling@gmail.com<br/><br/>
                904-434-9285</p>
                {/* <br/><br/> */}
                {/* Start your healing journey today!</p> */}
            </div> 

        {/* <div> */}
            <form id='contactForm'> 
            <label>Name</label>
                <input
                type='text'
                placeholder='Enter your name' 
                name='name' 
                id='nameInput'
                value={formInfo.name}
                onChange={handleChange}/>
                <br/>
                <label>Address</label>
                <input
                type='text'
                placeholder='Enter your address' 
                name='address' 
                id='addressInput'
                value={formInfo.address}
                onChange={handleChange}/>
                <br/>
                <div className="contactInfo">
                <label>Email</label>
                <input
                type='email'
                placeholder='Enter your email' 
                name='email' 
                id='emailInput'
                value={formInfo.email}
                onChange={handleChange}/>
                <label>Phone</label>
                <input
                type='text'
                placeholder='Enter your phone number' 
                name='phone' 
                id='phoneInput'
                value={formInfo.phone}
                onChange={handleChange}/>
                </div>
                <br/>
                <label>Subject</label>
                <input
                type='text'
                placeholder='Type the subject' 
                name='subject' 
                id='subjectInput'
                value={formInfo.subject}
                onChange={handleChange}/>
                <br/>
                <label>Message</label>
                <textarea
                type='text'
                placeholder='Type your message here...' 
                name='message' 
                id='messageInput'
                value={formInfo.message}
                onChange={handleChange}/>
                <br/>
                {/* <input id='submitBtn' type='submit' value='Send Message'/> */}
                <button id='submitBtn' onClick={handleSubmit} >Send Message</button>
            </form>
            {/* </div> */}
            </div>
        </div>
    )
}