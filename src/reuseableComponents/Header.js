import {Route,NavLink} from 'react-router-dom';
import { DropDownNavLink } from './DropDownNavLink';
import '../styles/Header.less'

export const Header=()=>{
    {/*
        when on specific page the navlink should have black text
        implement functionality
    */}
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
            <img src='https://i.ibb.co/N6HKNCh/logo2.png' id='headerLogo' alt="Business Logo" />
            <h1 id='headerTitle'>With Grace Counseling, LLC</h1>
            <nav className='navBar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink activeStyle={{ color:'black' }} to='/about_me'>About</NavLink>
                <NavLink activeStyle={{ color:'black' }} to ='/services'>Services</NavLink>
                <NavLink activeStyle={{ color:'black' }} to= '/resources'>Resources</NavLink>
                {/* <DropDownNavLink navLink={serviceRoute}/> */}
                {/* <DropDownNavLink navLink={resourcesRoute}/> */}
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
}