import React from 'react';
import Hours from './Hours.jsx';

export default class CurrentHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extend: false,
      day: 'Sunday',
      time: '12:00 AM',
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }

  handleClick() {
    this.setState({
      extend: !this.state.extend 
    });
  }

  updateDate() {
    const date = new Date();
    const dayOptions = {weekday: 'long'};
    const timeOptions = {hour: 'numeric', minute: '2-digit'};

    this.setState({
      day: date.toLocaleDateString(date, dayOptions),
      time: date.toLocaleTimeString()
    });
  }

  checkOpenStatus(currentDayTimes) {
    if (currentDayTimes !== 'Loading') {
      let regexFindHour = /(\d+):/;
      let currTimeHour = this.state.time.match(regexFindHour);
      if (this.state.time.includes('AM')) {
        let amOpeningHour = currentDayTimes[0].match(regexFindHour);
        if (+currTimeHour[1] > +amOpeningHour[1]) {
          this.setState({
            isOpen: true,
          });
        }
      }
      if (this.state.time.includes('PM')) {
        let pmOpeningHour = currentDayTimes[1].match(regexFindHour);
        if (+currTimeHour[1] < +pmOpeningHour[1]) {
          this.setState({
            isOpen: true,
          });
        }
      }
    }
  }
  

  componentDidMount() {
    this.updateDate();
    this.checkOpenStatus(this.props.times[this.state.day]);
  }

  render() {
    const currentDayTimes = this.props.times[this.state.day];
    const openNow = <div><b>Open Now</b> · {currentDayTimes[0]} - {currentDayTimes[1]} </div>;
    const nextDay = this.days[(this.days.findIndex(day => day === this.state.day) + 1)] || this.days[0];
    const openTom = <div><b>Closed Now</b> · Opens {nextDay} at {this.props.times[nextDay][0]} </div>;
  
    return (
      <div onClick={() => this.handleClick()}>
        {this.state.isOpen ? openNow : openTom}
        <div>
          {
            this.state.extend && (
              this.days.map((day) => {
                return <Hours day={day} businessHours={this.props.times[day]} currDay={this.state.day} />;
              })
            )
          }
        </div>
      </div>
    );
  }
}