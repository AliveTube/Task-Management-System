import React from 'react';
import Main from './Main';
import CompletedTasks from './CompletedTasks';
import styles from './Tasks.module.css';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const Tasks = () => {
  const { tasks, updateTasks } = useOutletContext();

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

      updateTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const activeTasks = tasks.filter((task) => task.status !== 'Completed');
  const completedTasks = tasks.filter((task) => task.status === 'Completed');

  return (
    <div className={styles.container}>
      <div className={styles.tasksContainer}>
        <Main activeTasks={activeTasks} toggleTaskStatus={toggleTaskStatus} />
        <CompletedTasks tasks={completedTasks} toggleTaskStatus={toggleTaskStatus} />
      </div>
    </div>
  );
};

export default Tasks;
