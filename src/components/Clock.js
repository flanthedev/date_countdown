import React, { Component } from 'react';
import '../App.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    } 
  }

  componentWillMount() {
    this.updateCount(this.props.formatted_date);
  }

  componentDidMount() {
    setInterval(() => this.updateCount(this.props.formatted_date), 1000);
  }

  updateCount(input) {
    const time = Date.parse(input) - Date.parse(new Date());
    const days = Math.floor(time / (1000*60*60*24));
    const hours = Math.floor(time / (1000*60*60) % 24);
    const minutes = Math.floor((time/1000/60) % 60);
    const seconds = Math.floor((time/1000) % 60);
    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div className='Clock'>
        {this.state.days} days, {this.state.hours} hours, {this.state.minutes} minutes, {this.state.seconds} seconds
      </div>
    );
  }
}
