import React from 'react';
import styles from './Task.module.css';

const Task = ({ task }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'blue';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  };

  const addToCompleted = () => {
    
  };

  return (
    task &&
    (<li
      className={`${styles.item} ${task.status === 'Completed' ? styles.completed : ''}`}
      style={{ borderColor: getRandomColor() }}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={addToCompleted}
        defaultChecked={task.status === 'Completed'}
      />
      <span className={styles.text}>{task.title}</span>
      <span className={styles.priority} style={{ color: getPriorityColor(task.priority) }}> {task.priority}</span>
      <span className={styles.date}>Due {task.deadline}</span>
    </li>)
  );
};

export default Task;