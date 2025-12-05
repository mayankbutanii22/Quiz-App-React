import React from 'react';
import Quiz from './Components/Quiz';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Quiz App</h1>
        <div className={styles.content}>
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default App;

