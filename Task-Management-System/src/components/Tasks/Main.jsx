import React, { useState } from 'react';
import styles from './Main.module.css';
import Task from './Task';
import { AiFillFilter } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

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
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Tasks</h1>
        <div className={styles.buttonsContainer}>
          {/* Filter dropdown */}
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
        {/* {tasks.map(task => (
          <Task key={task.id}/>
        ))} */}
        <Task></Task>
      </ul>
    </main>
  );
};

export default Main;
