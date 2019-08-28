import React from 'react';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarked,
  faMapMarker,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactMe = () => {
  return (
    <div className="row" id="contactme">
      <div className="container">
        <h3 className="center-align">CONTACT ME</h3>
        <div className="col l4 m4 s10 offset-s1 contact">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          <h4 className="center-align">Phone</h4>
          <p className="center-align">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos kcs.
          </p>
          <p className="center-align contact-info">+92 340 5943551</p>
        </div>
        <div className="col l4 m4 s10 offset-s1 contact">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <h4 className="center-align">Email</h4>
          <p className="center-align">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos kcs.
          </p>
          <p className="center-align contact-info">zainalimatharu@gmail.com</p>
        </div>
        <div className="col l4 m4 s10 offset-s1 contact">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          <h4 className="center-align">Location</h4>
          <p className="center-align">
            V.P.O Jalhan, Tehsil Noshehra Virkan, District Gujranwala, Pakistan.
          </p>
          <p className="center-align contact-info">
            <a style={{ color: '#dc3545' }} href="">View on Google map</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
