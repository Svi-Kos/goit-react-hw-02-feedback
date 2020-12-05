import React from 'react';
import s from '../Statistics/Statistics.module.css';

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

export default Statistics;
