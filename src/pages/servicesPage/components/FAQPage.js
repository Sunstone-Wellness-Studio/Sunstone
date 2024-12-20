import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Faq = (props) => {
    const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    return (
        <div id='faqSection'>
            <h2>FAQs</h2>
            <img src='https://images.unsplash.com/photo-1555817132-c5ec1afbd2a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='faqs' id='faqImg' />
            <div className="faqs" >
                {props.faqs.map((faq, i) => {
                    return (
                        <div key={i} className='faq'>
                            <p>{faq.question}</p>
                            <p>{faq.answer}</p>
                        </div>)

                })}
            </div>


        </div>
    )
}