import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div id="footer">
      <h3 style={{ margin: '0px' }} className="center-align">
        <a href="#navbar">Zain</a>
      </h3>
      <div className="row" id="footer-line" />
      <p className="center-align">
        © 2019 Zain. Designed with <FontAwesomeIcon icon={faHeart} size="sm" />
      </p>
    </div>
  );
};

export default Footer;
