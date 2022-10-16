import {Route,NavLink} from 'react-router-dom';
export const Footer=()=>{
    return(
        <div id='footer'>
        <div class='footerItem'>
            <h4>With Grace Counseling LLC</h4>
            <p>Email: Withgracemhcounseling@gmail.com</p>
        </div> 
        <div class='footerItem'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about_me'>About me</NavLink>
                <NavLink to='/services'>Services</NavLink>
                {/* <NavLink to='/ladies_room'>Ladies Room</NavLink> */}
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/faqs'>FAQ</NavLink>
            </nav>
        </div>
        </div>

    )
}