

import '../pages/contactPage/contact.less';
import { ContactInfo } from '../pages/contactPage/components/ContactInfo';
import { ContactForm } from '../pages/contactPage/components/ContactForm';


export const Contact=()=>{

    return (
      <div id="contact">
        <h2>Contact Me</h2>
        <div className="contactBox">
        <ContactInfo/>
        <ContactForm/>
        </div>
      </div>
    );
}