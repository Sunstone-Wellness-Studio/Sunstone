import {Route,NavLink} from 'react-router-dom';
import { DropDownNavLink } from './DropDownNavLink';
import '../styles/Header.less'

export const Header=()=>{
    let serviceRoute ={
        route: "/services",
        page: "Services",
        subRoutes: [
            {
                route: "/reviews",
                page: "Testimonials"
            },
            {
                route: "/faqs",
                page: "FAQ"
            },
            {
                route: "/support_circles",
                page: "Support Circles"
            },
        ]
    }

    let resourcesRoute = {
        route: "/resources",
        page: "Resources",
        subRoutes: [
            {
            route: "/shop",
            page: "Shop"
            },
        ]
    }

    return(
        <header className='headerNav'>
            <img src='https://i.ibb.co/N6HKNCh/logo2.png' id='sunstone' alt="Business Logo" />
            <h2 className='text--white'>With Grace Counseling, LLC</h2>
            <nav className='navBar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about_me'>About</NavLink>
                <NavLink to ='/services'>Services</NavLink>
                <NavLink to= '/resources'>Resources</NavLink>
                {/* <DropDownNavLink navLink={serviceRoute}/> */}
                {/* <DropDownNavLink navLink={resourcesRoute}/> */}
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
}