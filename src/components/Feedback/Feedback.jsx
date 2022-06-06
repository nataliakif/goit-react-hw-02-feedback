import React from 'react';
import Controls from '../Controls/Controls';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (good / total) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles['Feedback']}>
        <h2 className={styles['Feedback__title']}>Please leave feedback</h2>
        <Controls
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2 className={styles['Feedback__title']}>Statistics</h2>
        {!this.countTotalFeedback() ? (
          <p>There is no feedback</p>
        ) : (
          <Dropdown
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Feedback;
