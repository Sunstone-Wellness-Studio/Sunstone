

import '../pages/contactPage/contact.less';
import { ContactInfo } from '../pages/contactPage/components/ContactInfo';
import { ContactForm } from '../pages/contactPage/components/ContactForm';


export const Contact=()=>{

    return (
      <div id="contact">
        <h1>Contact Us</h1>
        <div className="contactBox">
        <ContactInfo/>
        <ContactForm/>
        </div>
      </div>
    );
}