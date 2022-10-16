import { Footer } from "./Footer";
import { LeftNavBar } from "./LeftNavBar";
import { RightNavBar } from "./RightNavBar";
import { ButtonBox } from "./ButtonBox";
import {Route,Link} from 'react-router-dom';

//todos
// add media queries
// add images 

const Main=(props)=>{
    // props.reviews.sort(() => Math.random() - 0.5);
    return(
    <div id='body'>
        <div>
            <h3 id='imageQuote1'>HI, I’m glad you’re here!</h3>
        <p id='imageQuote2'>Welcome to With Grace Counseling, LLC.</p>
        <img src='https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='group of women' id='mainPic'/>
        </div>
        <div id='intro'>
        <p>Sometimes we don’t have it all together and that’s okay. Sometimes one needs an healing space- free of judgment, and full of acceptance. I want to support and guide you on your journey to find and embrace your potential as you heal, energize, and become aware of your inner strengths.</p>       
        {/* <p id='joy'> I am so excited that you are here!</p> */}
        </div>
        {/* <ButtonBox/> */}
        <div class='women'>
            <img src='https://i.ibb.co/2Px9ZM4/deltastuff.jpg' alt='group of women' id='womenImg'/>
            <p id='womenQuote'>"All my work, my life, everything I do is about survival, not just bare, awful, plodding survival, but survival with grace and faith. While one may encounter many defeats, one must not be defeated."<br/>- Maya Angelou</p>
        </div>
        
    </div>
    )
}

export default Main;