import React, { useEffect } from 'react';
import Main from './Main';
import CompletedTasks from './CompletedTasks';
import styles from './Tasks.module.css';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useParams } from 'react-router-dom';

const Tasks = () => {
  const { tasks, updateTasks } = useOutletContext();
  const { uniqueId } = useParams();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.TokenInUse);
  let userData;
  if (token.length) {
    userData = jwtDecode(token);
  }

  const toggleTaskStatus = async (task) => {
    const updatedStatus = task.status === 'Completed' ? 'InProgress' : 'Completed';
    const updatedTask = { ...task, status: updatedStatus };

    try {
      await axios.put(`http://localhost:3000/api/tasks/${task.uniqueId}`, {
        task: updatedTask
      });

      const updatedTasks = tasks.map((t) =>
        t.uniqueId === task.uniqueId ? updatedTask : t
      );

      updateTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const activeTasks = tasks.filter(
    (task) => task.status !== 'Completed' && task.userId === userData?.uniqueId && task.toDoListId === parseInt(uniqueId)
  );

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed' && task.userId === userData?.uniqueId && task.toDoListId === parseInt(uniqueId)
  );

  // useEffect(() => {
  //   dispatch(setPath({type:"TaskName", value:""}));
  // }, []);

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
