// import { Footer } from "./Footer";
// import { LeftNavBar } from "./LeftNavBar";
// import { RightNavBar } from "./RightNavBar";
// import { ButtonBox } from "./ButtonBox";
// import {Route,Link} from 'react-router-dom';
import {WelcomeSection} from '../pages/homePage/components/Welcome';
import {QuoteSection} from '../pages/homePage/components/QuoteSection';
import {SafeSpaceSection} from '../pages/homePage/components/SafeSpace';
import {ApproachSection} from '../pages/homePage/components/Approach';
import {GetInTouchSection} from '../pages/homePage/components/GetInTouch';
import { HeroBanner } from '../reuseableComponents/HeroBanner';

//todos
// add media queries
// add images 

const Main=()=>{
    // props.reviews.sort(() => Math.random() - 0.5);
    let heroBannerImages = [
        {
          alt: "one on one therapy",
          img: "https://media.istockphoto.com/id/1433379079/photo/a-teen-girl-in-psychotherapy.jpg?s=1024x1024&w=is&k=20&c=F0SX3CODQTB1zF5nBjKV6hrWfTxYfC_IlwNHqYqEB1Q="
        },
        {
          alt: "couples therapy",
          img: "https://media.istockphoto.com/id/1191647689/photo/counselor-and-happy-african-american-couple-after-successful-marital-therapy.jpg?s=1024x1024&w=is&k=20&c=1Y4v8sRfOPah78uy6OXAcok3SKWJvqOEZqyD4Tl9LfY="
        },
        {
          alt: "family therapy",
          img: "https://media.istockphoto.com/id/1481686163/photo/family-therapy-and-children-support-mother-in-counseling-session-consulting-and-help-for.jpg?s=1024x1024&w=is&k=20&c=KtGja3GeOB9QBh6YNCcP39c3sD4p0Hxqq35fDvj91r0="
        },
        {
          alt: "DEI & Mental Health Workshops",
          img: "https://media.istockphoto.com/id/1141695665/photo/a-difficult-moment-during-a-breakout-session.jpg?s=1024x1024&w=is&k=20&c=cFu9LbL5ZF93-n5Xrw7mMgaSeqOgqxgXEgfe6fXLA0w="
        },
        {
          alt: "therapy circles",
          img: "https://media.istockphoto.com/id/1503234735/photo/female-therapist-writing-notes-during-a-group-therapy-session.jpg?s=1024x1024&w=is&k=20&c=jt3NMzDolwKy_lYZhjLjFVN90TlJHEIfocDSKVcnFio="
        },
        {
          alt: "with grace counseling therapists",
          img: "https://media.istockphoto.com/id/1603220523/photo/portrait-of-smiling-mature-latin-or-indian-business-man-and-european-business-woman-standing.jpg?s=1024x1024&w=is&k=20&c=Ov2gU0LwPeGmvh7KscgP76hgcAxXmsLJv5FT60Idpcs="
        }
      ]
    return(
    <div id='homePageGridContainer'>
        
        {/* <div>
            <h3 id='imageQuote1'>HI, I’m glad you’re here!</h3>
        <p id='imageQuote2'>Welcome to With Grace Counseling, LLC.</p>
        <img src='https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='group of women' id='mainPic'/>
        </div>
        <div id='intro'>
        <p>Sometimes we don’t have it all together and that’s okay. Sometimes one needs an healing space- free of judgment, and full of acceptance. I want to support and guide you on your journey to find and embrace your potential as you heal, energize, and become aware of your inner strengths.</p> 
        
        <p id='joy'> I am so excited that you are here!</p>
        </div>
        <ButtonBox/> 
        <div class='women'>
             <img src='https://i.ibb.co/2Px9ZM4/deltastuff.jpg' alt='group of women' id='womenImg'/>
             <p id='womenQuote'>"All my work, my life, everything I do is about survival, not just bare, awful, plodding survival, but survival with grace and faith. While one may encounter many defeats, one must not be defeated."<br/>- Maya Angelou</p>
         </div> 
         */}

         {/* new addition to run by Jae */}
        {/* <HeroBanner bannerImgs = {heroBannerImages}/> */}
        {/* new addition to run by Jae */}

        <WelcomeSection/>

        <QuoteSection/>
          
        <SafeSpaceSection/>

        <ApproachSection/>
        <GetInTouchSection/>
        
    </div>
    )
}

export default Main;