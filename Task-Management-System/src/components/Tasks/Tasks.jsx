import React, { useEffect, useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import CompletedTasks from './CompletedTasks';
import styles from './Tasks.module.css';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const activeTasks = tasks.filter(task => task.status !== 'Completed');
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  return (
    <div className={styles.container}>
      <Aside />
      <div className={styles.tasksContainer}>
        <Main tasks={activeTasks} />
        <CompletedTasks tasks={completedTasks} />
      </div>
    </div>
  );
}

export default Tasks;