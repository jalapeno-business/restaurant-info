import React from 'react';
import './SuggestionInfo.css';

export default class SuggestionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0
    };

  }

  calculateAvgRating(reviews) {
    const totalRating = reviews.reduce((sum, {numOfStars}) => sum + numOfStars, 0);
    const avgRating = (totalRating/reviews.length).toFixed(1);
    this.setState({
      avgRating: avgRating
    });
  }

  componentDidMount() {
    this.calculateAvgRating(this.props.restaurant.reviews);
  }

  render() {
    let tempArray = [];
    for (let i = 0; i < this.props.restaurant.details.dollarSigns; i++) {
      tempArray.push(0);
    }
    const spacerMargin = {
      margin: '0 3px',
    };
    const suggestionName = 
      this.props.isHovered ? 
        'suggestion-name' :
        'suggestion-name underline'; 

    return (
      <div id="suggestion-info">
        <span className={suggestionName}>
          {this.props.restaurant.businessInfo.name}
        </span>
        <div className="suggestion-categories">
          <span>{this.props.restaurant.details.cuisine}</span>
          <span style={spacerMargin}> · </span>
          <span>{this.props.restaurant.businessInfo.location.neighborhood}</span>
          <span style={spacerMargin}> · </span>
          <div>
            {tempArray.map((el, i) => {
              return <span key={i}>$</span>;
            })}
          </div>
        </div>
        <div className="suggestion-rating">
          <img className="zagat-logo" src={require('./icons/zagat_icon.png')} alt="zagat-logo" />
          <div className="zagat-review-text">
            <span>FOOD </span>
            <span style={{ color: 'red' }}>{this.props.restaurant.zagatReview.review}</span>
          </div>
          <img className="google-logo" src={require('./icons/google.png')} alt="google-logo" />
          <div className="google-text">
            <span>{this.state.avgRating}</span>
            <img className="stars" src={require('./icons/5stars.jpg')} alt="5stars" />
          </div>
        </div>
        <div>
          {this.props.restaurant.businessInfo.tag}
        </div>
      </div>
    );
  }
}