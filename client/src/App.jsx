/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import SuggestionsContainer from './components/Suggestions/SuggestionsContainer';
import Zagat from './components/Dummy/Zagat';
import Carousel from './components/Dummy/Carousel';
import Publications from './components/Dummy/Publications';
import Reviews from './components/Dummy/Reviews';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {
    this.getBusinessInfo(Math.floor(Math.random() * 100));
  }

  getBusinessInfo(id) {
    axios.get(`/restaurant/${id}/info`)
      .then((response) => {
        this.setState({
          restaurant: response.data,
        });
      });
  }


  render() {
    const { restaurant } = this.state;

    if (restaurant === null) {
      return <div />;
    }
    return (
      <div className="app">
        <div className="info">
          <Sidebar info={restaurant.businessInfo} />

        </div>
        <div className="suggestions">
          <SuggestionsContainer
            cuisine={restaurant.details.cuisine}
            id={restaurant.id}
            name={restaurant.businessInfo.name}
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
