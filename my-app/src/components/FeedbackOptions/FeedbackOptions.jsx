import React, { Component } from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <button
            type="button"
            className={s.button}
            key={option.id}
            onClick={() => this.props.onLeaveFeedback(option.label)}
            onFocus={this.props.showStatistics}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
