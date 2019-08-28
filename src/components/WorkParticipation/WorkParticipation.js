import React, { Fragment } from 'react';

const WorkParticipation = () => {
  return (
    <Fragment>
      <div id="workparticipation" className="row workparticipation" style={{ margin: '0px' }}>
        <div className="container">
          <h3 className="center-align">Work Participation</h3>
          <p className="center-align wp-heading-detail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            rem dignissimos repellendus iure dolorum maiores illo.
          </p>
          <div className="row">
            <Dummy
              title="Front end Designer"
              company="Final Year Project"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat."
              time="2019"
            />
            <Dummy
              title="Full Stack Developer"
              company="MERN Stack"
              detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat."
              time="2019"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Dummy = props => {
  return (
    <div
      style={{ margin: '60px 0px 25px 0px' }}
      className="col l6 m6 s10 offset-s1"
    >
      <div className="mywp-time">
        <p className="center-align">{props.time}</p>
      </div>
      <div className="col s12 mywp">
        <h4>{props.title}</h4>
        <small>{props.company}</small>
        <div className="mywp-detail">
          <p>{props.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkParticipation;
