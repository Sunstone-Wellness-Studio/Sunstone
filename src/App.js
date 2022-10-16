import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import Main from './components/HomePage';
import {Route, Link, Switch} from 'react-router-dom';
import { AboutMe } from './components/AboutMe';
import { LadiesRoom } from './components/LadiesRoom';
import {Services} from './components/Services';
import {LeftNavBar} from './components/LeftNavBar';
import {RightNavBar} from './components/RightNavBar';
import {Footer} from './components/Footer';
import {Reviews} from './components/Reviews';
import {Contact} from './components/Contact';
import { Faq } from './components/FAQ';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

{/*
  Todo...
  media queries
  yup form schema
  git ignore for sensitive data
*/} 
toast.configure()
function App(props) {
  let reviews=[
    {
    author:"D. Dorsey",
    review: "Jae is one of the first counselors I've been able to communicate with in a manner that is professional, yet comfortable. She has a way of really helping you stay focused on the goal of therapy and aids in being a person of balance. She tells you what you need to hear, not necessarily what you want to hear to help make better decisions and look at situations in a different way. I love coming to our sessions as it doesn't feel like the \"normal\" therapy sessions. They're enjoyable experiences all thanks to Jae's outgoing personality and cozy atmosphere of the sessions."
    },
    {
    author:"B. Hindrich",
    review: "When I first met Jae, I knew she was going to be the therapist who really would help me. Her messages and resources are amazingly helpful and I feel very comfortable with her. Jae always makes an effort to be available to assist me when I'm in crisis and offers great advice. I really am so grateful I found her and I appreciate all the assistance she has given me so far!"
    },
    {
        author:"N.Bailey",
        review: "I can't say enough great things about this therapist. I went in blind, not knowing anything about her or the services and was a bit apprehensive (due to the level of care I'd previously received related to this matter from other caregivers) but after the first session I felt a level of ease. She pushed and challenged me mentally and emotionally all while having the highest level of compassion. No, change didn't happen overnight but she was there with me for each step of the way. I would highly recommend Jae to anyone in need of a therapist who truly listens, treats you like a person and not just a time slot. I can say she wholeheartedly wants to see her clients grow to the point she is no longer needed."
    },
    {
        author:"C. Nicolas",
        review: "I feel so lucky that I found Jae as my first therapist. We've been working together for almost 8 months now, and the way I approach life has transformed thanks to her. She shows that she truly cares by actively listening, asking questions that I wouldn't have thought to ask myself, and offering guidance that's tailored to me and where I am in my journey. As a young woman starting her career, Jae is the strong, uplifting force that helps me face challenges, practice self-love, and learn more about myself each week."
    },
    {
        author:"V. Sitiras",
        review: "If you've ever been hesitant to try therapy and don't want to feel like you're just a diagnosis, or that you're under a microscope — you don't have to worry about that with Jae Littles. Jae meets you where you are. Jae is a calming presence and will help you work through whatever you're dealing with. Jae teaches you how to take challenges in stride and will let you grieve if that's what you need too. I highly recommend Jae if you're a woman, a POC, younger like myself (mid twenties). All around the best therapist I have ever worked with. I've been in therapy on and off since I was 20 years old and I've made the most progress with Jae as my therapist just this past year compared to almost 5 years with another therapist."
    }
]

  let faqs=[
    {
      question:'How long does each session take?', 
      answer:'Each session is 45- 60 minutes. You decide if you would like to be seen weekly, biweekly or monthly. I offer in-person and virtual services'},
    {
      question:'Do you take insurance? What are the prices?', 
      answer:'Unfortunately, I do not take any insurance at this moment- just private pay. The fees are 80 per session.'},
    {
      question:'Do you offer sliding scale?', 
      answer:'I do offer sliding scale fees. Prices will be determined after consultation. The goal is to get each person serviced who is in need.'},
    {
      question:'Do you offer telehealth or in office?', 
      answer:'I do offer both in person and virtual services. '}
  ]
  return (
    <div className="App">
      <div className='headerNav'>
        <img src='https://i.ibb.co/N6HKNCh/logo2.png' id='sunstone' alt="Business Logo"/>
        <LeftNavBar/>
        {/* <RightNavBar/> */}
      </div>
      <Switch>    
        <Route exact path='/'>
          <HomePage reviews={reviews}/>
        </Route>
        {/* <Route exact path='/ladies_room' component={LadiesRoom}/> */}
        <Route exact path='/about_me' component={AboutMe}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/reviews' >
          <Reviews reviews={reviews}/>
        </Route>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/faqs'>
          <Faq faqs={faqs}/>
        </Route>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
