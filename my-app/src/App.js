import React, { Component } from 'react';
import './App.css';
import SectionFeedbackWidget from './components/FeedbackWidget/SectionFeedbackWidget';
// import statOptions from './statOptions.json';
import FeedbackOptions from '../src/components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import statOptions from '../src/statOptions.json';
import Notification from 'components/Notification/Notification';
// import PropTypes from 'prop-types';
// import s from 'components/FeedbackWidget/FeedbackWidget.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positivePercentage: 0,
    visible: false,
  };

  showStatistics = () => {
    this.setState({ visible: true });
  };

  onLeaveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
      total: prevState.good + prevState.neutral + prevState.bad + 3,
      positivePercentage: (this.state.good % this.state.total) * 100,
    }));
  };

  render() {
    return (
      <div>
        <SectionFeedbackWidget title="Please leave feedback">
          {/* <h2>Please leave feedback</h2> */}

          <FeedbackOptions
            options={statOptions}
            onLeaveFeedback={this.onLeaveFeedback}
            showStatistics={this.showStatistics}
          />

          {!this.state.visible && (
            <Notification message="No feedback given"></Notification>
          )}

          {this.state.visible && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </SectionFeedbackWidget>
      </div>
    );
  }
}

export default App;
