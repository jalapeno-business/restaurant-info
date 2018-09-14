import React from 'react';
import './Sidebar.css';
import Hours from './Hours.jsx';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div>
        <Hours times={props.info.times}/>
      </div>
      <div>
        {props.info.location ? props.info.location.address : 'Loading'}, San Francisco, CA 94112, USA 
      </div>
      <div>
        {props.info.phone ? `(${props.info.phone.slice(0, 3)}) ${props.info.phone.slice(4)}` : 'Loading'}
      </div>
      <div>
        {props.info.website}
      </div>
      <div>Get Directions</div>
    </div>
  );
};

export default Sidebar;