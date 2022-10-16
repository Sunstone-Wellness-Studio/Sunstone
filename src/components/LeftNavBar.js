import {Route,NavLink} from 'react-router-dom';
export const LeftNavBar=()=>{
    return(
        <nav className='navBar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about_me'>About me</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/reviews'>Reviews</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/faqs'>FAQ</NavLink>
        </nav>

    )
}