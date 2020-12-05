import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.statistics}>
    <h3>Statistics</h3>
    <span className={s.statisticsItem}>Good: {good}</span>
    <span className={s.statisticsItem}>Neutral: {neutral}</span>
    <span className={s.statisticsItem}>Bad: {bad}</span>
    <span className={s.statisticsItem}>Total: {total}</span>
    <span className={s.statisticsItem}>
      positivePercentage: {positivePercentage}%
    </span>
  </div>
);

Statistics.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  Total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
