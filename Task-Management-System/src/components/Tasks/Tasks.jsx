import React, { useEffect, useState } from 'react';
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

  const toggleTaskStatus = async (task) => {
    const updatedStatus = task.status === 'Completed' ? 'InProgress' : 'Completed';
    const updatedTask = { ...task, status: updatedStatus };

    try {
      await axios.put(`http://localhost:3000/api/tasks/${task.uniqueId}`, {
        status: updatedStatus,
      });

      const updatedTasks = tasks.map((t) =>
        t.uniqueId === task.uniqueId ? updatedTask : t
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const activeTasks = tasks.filter((task) => task.status !== 'Completed');
  const completedTasks = tasks.filter((task) => task.status === 'Completed');

  return (
    <div className={styles.container}>
      <div className={styles.tasksContainer}>
        <Main tasks={activeTasks} toggleTaskStatus={toggleTaskStatus} />
        <CompletedTasks tasks={completedTasks} toggleTaskStatus={toggleTaskStatus} />
      </div>
    </div>
  );
};

export default Tasks;
