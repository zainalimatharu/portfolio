import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faSkypez
} from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const shrinkNav = () => {
    window.onscroll = () => scrollFunction();
  };
  const scrollFunction = () => {
    console.log('Assalamu Alaikum');
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById('rownavbar').style.height = '80px';
      document.getElementById('rownavbar').style.backgroundColor = 'white';
      document.getElementById('rownavbar').style.opacity = '0.99';
      document.getElementById('rownavbar').style.boxShadow =
        '0 3px 12px rgba(0, 0, 0, 0.25)';
    } else {
      document.getElementById('rownavbar').style.height = '100px';
      document.getElementById('rownavbar').style.backgroundColor = '#e4e4e4';
      document.getElementById('rownavbar').style.opacity = '1.0';
      document.getElementById('rownavbar').style.boxShadow = 'none';
    }
  };
  useEffect(() => {
    shrinkNav();
  }, []);
  return (
    <Fragment>
      <nav
        className="z-depth-0 transparent"
        id="navbar"
        style={{ margin: '0px', padding: '0px' }}
      >
        <div className="nav-wrapper row" id="rownavbar">
          <div className="nav-left">
            <NavLink to="/" className="home left">
              <p>ZAIN</p>
            </NavLink>
            <ul className="right">
              <li>
                <NavLink className="navbar-elements" to="/">
                  <p className="center-align">HOME</p>
                </NavLink>
              </li>
              <li>
                <a className="navbar-elements" href="#services">
                  <p className="center-align">SERVICES</p>
                </a>
              </li>
              <li>
                <a className="navbar-elements" href="#workparticipation">
                  <p className="center-align">RESUME</p>
                </a>
              </li>
              <li>
                <a className="navbar-elements" href="#portfolio">
                  <p className="center-align">PROJECTS</p>
                </a>
              </li>
              <li>
                <a className="navbar-elements" href="#contactme">
                  <p className="center-align">CONTACT</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li className="navbar-social-elements linkedin">
                <a href="https://www.linkedin.com/in/zainalimatharu/">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
              </li>
              <li className="navbar-social-elements">
                <a href="https://twitter.com/zaynalimatharu">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li className="navbar-social-elements">
                <a href="https://web.facebook.com/Zainalimatharu">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="landing">
        <div className="landing-left">
          <div className="container">
            <div className="row">
              <div className="col l9 m10 s12 title-heading">
                <p className="sub-title">Looking for a Web Developer !</p>
                <h1>I'M Zain Ali</h1>
                <p className="details">
                  Obviously I'M Web Designer. Web Developer with over 3 years of
                  experience. Experienced with all stages of the development
                  cycle for dynamic web projects.
                </p>
                <a href="#contactme" className="button red-button">
                  HIRE ME
                </a>
                <a href="#zainali" className="button white-button">
                  EXPLORE MORE <FontAwesomeIcon icon={faAngleDown} size="sm" />
                </a>
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
