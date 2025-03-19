import { HashLink } from 'react-router-hash-link';

export const ServicesSection = (props) => {
    

    
    
  return (
    <div className="serviceBoxes">
      {props.services.map((service, i) => {
        return (
          <div key={i} className="serviceBox lightOliveBackOliveText">
            <img className='serviceImg' src={service.serviceImg} alt={service.service} />
            <div className="serviceDescriptions">
              <p className='serviceDescription'>{service.description}{service.service === "Therapy Circles"? <div><HashLink to='/support_circles' id='circles'>Learn more</HashLink></div>:""}</p>
              <br />
              <br/>
              <h4>{service.service}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
