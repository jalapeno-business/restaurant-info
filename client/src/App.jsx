import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import SuggestionsContainer from './components/Suggestions/SuggestionsContainer.jsx';
import Zagat from './components/Dummy/Zagat.jsx';
import Carousel from './components/Dummy/Carousel.jsx';
import Publications from './components/Dummy/Publications.jsx';
import Reviews from './components/Dummy/Reviews.jsx';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: null
    };
  }

  getBusinessInfo(id) {
    axios.get(`/restaurant/${id}/info`)
      .then((response) => {
        this.setState({
          restaurant: response.data
        });
      });
  }

  generateRandomID() {
    return Math.floor(Math.random() * 100);
  }

  componentDidMount() {
    this.getBusinessInfo(this.generateRandomID());
  }

  render() {
    if (this.state.restaurant === null) {
      return <div />;
    }
    // const { businessInfo } = this.state.restaurant;
    return (
      <div className="app">
        <div className="info">
          <Sidebar info={this.state.restaurant.businessInfo} />
          
        </div>
        <div className="suggestions">
          <SuggestionsContainer 
            cuisine={this.state.restaurant.details.cuisine} 
            id={this.state.restaurant.id}
            name={this.state.restaurant.businessInfo.name}
          />

        </div>
        <div className="zagat">
          <Zagat />

        </div>
        <div className="carousel">
          <Carousel />

        </div>
        <div className="publication">
          <Publications />

        </div>
        <div className="reviews">
          <Reviews />

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));