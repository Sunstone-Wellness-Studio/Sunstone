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
            
            {/* <img src='https://images.unsplash.com/photo-1555817132-c5ec1afbd2a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='FAQs' id='faqImg' /> */}
            <div id='faqBackgroundImg' style={{'--img': "url('https://static.wixstatic.com/media/11062b_e12d54be8cc041ba966e4b55e87f8eff~mv2.jpg/v1/fill/w_2850,h_960,fp_0.64_0.18,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e12d54be8cc041ba966e4b55e87f8eff~mv2.jpg')"}} >
            <h2>FAQs</h2>
            </div>
            <div className="faqs" >
                {props.faqs.map((faq, i) => {
                    return (
                        <div key={i} className='faq'>
                            <h3>{faq.question}</h3>
                            <br/>
                            <p>{faq.answer}</p>
                        </div>)

                })}
            </div>


        </div>
    )
}