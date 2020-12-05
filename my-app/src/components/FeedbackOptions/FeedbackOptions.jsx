import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        className={s.button}
        key={option.id}
        onClick={onLeaveFeedback}
      >
        {option.label}
      </button>
    ))}
  </div>
);

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
