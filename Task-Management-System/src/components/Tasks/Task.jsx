import React from 'react';
import styles from './Task.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPath } from '../../ReduxSlices/PathSlice';

const Task = ({ task, toggleTaskStatus }) => {

  const dispatch = useDispatch();

  const getRandomColor = () => {
    const colorOptions = [
      "#4CAF4F", "#4CAF97", "#4CAF27",
      "#3E9B44", "#65B861", "#2F8D38",
      "#AF4F4C", "#4F4CAF", "#AFAF4F",
      "#AF4CAF", "#4CAF8C", "#68AF4C", "#AF4C68"
    ];
    let color = colorOptions[Math.floor(Math.random() * 13)];
    return color;
  };

  const navigate = useNavigate();

  const navigateToTaskDetails = () => {
    dispatch(setPath({type:"TaskName", value:task.title}));
    navigate(`/home/taskDetails/${task.uniqueId}`);
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

  const handleCheckboxChange = () => {
    toggleTaskStatus(task);
  };

  const formattedDate = new Date(task.deadline).toLocaleDateString();

  return (
    task && (
      <div
        className={`${styles.item} ${
          task.status === 'Completed' ? styles.completed : ''
        }`}
        style={{ borderColor: getRandomColor() }}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={handleCheckboxChange}
          checked={task.status === 'Completed'}
          key={task.uniqueId}
        />
        <button onClick={navigateToTaskDetails} className={styles.listButton}>
          <li>
            <span className={styles.text}>{task.title}</span>
            <span
              className={styles.priority}
              style={{ color: getPriorityColor(task.priority) }}
            >
              {task.priority}
            </span>
            <span className={styles.date}>Due {formattedDate}</span>
          </li>
        </button>
      </div>
    )
  );
};

export default Task;
