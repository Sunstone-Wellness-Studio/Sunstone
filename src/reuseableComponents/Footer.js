import {Route,NavLink} from 'react-router-dom';
import { SocialMediaButtons } from './SocialMediaButtons';
import '../styles/Footer.less'
export const Footer=(props)=>{
    return(
        <div id='footer'>
            <div className='footerItem'>
                <h4>With Grace Counseling LLC</h4>
                <p>Withgracemhcounseling@gmail.com</p>
            </div>
            {/* <div class='footerItem'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about_me'>About me</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/ladies_room'>Ladies Room</NavLink>
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/faqs'>FAQ</NavLink>
            </nav>
        </div> 
        */}
            {/* <fieldset>
                            <legend>Connect with us</legend> */}
            <div id="socialMediaButtonBox">{props.buttonImgs.map((icon, i) => {
                return (
                    <div key={i} className="socialMediaButtons">
                        {/* <p>{icon.img}</p> */}
                        
                            {/* <a href={icon.link} target="_blank">
                                <img src={icon.img} alt={icon.name} className="socialMediaButton" />
                            </a>
                         */}
                        <SocialMediaButtons  social={icon} />
                    </div>
                )
            })}
            </div>
            {/* </fieldset> */}
            {/* <button>Instagram</button>
        <button>Facebook</button>
        <button>Twitter</button>
        <button>LinkedIn</button>
        <button>TikTok</button> */}
        </div>

    )
}