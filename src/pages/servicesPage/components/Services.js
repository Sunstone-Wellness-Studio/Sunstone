import {NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const ServicesSection = (props) => {
    

    
    
  return (
    <div className="serviceBoxes">
      {props.services.map((service, i) => {
        return (
          <div key={i} className="serviceBox lightOliveBackOliveText">
            <img src={service.serviceImg} />
            <div className="serviceDescriptions">
              <p>{service.description}{service.service === "Therapy Circles"? <HashLink to='/support_circles'> Learn more</HashLink>:""}</p>
              <br />
              <h3>{service.service}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
