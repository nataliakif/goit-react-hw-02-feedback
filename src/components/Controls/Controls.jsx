import React from 'react';
import styles from './Controls.module.css';
import PropTypes from 'prop-types';

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles['Feedback__buttons']}>
      {options.map(name => {
        return (
          <button
            className={styles['Feedback__button']}
            type="button"
            key={name}
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
