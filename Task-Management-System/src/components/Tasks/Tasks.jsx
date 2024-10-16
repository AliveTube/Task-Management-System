import React from 'react';
import Main from './Main';
import CompletedTasks from './CompletedTasks';
import styles from './Tasks.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Tasks = () => {
  const { toDoListId } = useParams();
  const [tasks, setTasks] = useState([]);


  const fetchTasks = async () => {
    try {
        console.log('Fetching tasks for uniqueId:', toDoListId);
        const response = await axios.get(`http://localhost:3000/api/allTasks/${toDoListId}`);
        const allTasks = response.data;

        console.log('Fetched tasks:', allTasks);

        setTasks(allTasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTasks = () => {
    fetchTasks();
  };

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

      updateTasks();
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
