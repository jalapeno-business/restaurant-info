import React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';
import CurrentHours from './CurrentHours';
import hours from './images/hours.png';
import location from './images/location.png';
import phone from './images/phone.png';
import website from './images/website.png';
import directions from './images/directions.png';

const Sidebar = (props) => {
  const { info } = props;

  return (
    <div className="Sidebar">
      <div className="sidebar-lines">
        <img className="icon" src={hours} alt="hours" />
        <div className="sidebar-text">
          <CurrentHours times={info.times} />
        </div>
      </div>
      <div className="sidebar-lines">
        <img style={{ marginLeft: 2 }} className="icon" src={location} alt="location" />
        <div className="sidebar-text">
          {info.location ? info.location.address : 'Loading'}
          , San Francisco, CA 94112, USA
        </div>
      </div>
      <div className="sidebar-lines">
        <img className="icon" src={phone} alt="phone" />
        <div className="sidebar-text">
          {info.phone ? `(${info.phone.slice(0, 3)}) ${info.phone.slice(4)}` : 'Loading'}
        </div>
      </div>
      <div className="sidebar-lines">
        <img className="icon" src={website} alt="website" />
        <div className="sidebar-text">
          {info.website}
        </div>
      </div>
      <div className="sidebar-lines">
        <img style={{ marginLeft: 2 }} className="icon" src={directions} alt="directions" />
        <div className="sidebar-text">
          Get Directions
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  info: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      neighborhood: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Sidebar;
