import React from 'react';
import Task from './Task';
import styles from './CompletedTasks.module.css'; // Importing styles

const CompletedTasks = () => {
  return (
    <details className={styles.dropdown}>
      <summary className={styles.summary}>Completed Tasks</summary>
      <ul className={styles.completedTasksList}>
        <Task completed={true} />
        <Task completed={true} />
        <Task completed={true} />
      </ul>
    </details>
  );
};

export default CompletedTasks;
