import React from 'react';
import SuggestionPics from './SuggestionPics.jsx';
import SuggestionInfo from './SuggestionInfo.jsx';
import './Suggestion.css';

const Suggestion = (props) => {
  return (
    <div className="suggestion-template">
      <div className="suggestion-photo">
        <SuggestionPics photos={props.restaurant.photos} />
      </div>
      <div className="suggestion-info">
        <SuggestionInfo restaurant={props.restaurant} />
      </div>
    </div>
  );
};

export default Suggestion;