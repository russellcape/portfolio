import React from 'react';
import styles from '../styles/interactive-background.module.css';

const InteractiveBackground = () => {
  return (
    <div className={styles.interactiveBackground}>
      <div className={styles.dot}></div>
      {/* Add more dots or other interactive elements here */}
    </div>
  );
};

export default InteractiveBackground;