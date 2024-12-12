import logo from './logo.svg';
// import './App.css';
import './App.less';
import HomePage from './appMainPage/HomePage'
import { Route, Switch } from 'react-router-dom';
import { AboutMe } from './pages/aboutPage/AboutMePage';
import { LadiesRoom } from './appMainPage/LadiesRoom';
import { Services } from './appMainPage/ServicesPage';
import { Header } from './reuseableComponents/Header';
import { RightNavBar } from './appMainPage/RightNavBar';
import { Footer } from './reuseableComponents/Footer';
import { Contact } from './appMainPage/ContactPage';
import { SupportCircles } from './appMainPage/SupportCirclesPage';
import { Resources } from './appMainPage/Resources';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ProductProvider } from "./ProductContext"; 
import { HeroBanner } from './reuseableComponents/HeroBanner';

{/*
  Todo...
  styling
  media queries
*/}
toast.configure()
function App() {
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
  let buttonImgs = [
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-twitter.svg",
      link: "https://twitter.com/?lang=en",
      name: "twitter"
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-fb-sq.svg",
      link: "https://www.facebook.com/",
      name: "facebook"
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-tiktok.svg",
      link: "https://www.tiktok.com/en/",
      name: "tiktok"
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-linkedin.svg",
      link: "https://www.linkedin.com/",
      name: "linkedin"
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-instagram.svg",
      link: "https://www.instagram.com/",
      name: "instagram"
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-youtube.svg",
      link: "https://www.youtube.com/",
      name: "youtube"
    }
  ]

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

  let products = [
    {
      img: "https://static.wixstatic.com/media/31f747_6c70620bc4ad492dbbd10c97b26923cf~mv2.png/v1/fill/w_1960,h_1102,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/31f747_6c70620bc4ad492dbbd10c97b26923cf~mv2.png",
      altText:"With Grace Guided Journal",
      title: "Give it some Grace: guided journal",
      description: "Give it some Grace: A Self-Guided Journal is a therapy-guided journal with 60+ therapy prompts, coping skills, and more resources to heal and practice self-care. This journal was written by a clinical therapist and the questions were vetted by clients in their healing journey. This journal was made for anyone contemplating, starting, currently on, or maintaining their healing journey. We are honored that Give it some Grace can be a part of your journey.",
      price: 15.00,
      externalLink: "https://www.amazon.com/Give-some-Grace-Jae-Littles/dp/B0BW27PCFV",
      route: "journal"

    },
    {
      img: "dummy data",
      altText:"DummyData",
      title: "Grace Stickers",
      description: "dummy data",
      price: 5.00,
      externalLink: "dummy data",
      route: "/"
    },
    {
      img: "dummy data",
      altText:"DummyData",
      title: "Grace Keychains",
      description: "dummy data",
      price: 10.00,
      externalLink: "dummy data",
      route: "/"
    }
  ]

  // let [productInfo, setProductInfo] = useState(
  //   {
  //     img: "",
  //     altText:"",
  //     title: "",
  //     description: "",
  //     price: null,
  //     externalLink: "",
  //     route: ""
  //   }
  // )

  
  // console.log("app level product is "+ productInfo.title)

//   useEffect(() => {
//     console.log("Updated productInfo:", productInfo);
// }, [productInfo]);

  // function updateProductRoute(product){
  //   setProductInfo({
  //     img: product.img,
  //     altText: product.altText,
  //     title: product.title,
  //     description: product.description,
  //     price: product.price,
  //     externalLink: product.externalLink,
  //     route: product.route
  //   })
  //   console.log("inside update product route product " + product)
  //   // console.log("inside update product route productinfo title is " + productInfo.title)
  // }
  // function resetProductRoute(){
  //   setProductInfo({
  //     img: "",
  //     altText:"",
  //     title: "",
  //     description: "",
  //     price: null,
  //     externalLink: "",
  //     route: ""
  //   })
  // }

  return (
    // <ProductProvider>
    <div className="App">
      
        <Header/>
        
        <main>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            {/* <Route exact path='/ladies_room' component={LadiesRoom}/> */}
            <Route path='/about_me' component={AboutMe} />
            <Route path='/services' >
              <Services services={services}/>
            </Route>
            {/* <Route path='/reviews' >
              <Reviews reviews={reviews} />
            </Route> */}
            <Route  path='/contact' component={Contact} />
            {/* <Route path='/faqs'>
              <Faq faqs={faqs} />
            </Route> */}
            <Route path='/support_circles' component={SupportCircles} />
            <Route path='/resources' component={Resources} />
            {/* <Route path='/shop'>
              <Shop products={products} onStateChange={updateProductRoute}/>
            </Route> */}
            {/* <Route path='/product'>
              <Product productInfo={productInfo}/>
            </Route> */}
          </Switch>
        </main>
      <Footer buttonImgs={buttonImgs} />
    </div>
    // </ProductProvider>
  );
}

export default App;
