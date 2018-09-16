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
    return (
      <div>
        <div>
          {this.props.restaurant.businessInfo.name}
        </div>
        <div className="suggestion-categories">
          <span>{this.props.restaurant.details.cuisine}</span>
          <span> · </span>
          <span>{this.props.restaurant.businessInfo.location.neighborhood}</span>
          <span> · </span>
          <div>
            {tempArray.map((el, i) => {
              return <span key={i}>1</span>;
            })}
          </div>
        </div>
        <div className="suggestion-rating">
          <div>
            <span>FOOD</span>
            <span>{this.props.restaurant.zagatReview.review}</span>
          </div>
          <span> | </span>
          <div>
            <span>{this.state.avgRating}</span>
          </div>
        </div>
        <div>
          {this.props.restaurant.businessInfo.tag}
        </div>
      </div>
    );
  }
}