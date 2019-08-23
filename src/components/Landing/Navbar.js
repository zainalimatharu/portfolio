import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faSkype
} from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="z-depth 0 transparent">
        <div className="nav-wrapper">
          <div className="navbar-left">
            <div className="container">
              <NavLink to="/" className="home">
                ZAIN
              </NavLink>
              <ul className="right">
                <li className="navbar-elements">Home</li>
                <li className="navbar-elements">Services</li>
                <li className="navbar-elements">Resume</li>
                <li className="navbar-elements">Pojects</li>
                <li className="navbar-elements">Blog</li>
                <li className="navbar-elements">Contact</li>
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <div className="container">
              <ul>
                <li className="navbar-social-elements">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </li>
                <li className="navbar-social-elements">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </li>
                <li className="navbar-social-elements">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </li>
                {/* <li className="navbar-social-elements">
                <FontAwesomeIcon icon={faSkype} size="lg" />
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="row" style={{ margin: '0px' }}>
        <div className="landing-left">
          <div className="container">
            <div className="row">
              <div className="col s9 title-heading">
                <p className="sub-title">Looking for a Web Developer !</p>
                <h1>I'M Zain Ali</h1>
                <p className="details">
                  Obviously I'M Web Designer. Web Developer with over 3 years of
                  experience. Experienced with all stages of the development
                  cycle for dynamic web projects.
                </p>
                <button className="button red-button">HIRE ME</button>
                <button className="button white-button">
                  DOWNLOAD CV{' '}
                  <FontAwesomeIcon icon={faFileDownload} size="sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-right" />
      </div>
    </Fragment>
  );
};

export default Navbar;
