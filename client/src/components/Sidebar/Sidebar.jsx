import React from 'react';
import './Sidebar.css';
import CurrentHours from './CurrentHours.jsx';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div className="sidebar-lines">
        <img className="icon" src={require('./images/hours.png')} alt="hours"/>
        <div className="sidebar-text">
          <CurrentHours times={props.info.times}/>  
        </div>
      </div>
      <div className="sidebar-lines">
        <img style={{ marginLeft: 2 }} className="icon" src={require('./images/location.png')} alt="location"/>
        <div className="sidebar-text">
          {props.info.location ? props.info.location.address : 'Loading'}, San Francisco, CA 94112, USA   
        </div>
      </div>
      <div className="sidebar-lines">
        <img className="icon" src={require('./images/phone.png')} alt="phone"/>
        <div className="sidebar-text">
          {props.info.phone ? `(${props.info.phone.slice(0, 3)}) ${props.info.phone.slice(4)}` : 'Loading'} 
        </div>
      </div>
      <div className="sidebar-lines">
        <img className="icon" src={require('./images/website.png')} alt="website"/>
        <div className="sidebar-text">
          {props.info.website}  
        </div>
      </div>
      <div className="sidebar-lines">
        <img style={{ marginLeft: 2 }} className="icon" src={require('./images/directions.png')} alt="directions"/>
        <div className="sidebar-text">
          Get Directions  
        </div>
      </div>
    </div>
  );
};

export default Sidebar;