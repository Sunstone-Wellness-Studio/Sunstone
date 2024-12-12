import {ServicesSection} from '../pages/servicesPage/components/Services'
import { Faq } from '../pages/servicesPage/components/FAQPage'
import { Reviews } from '../pages/servicesPage/components/TestimonialsPage'

export const Services = () => {
    //make services,testimonials, grace circles, and faq all one page
    let services = [
        {
          service:"Individual Therapy", 
          description: "At our counseling center, we provide individual therapy sessions to help individuals work through their unique challenges. Our safe and welcoming space allows clients to explore their thoughts and feelings, heal from past experiences, and challenge themselves to grow and become more self-aware. We strive to create an environment of acceptance and understanding to support our clients on their journey.", 
          serviceImg:"https://static.wixstatic.com/media/11062b_918f77d49c6e47d395addb2e5dcef03c~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Therapy%20Session.jpg"
        },
        {
          service:"Family and Couple Therapy", 
          description: "Family therapy is an excellent way to help families resolve conflicts as a unit. It provides a safe and secure environment for family members to communicate openly and honestly with one another, which can lead to a deeper understanding of each other's perspectives. Family therapy also helps to strengthen family bonds and promote a healthier, more harmonious living environment.", 
          serviceImg:"https://static.wixstatic.com/media/11062b_832c5fda0a8445a6ba40576ce16b9c0d~mv2.jpg/v1/crop/x_731,y_0,w_4010,h_3648/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Family%20with%20Tablet.jpg"
        },
        {
          service:"DEI & Mental Health", 
          description: "Our DEI and Mental Health Workshop provides companies and individuals with comprehensive training that integrates both diversity, equity, and inclusion (DEI) and mental health. We strive to create an inclusive workplace by providing education and resources that help organizations implement real change in the workforce. Our workshop focuses on best practices for creating a safe, welcoming, and respectful environment for all employees.", 
          serviceImg:"https://static.wixstatic.com/media/11062b_938d4c49eaa04cd5ac225719e9d98bb4~mv2.jpeg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Supportive%20Friend.jpeg"
        },
        {
          service:"Therapy Circles", 
          description: "These supportive gatherings address common topics within our community, fostering guided conversations that encourage active listening and the sharing of experiences. These circles provide a safe space to discuss and learn from one another, led by a clinical  therapists.", 
          serviceImg:"https://static.wixstatic.com/media/11062b_406353fea8454b308bcd6bc8850a8f90~mv2.jpeg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Happy%20Friends.jpeg"
        }
      ]

      let reviews = [
        {
          author: "D. Dorsey",
          review: "Jae is one of the first counselors I've been able to communicate with in a manner that is professional, yet comfortable. She has a way of really helping you stay focused on the goal of therapy and aids in being a person of balance. She tells you what you need to hear, not necessarily what you want to hear to help make better decisions and look at situations in a different way. I love coming to our sessions as it doesn't feel like the \"normal\" therapy sessions. They're enjoyable experiences all thanks to Jae's outgoing personality and cozy atmosphere of the sessions."
        },
        {
          author: "B. Hindrich",
          review: "When I first met Jae, I knew she was going to be the therapist who really would help me. Her messages and resources are amazingly helpful and I feel very comfortable with her. Jae always makes an effort to be available to assist me when I'm in crisis and offers great advice. I really am so grateful I found her and I appreciate all the assistance she has given me so far!"
        },
        {
          author: "N.Bailey",
          review: "I can't say enough great things about this therapist. I went in blind, not knowing anything about her or the services and was a bit apprehensive (due to the level of care I'd previously received related to this matter from other caregivers) but after the first session I felt a level of ease. She pushed and challenged me mentally and emotionally all while having the highest level of compassion. No, change didn't happen overnight but she was there with me for each step of the way. I would highly recommend Jae to anyone in need of a therapist who truly listens, treats you like a person and not just a time slot. I can say she wholeheartedly wants to see her clients grow to the point she is no longer needed."
        },
        {
          author: "C. Nicolas",
          review: "I feel so lucky that I found Jae as my first therapist. We've been working together for almost 8 months now, and the way I approach life has transformed thanks to her. She shows that she truly cares by actively listening, asking questions that I wouldn't have thought to ask myself, and offering guidance that's tailored to me and where I am in my journey. As a young woman starting her career, Jae is the strong, uplifting force that helps me face challenges, practice self-love, and learn more about myself each week."
        },
        {
          author: "V. Sitiras",
          review: "If you've ever been hesitant to try therapy and don't want to feel like you're just a diagnosis, or that you're under a microscope — you don't have to worry about that with Jae Littles. Jae meets you where you are. Jae is a calming presence and will help you work through whatever you're dealing with. Jae teaches you how to take challenges in stride and will let you grieve if that's what you need too. I highly recommend Jae if you're a woman, a POC, younger like myself (mid twenties). All around the best therapist I have ever worked with. I've been in therapy on and off since I was 20 years old and I've made the most progress with Jae as my therapist just this past year compared to almost 5 years with another therapist."
        }
      ]
    
      let faqs = [
        {
          question: 'How long does each session take?',
          answer: 'Each session is 45- 60 minutes. You decide if you would like to be seen weekly, biweekly or monthly. I offer in-person and virtual services'
        },
        // {
        //   question:'Do you take insurance? What are the prices?', 
        //   answer:'Unfortunately, I do not take any insurance at this moment- just private pay. The fees are 80 per session.'},
        {
          question: 'What is the price and do you take insurance?',
          answer: 'My self-pay fee is 100 dollars. Currently, I accept the following insurances: Cigna, Aetna, Optum, and UnitedHealthcare.'
        },
        {
          question: 'Do you offer sliding scale rates?',
          answer: 'I do offer sliding scale fees. Prices will be determined after consultation. The goal is to get each person serviced who is in need.'
        },
        //   {
        //     question:'Do you offer telehealth or in office?', 
        //     answer:'I do offer both in person and virtual services. '}
      ]
    return (
        <div className='whiteBackOliveText'>
            <div>
                <h2>Our Services</h2>
            </div>
            {/* <div className="serviceBoxes"> */}
                {/* {props.services.map((service,i)=>{
                    return(
                        <div key={i} className="serviceBox lightOliveBackOliveText">
                            <img src={service.serviceImg}/>
                            <div className="serviceDescriptions">
                                <p>{service.description}</p>
                                <br/>
                                <h3>{service.service}</h3>
                            </div>
                        </div>
                    )
                })} */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                        <img src='https://images.unsplash.com/photo-1573495804664-b1c0849525af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' class='serviceImg' />
                        <img src='https://static.wixstatic.com/media/11062b_918f77d49c6e47d395addb2e5dcef03c~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Therapy%20Session.jpg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>At our counseling center, we provide individual therapy sessions to help individuals work through their unique challenges. Our safe and welcoming space allows clients to explore their thoughts and feelings, heal from past experiences, and challenge themselves to grow and become more self-aware. We strive to create an environment of acceptance and understanding to support our clients on their journey.</p>
                        <br/>
                        <p>A healthier, happier you</p>
                        <br/>
                        <h3>Individual Therapy</h3></div>
                </div> */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                        <img src='https://images.unsplash.com/photo-1584473457493-17c4c24290c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' class='serviceImg' />
                        <img src='https://static.wixstatic.com/media/11062b_832c5fda0a8445a6ba40576ce16b9c0d~mv2.jpg/v1/crop/x_731,y_0,w_4010,h_3648/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Family%20with%20Tablet.jpg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>Family therapy is an excellent way to help families resolve conflicts as a unit. It provides a safe and secure environment for family members to communicate openly and honestly with one another, which can lead to a deeper understanding of each other's perspectives. Family therapy also helps to strengthen family bonds and promote a healthier, more harmonious living environment.</p>
                        <br/>
                        <h3>Family and Couple Therapy</h3>
                        </div>
                </div> */}
                {/* <div id='team'>
                    <h3>Self Esteem Coaching<br/>Counseling</h3>
                    <div className='teamService'>
                        <img src='https://images.unsplash.com/photo-1571425046056-cfc17c664e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' class='serviceImg' />
                        <p>Self esteem coaching are offered on a sliding scale.The lowest rate is $60/session and the highest is $80/session. Price will be determined after consultation. </p>
                        <br/>
                        <br/>
                        <p>Healthier, happier self love</p>
                    </div>
                </div>     */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                            <img src='https://static.wixstatic.com/media/11062b_938d4c49eaa04cd5ac225719e9d98bb4~mv2.jpeg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Supportive%20Friend.jpeg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>Our DEI and Mental Health Workshop provides companies and individuals with comprehensive training that integrates both diversity, equity, and inclusion (DEI) and mental health. We strive to create an inclusive workplace by providing education and resources that help organizations implement real change in the workforce. Our workshop focuses on best practices for creating a safe, welcoming, and respectful environment for all employees.</p>
                        <br/>
                        <h3>DEI & Mental Health <br />Workshops</h3>
                        </div>
                </div> */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                            <img src='https://static.wixstatic.com/media/11062b_406353fea8454b308bcd6bc8850a8f90~mv2.jpeg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Happy%20Friends.jpeg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>These supportive gatherings address common topics within our community, fostering guided conversations that encourage active listening and the sharing of experiences. These circles provide a safe space to discuss and learn from one another, led by a clinical  therapists </p>
                        <br/>
                        <h3>Therapy Circles</h3>
                        </div>
                </div> */}
            {/* </div> */}
            <ServicesSection services={services}/>
            <Faq faqs={faqs}/>
            <Reviews reviews={reviews}/>
        </div>
    )
}