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
            onClick={this.props.onLeaveFeedback}
            onFocus={this.props.showStatistics}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
}

// const FeedbackOptions = ({ options, onLeaveFeedback, showStatistics }) => (
//   <div>
//     {options.map(option => (
//       <button
//         type="button"
//         className={s.button}
//         key={option.id}
//         onClick={onLeaveFeedback}
//         onFocus={showStatistics}
//       >
//         {option.label}
//       </button>
//     ))}
//   </div>
// );

// const FeedbackOptions = ({ onGoodClick, onNeutralClick, onBadClick }) => (
//   <div>
//     <button type="button" className={s.button} onClick={onGoodClick}>
//       Good
//     </button>
//     <button type="button" className={s.button} onClick={onNeutralClick}>
//       Neutral
//     </button>
//     <button type="button" className={s.button} onClick={onBadClick}>
//       Bad
//     </button>
//   </div>
// );

export default FeedbackOptions;
