import React, { Fragment, useEffect } from 'react';
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
      document.getElementById('rownavbar').style.boxShadow =
        '0 3px 12px rgba(0, 0, 0, 0.25)';
    } else {
      document.getElementById('rownavbar').style.height = '100px';
      document.getElementById('rownavbar').style.backgroundColor = '#e4e4e4';
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
                <a className="navbar-elements" href="#services">
                  <p className="center-align">RESUME</p>
                </a>
              </li>
              <li>
                <a className="navbar-elements" href="#services">
                  <p className="center-align">PROJECTS</p>
                </a>
              </li>
              <li>
                <a className="navbar-elements" href="#services">
                  <p className="center-align">CONTACT</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li className="navbar-social-elements linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </li>
              <li className="navbar-social-elements">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </li>
              <li className="navbar-social-elements">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="landing">
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
