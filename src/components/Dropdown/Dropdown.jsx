import styles from './Dropdown.module.css';
import PropTypes from 'prop-types';
const Dropdown = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <ul className={styles['Feedback__list']}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li style={{ color: 'blue' }}>Total: {totalFeedback}</li>
      <li style={{ color: 'green' }}>
        Positive Feedbacks: {Math.round(positivePercentage)}%
      </li>
    </ul>
  );
};
Dropdown.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Dropdown;
