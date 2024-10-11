import React from 'react';
import styles from './Task.module.css';

const Task = ({ completed = false }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addToCompleted = () => {
    // Add your completion logic here
  };

  return (
    <li
      className={`${styles.item} ${completed ? styles.completed : ''}`}
      style={{ borderColor: getRandomColor() }}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={addToCompleted}
        defaultChecked={completed}
      />
      <span className={styles.text} style = {{textDecoration: completed ? 'line-through' : 'none' }}>Task 1</span>
      <span className={styles.priority}> High Priority</span>
      <span className={styles.date}>Due 2021-10-10</span>
    </li>
  );
};

export default Task;
