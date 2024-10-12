import React from 'react';
import Task from './Task';
import styles from './CompletedTasks.module.css'; // Importing styles

const CompletedTasks = ({tasks}) => {
  return (
    <details className={styles.dropdown}>
      <summary className={styles.summary}>Completed Tasks</summary>
      <ul className={styles.completedTasksList}>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </details>
  );
};

export default CompletedTasks;