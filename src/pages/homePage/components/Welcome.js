import { HashLink } from "react-router-hash-link";
import "../../homePage/homePage.less";
import strings from "../../../assets/strings.json";

export const WelcomeSection = () => {
  return (
    <section id="homeSection" className="homePageSection">
      <div className="homeContent">
        <h1>{strings.home.homeSection.welcomeHeader}</h1>

        <p>{strings.home.homeSection.welcomeMessage}</p>
        <br/>
        <p>{strings.home.homeSection.welcomePurpose}</p>

        <button className="homeSectionButton">
          <HashLink smooth to="/#consultation">
            {strings.reuseableStrings.freeConsultButton}
          </HashLink>
        </button>
      </div>
    </section>
  );
};
