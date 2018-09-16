import React from 'react';
import SuggestionPics from './SuggestionPics.jsx';
import SuggestionInfo from './SuggestionInfo.jsx';
import './Suggestion.css';

export default class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({
      onHover: !this.state.onHover
    });
  }

  render() {
    return (
      <div 
        className="suggestion-template" 
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className="suggestion-photo">
          <SuggestionPics photos={this.props.restaurant.photos} />
        </div>
        <div className="suggestion-info">
          <SuggestionInfo isHovered={this.state.onHover} restaurant={this.props.restaurant} />
        </div>
      </div>
    );
  }
}