import React from 'react';
import './SuggestionsContainer.css';
import axios from 'axios';
import Suggestion from './Suggestion.jsx';

export default class SuggestionsContainer extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      suggestions: []
    };

  }

  getSuggestions(id) {
    axios.get(`/restaurant/${id}/suggestions`)
      .then((response) => {
        this.setState({
          suggestions: response.data
        });
      });
  }

  componentDidMount() {
    this.getSuggestions(this.props.id);
  }

  render() {
    return (
      <div className="Suggestions-Container">
        <div>
        More {this.props.cuisine} Near {this.props.name}
        </div>
        <div className="Suggestions">
          {this.state.suggestions.map((restaurant, index) => {
            return <Suggestion key={index} restaurant={restaurant} />;
          })}
        </div>
      </div>
    );
  }
}
