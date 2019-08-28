import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMAvailable = () => {
  return (
    <div id="imavailable">
      <h4 className="center-align">I'm Available For Freelance Project.</h4>
      <p className="center-align">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
        repellendus repudiandae dolores facere quis nisi iure? Lorem, ipsum
        dolor.
      </p>
      <a href="#contactme" className="button white-button white-text">
        HIRE ME <FontAwesomeIcon icon={faAngleDown} size="sm" />
      </a>
    </div>
  );
};

export default IMAvailable;
