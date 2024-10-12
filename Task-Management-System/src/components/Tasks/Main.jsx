import React, { useState } from 'react';
import styles from './Main.module.css';
import Task from './Task';
import { AiFillFilter } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = ({ tasks }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterType, setFilterType] = useState('');

  const navigateToAddTask = () => {
    navigate('/home/addTask');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    setShowDropdown(false);
    if (filter === 'date') {
      const sortedTasks = tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      setTasks([...sortedTasks]);
    }
    else if (filter === 'priority') {
      const sortedTasks = tasks.sort((a, b) => {
        const priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
      setTasks([...sortedTasks]);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Tasks</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.filterButton} onClick={toggleDropdown}>
            <AiFillFilter />
          </button>
          {showDropdown && (
            <div className={styles.dropdown}>
              <button onClick={() => handleFilterChange('date')}>Filter by Date</button>
              <button onClick={() => handleFilterChange('priority')}>Filter by Priority</button>
            </div>
          )}
          <button className={styles.button} onClick={navigateToAddTask}>Add Task</button>
        </div>
      </div>
      <ul className={styles.ul}>
        {tasks.map(task => (
          <Task key={task.id} task = {task}/>
        ))}
      </ul>
    </main>
  );
};

export default Main;
