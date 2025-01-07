import { HashLink } from "react-router-hash-link";
// import "../styles/Footer.less";

export const SiteMap = () => {
  //create newsletter page
  return (
    <div className="siteMap">
      <div className="siteMapGroup">
        <HashLink smooth to="/#consultation" className="mapItem">
          Consultation
        </HashLink>
        <HashLink smooth to="/services#faqSection" className="mapItem">
          FAQ
        </HashLink>
      </div>
      <div className="siteMapGroup">
        <HashLink smooth to="/support_circles" className="mapItem">
          Support Circles
        </HashLink>
        <HashLink smooth to="/resources#products" className="mapItem">
          Guided Journal
        </HashLink>
      </div>
      <div className="siteMapGroup">
        <HashLink smooth to="/about_me" className="mapItem">
          About us
        </HashLink>
        <HashLink smooth to="/contact#contactContent" className="mapItem">
          Get in touch
        </HashLink>
      </div>
      {/* <HashLink smooth to=''>News letter</HashLink> */}
      {/* podcasts and local events in your area */}
      {/* <HashLink smooth to=''>Events</HashLink> */}
      {/* when you get more products */}
      {/* <HashLink smooth to=''>Shop</HashLink> */}
      {/* blogs and books for clients to explore */}
      {/* <HashLink smooth to=''>Explore</HashLink> */}
    </div>
  );
};
