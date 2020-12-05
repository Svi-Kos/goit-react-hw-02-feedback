// import React, { Component } from 'react';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';
// import statOptions from '../../statOptions.json';
// import Notification from '../Notification/Notification';
// import PropTypes from 'prop-types';
import s from '../FeedbackWidget/FeedbackWidget.module.css';

function SectionFeedbackWidget({ title, children }) {
  return (
    <div className={s.feedback}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// class SectionFeedbackWidget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     // total: 0,
//     // positivePercentage: 0,
//     visible: false,
//   };

//   showStatistics = () => {
//     this.setState({ visible: true });
//   };

//   onLeaveFeedback = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//       neutral: prevState.neutral + 1,
//       bad: prevState.bad + 1,
//       total: prevState.good + prevState.neutral + prevState.bad + 3,
//       positivePercentage: (this.state.good % this.state.total) * 100,
//     }));
//   };

//   // onGoodClick = () => {
//   //   this.setState(prevState => ({
//   //     good: prevState.good + 1,
//   //     total: prevState.total + 1,
//   //     positivePercentage: prevState.total + 1 * 100,
//   //   }));
//   // };

//   // onNeutralClick = () => {
//   //   this.setState(prevState => ({
//   //     neutral: prevState.neutral + 1,
//   //     total: prevState.total + 1,
//   //   }));
//   // };

//   // onBadClick = () => {
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //     total: prevState.total + 1,
//   //   }));
//   // };

//   render() {
//     return (
//       <div className={s.feedback}>
//         <h2>Please leave feedback</h2>

//         <FeedbackOptions
//           options={statOptions}
//           onLeaveFeedback={this.onLeaveFeedback}
//           showStatistics={this.showStatistics}
//         />

//         {!this.state.visible && (
//           <Notification message="No feedback given"></Notification>
//         )}

//         {this.state.visible && (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.state.total}
//             positivePercentage={this.state.positivePercentage}
//           />
//         )}
//       </div>
//     );
//   }
// }

// const FeedbackOptions = () => (
//   <>
//     <div className={s.feedback}>
//       <h2>Please leave feedback</h2>
//       <button type="button" className={s.button}>
//         good
//       </button>
//       <button type="button" className={s.button}>
//         neutral
//       </button>
//       <button type="button" className={s.button}>
//         bad
//       </button>
//     </div>
//   </>
// );

// class FeedbackOptions extends React.Component {
//     render() {
//         return (    <>
//         <div className={s.feedback}>
//             <h2>Please leave feedback</h2>
//             {options.map(option => (<button type="button" onClick={() => console.log('клик на кнопку')} className={s.button} key={option.id}>{option.label}</button>))}
//         </div>
//     </>)
//     }
// }

// const FeedbackOptions = ({ options }) => (
//     <>
//         <div className={s.feedback}>
//             <h2>Please leave feedback</h2>
//             {options.map(option => (<button type="button" onClick={() => console.log('клик на кнопку')} className={s.button} key={option.id}>{option.label}</button>))}
//         </div>
//     </>
// )

// function FeedbackOptions({ options }) {
//   return (
//     <>
//       <div className={s.feedback}>
//         <h2>Please leave feedback</h2>
//         {options.map(option => (
//           <button
//             type="button"
//             onClick={() => console.log('click on button')}
//             className={s.button}
//             key={option.id}
//           >
//             {option.label}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
// };

export default SectionFeedbackWidget;
