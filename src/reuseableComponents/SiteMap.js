import { HashLink } from 'react-router-hash-link';

export const SiteMap=()=>{
    //create newsletter page
    return(
        <div className="site-map">
            <HashLink smooth to='/#consultation'>Consultation</HashLink>
            <HashLink smooth to='/services#faqSection'>FAQ</HashLink>
            <HashLink smooth to='/support_circles'>Support Circles</HashLink>
            <HashLink smooth to='/resources#products'>Guided Journal</HashLink>
            <HashLink smooth to='/about_me'>About us</HashLink>
            {/* <HashLink smooth to=''>News letter</HashLink> */}
            {/* podcasts and local events in your area */}
            {/* <HashLink smooth to=''>Events</HashLink> */}
            {/* when you get more products */}
            {/* <HashLink smooth to=''>Shop</HashLink> */}
            {/* blogs and books for clients to explore */}
            {/* <HashLink smooth to=''>Explore</HashLink> */}
            <HashLink smooth to='/contact#contactContent'>Get in touch</HashLink>
        </div>
    )
}