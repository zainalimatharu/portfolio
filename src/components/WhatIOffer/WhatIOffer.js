import React, { Fragment } from 'react';
import { faLaptopCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommonsPdAlt } from '@fortawesome/free-brands-svg-icons';

const WhatIOffer = () => {
  return (
    <Fragment>
      <div className="row whatioffer" style={{marginBottom: "0px"}}>
        <h4 className="center-align">WHAT I OFFER</h4>
        <div className="container mycontainer">
          <Offer
            title="WEB DESIGN"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat."
            icon={faCodeBranch}
          />
          <Offer
            title="WEB DEVELOPMENT"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat."
            icon={faLaptopCode}
          />
          <Offer
            title="FULL STACK APPLICATION"
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat."
            icon={faCreativeCommonsPdAlt}
          />
        </div>
      </div>
    </Fragment>
  );
};

const Offer = props => {
  return (
    <Fragment>
      <div className="col l4">
        <div className="col l10 offset-l1 offer">
          <FontAwesomeIcon icon={props.icon} size="lg" />
          <h5 className="center-align unitoffer">{props.title}</h5>
          <p className="center-align">{props.detail}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatIOffer;
