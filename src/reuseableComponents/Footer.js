import { Route, NavLink } from "react-router-dom";
import { SocialMediaButtons } from "./SocialMediaButtons";
import "../styles/Footer.less";
import { SiteMap } from "./SiteMap";
export const Footer = (props) => {
  {
    /*
        add emailing link functionality to footer email
    */
  }

  let buttonImgs = [
    {
      img: "https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=000000",
      link: "https://twitter.com/?lang=en",
      name: "X",
    },
    {
      img: "https://img.icons8.com/?size=100&id=87311&format=png&color=000000",
      link: "https://www.facebook.com/",
      name: "facebook",
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-tiktok.svg",
      link: "https://www.tiktok.com/en/",
      name: "tiktok",
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-linkedin.svg",
      link: "https://www.linkedin.com/",
      name: "linkedin",
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-instagram.svg",
      link: "https://www.instagram.com/",
      name: "instagram",
    },
    {
      img: "https://www.iconbolt.com/iconsets/neuicons/br-youtube.svg",
      link: "https://www.youtube.com/",
      name: "youtube",
    },
  ];
  return (
    <div id="footer">
      {/* new start */}
      <div id="footerItems">
        <div id="footerDescription">
          <img
            src="https://i.ibb.co/N6HKNCh/logo2.png"
            id="footerLogo"
            alt="Business Logo"
          />
          <br />
          <a id="email" href={`mailto:Withgracemhcounseling@gmail.com`}>
            Withgracemhcounseling@gmail.com
          </a>
        </div>
        <SiteMap />
      </div>
      <div id="socialMediaButtonBox">
        {buttonImgs.map((icon, i) => {
          return (
            <div key={i} className="socialMediaButtons">
              <SocialMediaButtons social={icon} />
            </div>
          );
        })}
      </div>
      {/* new end */}
      {/* old start */}
      {/* <div className="footerItem">
          <h3>With Grace Counseling LLC</h3>
          <p>Withgracemhcounseling@gmail.com</p>
        </div>

        <SiteMap />
        <div id="socialMediaButtonBox">
          {buttonImgs.map((icon, i) => {
            return (
              <div key={i} className="socialMediaButtons">
                <SocialMediaButtons social={icon} />
              </div>
            );
          })}
        </div> */}
      {/* old end */}
    </div>
  );
};
