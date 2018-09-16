import React from 'react';
import './SuggestionPics.css';

export default class SuggestionPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: 0
    };

    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handlePrevBtn = this.handlePrevBtn.bind(this);
  }

  handleNextBtn() {
    this.state.currentPic === this.props.photos.length - 1 ?
      this.setState({
        currentPic: 0
      }) :
      this.setState({
        currentPic: this.state.currentPic + 1
      });
  }

  handlePrevBtn() {
    this.state.currentPic === 0 ?
      this.setState({
        currentPic: this.props.photos.length - 1
      }) :
      this.setState({
        currentPic: this.state.currentPic - 1
      });
  }


  render() {
    let options = {
      width: '250px',
      height: '250px',
      backgroundSize: 'cover',
      backgroundImage: `url(${this.props.photos[this.state.currentPic]})`
    };
    
    return (
      <div className="suggestion-pics" style={options}>
        <button className="button" onClick={() => this.handlePrevBtn()}>&lt;</button>
        <button className="button" onClick={() => this.handleNextBtn()}>&gt;</button>
      </div>
    );
  }
}