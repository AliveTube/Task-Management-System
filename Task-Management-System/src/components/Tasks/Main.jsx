import React, { useState } from 'react';
import styles from './Main.module.css';
import Task from './Task';
import { AiFillFilter } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = ({ activeTasks, toggleTaskStatus }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterType, setFilterType] = useState('');
  const { uniqueId } = useParams();
  const Path = useSelector((state) => state.Path);

  const navigateToAddTask = () => {
    console.log('toDoListId:', uniqueId);
    navigate(`/home/addTask/${uniqueId}`);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    setShowDropdown(false);
    if (filter === 'date') {
      const sortedTasks = activeTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }
    else if (filter === 'priority') {
      const sortedTasks = activeTasks.sort((a, b) => {
        const priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    }
  };

  const handleBlurDropdown = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{Path.TodoListName? Path.FolderName: "Tasks"}<span style={{ color: "#4CAF4F", fontWeight: "700" }}>{Path.TodoListName? ' > ' : ''}</span>{Path.TodoListName}</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.filterButton} onClick={toggleDropdown} onBlur={handleBlurDropdown}>
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
        {activeTasks.map((task) => (
          <Task key={task.uniqueId} task={task} toggleTaskStatus={toggleTaskStatus} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
