import React, { Component } from 'react';
import './App.css';
import SectionFeedbackWidget from './components/FeedbackWidget/SectionFeedbackWidget';
import FeedbackOptions from '../src/components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import statOptions from '../src/statOptions.json';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  showStatistics = () => {
    this.setState({ visible: true });
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      total: prevState.good + prevState.neutral + prevState.bad + 1,
      positivePercentage:
        ((prevState.good + 1) /
          (prevState.good + prevState.neutral + prevState.bad + 1)) *
        100,
    }));
  };

  render() {
    return (
      <div>
        <SectionFeedbackWidget title="Please leave feedback">
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
