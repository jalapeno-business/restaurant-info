import React from 'react';
import PropTypes from 'prop-types';

const Hours = (props) => {
  const { day, businessHours, currDay } = props;
  const openHours = (
    <div>
      {day}
      -
      {businessHours[0]}
      -
      {businessHours[1]}
    </div>
  );
  return (
    currDay === day
      ? <b>{openHours}</b>
      : openHours
  );
};

Hours.propTypes = {
  day: PropTypes.string.isRequired,
  businessHours: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currDay: PropTypes.string.isRequired,
};

export default Hours;
