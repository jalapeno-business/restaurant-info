import React from 'react';
import './Suggestions.css';
import axios from 'axios';

export default class Suggestions extends React.Component {
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
      <div className="Suggestions">
        <div>
        More {this.props.cuisine} Near {this.props.name}
        </div>
      </div>
    );
  }
}
