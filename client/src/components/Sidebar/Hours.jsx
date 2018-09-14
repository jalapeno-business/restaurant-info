import React from 'react';

const Hours = (props) => {
  const openHours = <div>{props.day} - {props.businessHours[0]} - {props.businessHours[1]}</div>;
  return (
    props.currDay === props.day ?
      <b>{openHours}</b> :
      openHours
  );
};

export default Hours;