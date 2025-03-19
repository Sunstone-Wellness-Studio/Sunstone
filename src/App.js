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
import { FlagsProvider } from './FlagsContext';
import { ProductProvider } from "./ProductContext"; 
import { HeroBanner } from './reuseableComponents/HeroBanner';

{/*
  Todo...
  add newsletter subscription feature
  styling
  media queries
*/}
toast.configure()
function App() {
  



  // let products = [
  //   {
  //     img: "https://static.wixstatic.com/media/31f747_6c70620bc4ad492dbbd10c97b26923cf~mv2.png/v1/fill/w_1960,h_1102,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/31f747_6c70620bc4ad492dbbd10c97b26923cf~mv2.png",
  //     altText:"With Grace Guided Journal",
  //     title: "Give it some Grace: guided journal",
  //     description: "Give it some Grace: A Self-Guided Journal is a therapy-guided journal with 60+ therapy prompts, coping skills, and more resources to heal and practice self-care. This journal was written by a clinical therapist and the questions were vetted by clients in their healing journey. This journal was made for anyone contemplating, starting, currently on, or maintaining their healing journey. We are honored that Give it some Grace can be a part of your journey.",
  //     price: 15.00,
  //     externalLink: "https://www.amazon.com/Give-some-Grace-Jae-Littles/dp/B0BW27PCFV",
  //     route: "journal"

  //   },
  //   {
  //     img: "dummy data",
  //     altText:"DummyData",
  //     title: "Grace Stickers",
  //     description: "dummy data",
  //     price: 5.00,
  //     externalLink: "dummy data",
  //     route: "/"
  //   },
  //   {
  //     img: "dummy data",
  //     altText:"DummyData",
  //     title: "Grace Keychains",
  //     description: "dummy data",
  //     price: 10.00,
  //     externalLink: "dummy data",
  //     route: "/"
  //   }
  // ]

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
    <FlagsProvider>
    <div className="App">
      
        <Header/>
        
        <main>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            {/* <Route exact path='/ladies_room' component={LadiesRoom}/> */}
            <Route path='/about_me' component={AboutMe} />
            <Route path='/services' component={Services} />
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
      <Footer  />
    </div>
    </FlagsProvider>
    // </ProductProvider>
  );
}

export default App;
