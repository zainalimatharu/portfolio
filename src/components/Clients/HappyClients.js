import React from 'react';
import {
  faUserFriends,
  faAward,
  faCoffee,
  faLaptop,
  faTrophy,
  faMugHot,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HappyClients = () => {
  return (
    <div className="happclients">
      <div className="container mycontainer">
        <div className="row" style={{ marginBottom: '0px' }}>
          <HappyClient title="Happy Client" no="1" icon={faUserFriends} />
          <HappyClient title="Award Won" no="0" icon={faTrophy} />
          <HappyClient title="Cup of Coffee" no="6" icon={faMugHot} />
          <HappyClient title="Project Complete" no="5" icon={faLaptopCode} />
        </div>
      </div>
    </div>
  );
};

const HappyClient = props => {
  return (
    <div className="col l3 happyclient">
      <FontAwesomeIcon icon={props.icon} size="lg" />
      <h5 className="center-align">{props.title}</h5>
      <p className="center-align">{props.no}</p>
    </div>
  );
};

export default HappyClients;
