import React, { Fragment } from 'react';
import myownimage2 from './myownimage2.jpg';
import sign2 from './sign2.jpg';

const ZainAli = () => {
  return (
    <Fragment>
      <div className="row zainali" style={{ margin: '0px' }}>
        <div className="container">
          <div className="col l5">
            <img src={myownimage2} width="100%" alt="" />
          </div>
          <div className="col l7 zainalititle">
            <h4>ZAIN ALI</h4>
            <p>
              I'm a passionate <span>Web Developer</span>
            </p>
            <p className="details">
              Obviously I'M Web Designer. Web Developer with over 3 years of
              experience. Experienced with all stages of the development cycle
              for dynamic web projects. The as opposed to using 'Content here,
              content here', making it look like readable English.{' '}
            </p>
            <p className="details">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <img className="signature" width="100%" src={sign2} alt="" />
            <button className="button red-button">VIEW PORTFOLIO</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ZainAli;
